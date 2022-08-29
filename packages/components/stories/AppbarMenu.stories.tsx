import { Avatar, Box } from '@chakra-ui/react';
import * as Page from '../src/components/app/Page';
import * as Sidebar from '../src/components/app/Sidebar';
import * as Appbar from '../src/components/app/Appbar';
import { MemoryRouter } from 'react-router-dom';
import { AppbarNavLinksMenu, NavLinks } from '../src';

export default {
  title: 'App/Appbar',
};

export function AppbarLinksExample() {
  return (
    <Box m="-1rem">
      <Sidebar.CollapsibleProvider>
        <MemoryRouter>
          <Page.Main bg="rgba(54, 153, 174, 0.05)">
            <Sidebar.CollapsibleContainer />
            <Appbar.Container>
              <Appbar.Inner>
                <Sidebar.CollapsibleToggleButton />
                <NavLinks variant="appbar">
                  <AppbarNavLinksMenu
                    links={[
                      { title: 'Link', to: '/' },
                      { title: 'Link2', to: '/12' },
                    ]}
                  />
                </NavLinks>
                <Avatar size="sm" name="test" />
              </Appbar.Inner>
            </Appbar.Container>
          </Page.Main>
        </MemoryRouter>
      </Sidebar.CollapsibleProvider>
    </Box>
  );
}
