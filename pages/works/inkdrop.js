import { Container, List, Link, ListItem, Badge } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import  P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
    return (
        <Layout title={"Inkdrop"}>
            <Container>
                <Title>
                    Inkdrop <Badge>2016</Badge>
                </Title>
                <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.youtube.com'>
                            https://www.youtube.com <ExternalLinkIcon mx={"2px"} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Mac/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Nodejs, Reactjs, NextJs</span>
                    </ListItem>
                </List>
                
                <WorkImage src={"/images/works/inkdrop_01.png"} alt="inkdrop"/>
                <WorkImage src={"/images/works/inkdrop_02.png"} alt="inkdrop"/>
            </Container>
        </Layout>
    );
}

export default Work;