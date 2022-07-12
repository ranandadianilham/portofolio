import { Container, Heading, Box,  SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbnailWork from '../public/images/works/inkdrop_eyecatch.png';
import thumbWalkNode from '../public/images/works/walknote_eyecatch.png';
import Layout from "../components/layouts/article";

const Works = () => {
    return (
    <Layout>
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Works
            </Heading>
            
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id={"inkdrop"} title="workdrop" thumbnail={thumbnailWork}>
                        Super work
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id={"walknote"} title="walknote" thumbnail={thumbWalkNode}>
                        walking note uwu
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
    )
}

export default Works