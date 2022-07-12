import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Layout from '../components/layouts/article';
import { BioSection, BioYear } from '../components/bio';
import { ChevronRightIcon } from '@chakra-ui/icons';
const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p="3" mb="6" align="center">
                    Hello, I&apos;m a full-stackdev
                </Box>
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as={"h2"} variant="page-title">
                            Rananda Dian Ilham
                        </Heading>
                        <p>Digital artist</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth="2"
                            borderStyle="solid" 
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/foto.jpeg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>
                
                <Section delay={0.1}>
                    <Heading as={"h3"} variant='section-title'>
                        Work
                    </Heading>
                    <Paragraph>
                        The chakra factory function can be used to represent animation and interaction using framer motion props, 
                        as in the example below called {' '}
                        <NextLink href="works/inkdrop"><Link>WorkDrop</Link></NextLink>.</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href={"/works"}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">my Portofolio</Button>
                        </NextLink>
                    </Box>
                </Section>
                
                <Section delay={0.2}>
                    <Heading as="h3" variant={"section-title"}>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>
                        Born in West Java, Indonesia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Completed Undergraduate School
                    </BioSection>
                </Section>
                
                <Section delay={0.2}>
                    <Heading as="h3" variant={"section-title"}>
                        Hobby and Other
                    </Heading>
                    <Paragraph>
                        <Link>Drawing</Link>, <Link>Music</Link>, & <Link>3D model</Link>
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;