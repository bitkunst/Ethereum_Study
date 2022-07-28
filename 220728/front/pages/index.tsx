import type { NextPage } from 'next';
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import MintingModal from '../components/MintingModal';
import useAccount from '../hooks/useAccount';
import useWeb3 from '../hooks/useWeb3';
import { useEffect } from 'react';
// Box == div , Flex == flex 들어간 div

const Home: NextPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // modal창 커스텀 훅

    // const { account } = useAccount();
    // const { web3, jwToken, saleToken } = useWeb3();

    // useEffect(() => {
    //     console.log(web3);
    //     console.log(jwToken);
    //     console.log(saleToken);
    // });

    return (
        <>
            <Flex bg="red.100" minH="100vh" justifyContent="center" alignItems="center">
                <Button colorScheme="blue" onClick={onOpen}>
                    민팅하기
                </Button>
            </Flex>
            <MintingModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Home;

/*
  Chakra-ui css
  bg : background
  minH : min height
*/
