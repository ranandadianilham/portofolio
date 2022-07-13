import NextLink from 'next/link';
import { Box, Heading, Link, Image, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({children, }) => {
    return(
        <Box>
            <NextLink href={"/works"}>
                <Link>Works</Link>
            </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading as={"h3"} display="inline-block" fontSize={20} mb="4">
            {children}
        </Heading>
        </Box>
    );
}

export const WorkImage = ({ src, alt}) => {
    return (
    <Image
        borderRadius={"lg"}
        w="full"
        src={src}
        alt={alt}
        mb={4}    
    />);
}

export const Meta = ({ children }) => {
    return (
        <Badge colorScheme={"green"} mr="2">
            {children}
        </Badge>
    );
}