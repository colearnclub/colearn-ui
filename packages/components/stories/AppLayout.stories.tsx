import { Avatar, Box } from '@chakra-ui/react';
import * as Page from '../src/components/app/Page';
import * as Sidebar from '../src/components/app/Sidebar';
import * as Appbar from '../src/components/app/Appbar';
import { MemoryRouter } from 'react-router-dom';
import { NavLink, NavLinks } from '../src';
import { HamburgerIcon } from '@chakra-ui/icons';

export default {
  title: 'App/Layout',
};

export function LayoutExample() {
  return (
    <Box m="-1rem">
      <Sidebar.CollapsibleProvider>
        <MemoryRouter>
          <Page.Main bg="rgba(54, 153, 174, 0.05)">
            <Sidebar.CollapsibleContainer>
              <Box>
                <Sidebar.LogoLink to="/">Logo</Sidebar.LogoLink>
                <NavLinks variant="sidebar">
                  <NavLink to="/" icon={<HamburgerIcon />}>
                    <Sidebar.Text>Link 1</Sidebar.Text>
                  </NavLink>
                  <NavLink to="/" icon={<HamburgerIcon />}>
                    <Sidebar.Text>Link 2</Sidebar.Text>
                  </NavLink>
                </NavLinks>
              </Box>
            </Sidebar.CollapsibleContainer>
            <Appbar.Container>
              <Appbar.Inner>
                <Sidebar.CollapsibleToggleButton />
                <Appbar.TitleContainer>
                  <Appbar.Title>Dashboard</Appbar.Title>
                  <Appbar.Subtitle>Our Family</Appbar.Subtitle>
                </Appbar.TitleContainer>
                <Avatar size="sm" name="test" />
              </Appbar.Inner>
            </Appbar.Container>
          </Page.Main>
        </MemoryRouter>
      </Sidebar.CollapsibleProvider>
    </Box>
  );
}
