import { Avatar, Box } from '@chakra-ui/react';
import * as Appbar from '../Appbar';

export default {
  title: 'App/Appbar',
};

export function AppbarExample() {
  return (
    <Box minH="100vh">
      <Appbar.Container>
        <Appbar.Inner>
          <Appbar.TitleContainer>
            <Appbar.Title>Dashboard</Appbar.Title>
            <Appbar.Subtitle>Our Family</Appbar.Subtitle>
          </Appbar.TitleContainer>
          <Avatar size="sm" name="test" />
        </Appbar.Inner>
      </Appbar.Container>
    </Box>
  );
}
