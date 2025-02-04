import { createSystem, defaultConfig } from "@chakra-ui/react";


const system = createSystem(defaultConfig,{
    globalCss:{
        "html, body": {
            backgroundColor: "red.100",
            color: "gray.800",
        }
    }
})

export default system;