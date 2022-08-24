import { Avatar, Box } from '@chakra-ui/react';
import * as Appbar from '../src/components/app/Appbar';
import { OpenMenuProvider } from '../src/components/app/OpenMenuContext';
import * as Sidebar from '../src/components/app/Sidebar';

export default {
  title: 'App/Layout',
};

export function LayoutExample() {
  return (
    <OpenMenuProvider>
      <Box>
        <Box>
          <Sidebar.MobileLogo to="/">Moblie</Sidebar.MobileLogo>
          <Sidebar.Container>
            <Sidebar.DesktopLogo to="/">Desk</Sidebar.DesktopLogo>
          </Sidebar.Container>
        </Box>
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
    </OpenMenuProvider>
  );
}
