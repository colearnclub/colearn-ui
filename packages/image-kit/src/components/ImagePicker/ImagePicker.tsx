import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { FormControl, FormErrorMessage, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import useImageUplaod, { ImageUplpoadDirs } from '../useImageUplaod';

import useSyncedState from '../useSyncedState';
import useGalleryButtons from './useGalleryButtons';

import { Container, ArrowButton, UploadOverlay, PreviewImage } from './styles';

const MAX_SIZE = 1024 * 1024 * 3; //3mb

type Props = {
  dir?: keyof typeof ImageUplpoadDirs;
  imageUrls?: string[] | null;
  value?: string | null;
  onChange: (url?: string | null) => void;
  readOnly?: boolean;
  clearButton?: boolean;
};

export default function ImagePicker({
  value,
  onChange,
  readOnly = true,
  dir = 'resoucres',
  clearButton = false,
  imageUrls: initial,
}: Props) {
  const upload = useImageUplaod(dir);
  const [uploading, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const [imageUrls, setImageUrls] = useSyncedState<
    string[] | null,
    string[] | null
  >(initial ?? null);

  const { isGallery, next, prev } = useGalleryButtons({
    value,
    onChange,
    readOnly,
    imageUrls,
  });

  const drop = useCallback(
    async (acceptedFiles) => {
      if (uploading) {
        return;
      }
      setUploading(true);
      setErrorMessage('');
      try {
        const response = await upload(acceptedFiles[0]);
        setImageUrls((urls) =>
          urls ? [...urls, response?.url!] : [response?.url!],
        );
        onChange(response?.url!);
      } catch (err: any) {
        setErrorMessage(err.message);
        console.log(err);
      }
      setTimeout(() => setUploading(false), 450);
    },
    [onChange, setImageUrls, upload, uploading],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ['image/*'],
    multiple: false,
    maxSize: MAX_SIZE,
    noClick: false,
    disabled: readOnly,
    onDrop: drop,
  });

  const clear = useCallback(
    (evt) => {
      evt.preventDefault();
      evt.stopPropagation();

      if (uploading) {
        return;
      }
      onChange(null);
    },
    [uploading, onChange],
  );

  return (
    <FormControl isInvalid={!!errorMessage}>
      <Container drag={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && <PreviewImage src={value!} />}

        {!readOnly && <UploadOverlay uploading={uploading} />}
        {isGallery && <ArrowButton left="-2rem" isLeft onClick={next} />}
        {isGallery && <ArrowButton right="-2rem" onClick={prev} />}
        {clearButton && !readOnly && value && (
          <IconButton
            pos="absolute"
            aria-label="close"
            top="1rem"
            right="0.5rem"
            variant="link"
            color="gray.500"
            icon={<CloseIcon />}
            onClick={clear}
          />
        )}
      </Container>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
