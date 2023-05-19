'use client'; 

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { theme } from "@/chakra/theme";

interface UIProviderProps {
    children: React.ReactNode; 
}

const UIProvider: React.FC<UIProviderProps> = ({
    children
}) => {

    return(
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )

}

export default UIProvider; 