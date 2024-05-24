import React, { useState } from 'react';
import { generateQRCode } from './api';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Image,
  Flex,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { FaRegThumbsUp, FaRegThumbsDown, FaDownload } from 'react-icons/fa';
import { observer } from 'mobx-react-lite';
// import { LikeDislikeModel } from '../Models/LikesDislikeModel';

// const store = LikeDislikeModel.create({});

export const QRCodeGenerator = observer(() => {
  const FormModal = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feedback Form</ModalHeader>
          <ModalBody>
            <Box bg="gray.100" p={4} borderRadius="md">
              <iframe
                title="Feedback Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeyrW9aZ8Ln5oeTGKXrdU0KyOWMhePnc-Kyw-2wxLPPw412Zw/viewform?embedded=true"
                width="100%"
                height="600"
                style={{ border: 'none' }}
              >
                Loading...
              </iframe>
            <Box mt={4} textAlign="center">
              <Button color={'red'} onClick={onClose}>
                Close
              </Button>
            </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  const [qrData, setQrData] = useState('example.com');
  const [qrSize, setQrSize] = useState('200x200');
  const [qrCode, setQrCode] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleLike = () => {
    store.incrementLikes();
  };

  const handleDislike = () => {
    store.incrementDislikes();
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    const generatedQRCode = generateQRCode(qrData, qrSize);
    setQrCode(generatedQRCode);
  };

  const downloadQRCode = async () => {
    const response = await fetch(qrCode);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `QRCode-${qrData}.png`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Flex
      className="app-container"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      p={4}
      bgGradient="linear(to-r, teal.300, blue.500)"
      borderRadius={10}
    >
      <Box
        className="input-container"
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        m={4}
        width="full"
        maxWidth="500px"
        border="1px solid"
        borderColor="gray.200"
      >
        <Heading as="h1" size="xl" className="app-title" mb={6} textAlign="center">
          Free QR Code Generator
        </Heading>
        <FormControl mb={4} border="1px solid" borderColor="gray.300" p={3} borderRadius="md">
          <FormLabel htmlFor="qrUrl" className="input-label">
            QR URL:
          </FormLabel>
          <Input
            id="qrUrl"
            className="input-field"
            type="text"
            value={qrData}
            onChange={(e) => setQrData(e.target.value)}
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl mb={6} border="1px solid" borderColor="gray.300" p={3} borderRadius="md">
          <FormLabel htmlFor="qrSize" className="input-label">
            QR Size:
          </FormLabel>
          <Input
            id="qrSize"
            className="input-field"
            type="text"
            value={qrSize}
            onChange={(e) => setQrSize(e.target.value)}
            focusBorderColor="teal.500"
          />
        </FormControl>
        <Flex direction="column" gap={4} mb={4} align="center">
      <Button
        borderRadius={10}
        bg={'gray.100'}
        size="md"
        onClick={handleSubmit}
        px={6} 
        py={3} 
        fontSize="lg" 
        fontWeight="bold" 
        shadow="md"
        _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
        _active={{ transform: 'translateY(1px)', shadow: 'sm' }} 
      >
        Generate QR Code
      </Button>
      <Button
        borderRadius={10}
        bg={'gray.100'}
        size="md"
        onClick={onOpen}
        px={6} 
        py={3} 
        fontSize="lg" 
        fontWeight="bold" 
        shadow="md" 
        _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
        _active={{ transform: 'translateY(1px)', shadow: 'sm' }} 
      >
        Feedback
      </Button>
    </Flex>
      </Box>
      <Box
        width={qrSize || '200px'}
        height={qrSize || '200px'}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(129, 236, 236, 0.09)',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
          border: '1px solid',
          borderColor: 'teal.500',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {qrCode && (
          <Box>
            <Image src={qrCode} alt="Generated QR Code" />
            <Link href={qrCode} download="QRCode.png">
              <Button leftIcon={<FaDownload />} colorScheme="teal" mt={4}>
                Download QR Code
              </Button>
            </Link>
          </Box>
        )}
      </Box>
      <FormModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
});