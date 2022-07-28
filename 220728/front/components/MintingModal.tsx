import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react'; // 함수형 컴포넌트 타입
import useAccount from '../hooks/useAccount';
import useWeb3 from '../hooks/useWeb3';

// props로 받을 내용의 타입을 지정해줘야 한다.
interface MintingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MintingModal: FC<MintingModalProps> = ({ isOpen, onClose }) => {
    const { account } = useAccount();
    const { web3, jwToken, saleToken } = useWeb3();

    const handleClick = async () => {
        try {
            if (!account || !web3 || !jwToken || !saleToken) return;
            console.log(jwToken);
            const response = await jwToken.methods.mintToken().send({
                from: account, // 연결된 account
                value: web3.utils.toWei('1', 'ether'),
            });

            // console.log(response);

            if (response.status) {
                const total: string = await jwToken.methods.totalSupply().call();
                // console.log(total);
                const info = await jwToken.methods.TokenDatas(total).call();
                console.log(info);

                // 민팅한 내역을 볼 수 있게 해야한다.
                // 가지고 있는 NFT 중 최신 NFT 가져오기
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Minting</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>민팅시 1 Eth가 소모됩니다.</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="green" mr={3} onClick={handleClick}>
                            민팅
                        </Button>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default MintingModal;
