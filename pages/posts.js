import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg';
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg';

const Posts = () => {
    return <Layout title={"Posts"}>
        <Container>
            <Heading mb={4} as={"h3"} fontSize={20}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid gap={6} column={[1, 2, 2]}>
                    <GridItem
                    title={"My fish workflow"}
                    thumbnail={thumbFishWorkflow}
                    href="https://www.youtube.com/"
                    />
                    <GridItem
                    title={"My Desk Setup"}
                    thumbnail={thumbMyDeskSetup}
                    href="https://www.youtube.com/"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
}

export default Posts;