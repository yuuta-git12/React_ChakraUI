import { Button, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import system from './theme/theme';
import { Router } from './router/Router';



export default function App() {
  return (
    <>
      <ChakraProvider value={system}>
        <BrowserRouter>
        
        {/* ボタンの色を変更する */}
        <Button colorPalette="teal">ボタン</Button>
        <p>お文具さーーーん</p>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}
