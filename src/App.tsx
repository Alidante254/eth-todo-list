// App.tsx
import React, { useEffect, useState } from "react";
import { Box, Button, ChakraProvider, Input, Text } from "@chakra-ui/react";
import SimpleStorage from "./contracts/SimpleStorage.json";
import theme from "./theme/theme";
import Web3 from "web3";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [data, setData] = useState("nill");
  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      console.log(networkId);

      // @ts-ignorets
      const deployedNetwork = SimpleStorage.networks[networkId];
      console.log(deployedNetwork);
      const contract = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork.address
      );
      console.log(contract);
      // @ts-ignorets
      setState({ web3: web3, contract: contract });
    }
    provider && template();
  }, []);
  useEffect(() => {
    const { contract } = state;
    async function readData() {
      // @ts-ignorets
      const data = await contract.methods.getter().call();
      console.log(data);
      setData(data);
    }
    contract && readData();
  }, [state]);
  async function writeData() {
    const { contract } = state;
    // @ts-ignorets
    const newData = document.querySelector("#value").value;
    // @ts-ignorets
    await contract.methods
      .setter(newData)
      .send({ from: "0xEF44E4b0b8a8f85CB34A99BbEb0cb111DBd3CAF7" });
      console.log(data);
    window.location.reload();
  }

  return (
    <ChakraProvider theme={theme}>
      <Home />
      <Box p={4} maxW="md" mx="auto">
        <Input
          type="text"
          id="value"
          placeholder="Enter value"
        />
        <Text>Contract Data: {`${data}`}</Text>
        <Button mt={4} colorScheme="blue" onClick={writeData}>
          Change Data
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default App;
