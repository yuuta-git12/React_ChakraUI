import { Button, ChakraProvider, defaultSystem } from '@chakra-ui/react';
// import './App.css';

export default function App() {
  return (
    <>
      <ChakraProvider value={defaultSystem}>
        {/* ボタンの色を変更する */}
        <Button colorPalette="teal">ボタン</Button>
      </ChakraProvider>
    </>
  );
}
