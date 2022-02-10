import { Image, ImageProps, useStyles } from '@chakra-ui/react';
import { getResourceImg } from '../getResourceImg';

export function ResourceCardImage({ src, ...props }: ImageProps) {
  const styles = useStyles();

  return (
    <Image __css={styles.image} src={getResourceImg(src, 'card')} {...props} />
  );
}
