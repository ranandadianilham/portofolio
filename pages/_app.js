import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'
import Fonts from "../components/fonts"
import theme from "../libs/theme"
import { AnimatePresence } from "framer-motion"

const Website = ({Component, PageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...PageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website