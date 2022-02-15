import {
  Button,
  ButtonProps,
  Flex,
  Box,
  Spinner,
  Text,
  BoxProps,
  Image,
  ImageProps,
} from '@chakra-ui/react';

import UploadIcon from '../../assets/cloud-upload-outline.svg';
import Arrow from '../../assets/arrow-right-1.svg';

export function Container({ drag, ...props }: { drag: boolean } & BoxProps) {
  return (
    <Box
      pos="relative"
      w="100%"
      h="13rem"
      border="2px dashed transparent"
      borderColor={drag ? '#BADDDE' : 'transparent'}
      borderRadius="1rem"
      {...props}
    />
  );
}

type ArrowButtonProps = Omit<ButtonProps, 'children'> & {
  isLeft?: boolean;
};

export function ArrowButton({ isLeft = false, ...rest }: ArrowButtonProps) {
  return (
    <Button
      pos="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px="0.75rem"
      m={0}
      variant="unstyled"
      aria-label="scroll"
      size="sm"
      height="100%"
      top="0"
      bottom="0"
      _focus={{ shadow: 0 }}
      {...rest}
    >
      <Arrow style={{ transform: isLeft ? 'rotate(180deg)' : undefined }} />
    </Button>
  );
}

type UploadOverlayProps = {
  uploading: boolean;
  title?: string;
};

export function UploadOverlay({
  uploading,
  title = 'Upload images up to 3MB.',
}: UploadOverlayProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      transition="opacity 0.1s ease"
      pos="absolute"
      left="0"
      right="0"
      top="0"
      bottom="0"
      cursor="pointer"
      opacity={uploading ? 1 : 0}
      _hover={{
        opacity: 1,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: '-0.25rem',
        zIndex: 0,
        backgroundColor: '#7e8b8e',
        opacity: 0.5,
        borderRadius: '1rem',
      }}
    >
      {!uploading && (
        <Flex zIndex={1} color="white" flexDir="column" align="center">
          <UploadIcon />
          <Text fontSize="0.75rem" lineHeight="1rem" mt="0.25rem"></Text>
        </Flex>
      )}
      {uploading && (
        <Spinner zIndex={1} thickness="0.25rem" color="white" size="xl" />
      )}
    </Box>
  );
}

export function PreviewImage(props: ImageProps) {
  return (
    <Image
      w="100%"
      h="13rem"
      objectFit="contain"
      bg="transparent"
      borderRadius="1rem"
      border="1px solid #eceeee"
      {...props}
    />
  );
}
