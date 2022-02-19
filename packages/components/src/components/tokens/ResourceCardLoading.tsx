import { Image, ImageProps, Skeleton, useStyles } from '@chakra-ui/react';

import { Actions, Container, Content, Header } from './ResourceCard';

function CardImage({ src, ...props }: ImageProps) {
  const styles = useStyles();
  return <Image __css={styles.image} src={src} {...props} />;
}

export function Card() {
  return (
    <Container>
      <Skeleton borderTopRadius="0.875rem">
        <CardImage src="" />
      </Skeleton>
      <Content>
        <Header />
      </Content>
      <Actions />
    </Container>
  );
}

type CardProps = {
  loaded: boolean;
  num?: number;
};

export function Cards({ loaded, num = 4 }: CardProps) {
  if (loaded) {
    return null;
  }
  return (
    <>
      {Array.from(Array(num).keys()).map((id) => (
        <Card key={id} />
      ))}
    </>
  );
}
