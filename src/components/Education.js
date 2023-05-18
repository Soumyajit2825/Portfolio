import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  Image,
  Button,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import { Fade } from "react-reveal";
import aot from '../images/ACADEMY OF TECHNOLOGY,BANDEL,HOOGHLY.jpg'
export default function Education({ color }) {
  const profile = ProfileArray();
  return (
    <>
      <Container maxW={"3xl"} id="education">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Education</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {/* {profile.education} */}
            <Fade bottom>
            <Card 
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '400px' }}
                src={aot}
                alt='Academy Of Technology'
              />
              <Stack>
                <CardBody>
                  <Heading size='md'>B.Tech in Computer Science and Business Systems</Heading>
                  <Text py='2'>
                    Currently in 3rd Year @Academy Of Technology
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button position='relative' variant='solid' colorScheme='blue'>
                    View Marksheet
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </Fade>
        </Text>
      </Stack>
    </Container>
    </>
  );
}
