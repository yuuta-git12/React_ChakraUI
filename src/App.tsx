import { Button, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import system from './theme/theme';




export default function App() {
  return (
    <>
      <ChakraProvider value={system}>
        {/* ボタンの色を変更する */}
        <Button colorPalette="teal">ボタン</Button>
        <p>お文具さーーーん</p>
      </ChakraProvider>
    </>
  );
}
