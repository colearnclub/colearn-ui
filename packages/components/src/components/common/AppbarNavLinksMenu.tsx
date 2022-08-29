import { Menu, MenuList, MenuItem, MenuButton, Box } from '@chakra-ui/react';

import { NavLink } from '../common/NavLinks';
import useMatchPaths from '../hooks/useMatchPaths';

import DiscloseIcon from '../../assets/disclose-down.svg';

type LinkProps = {
  title: string;
  to: string;
  matchTo?: string;
};

type Props = {
  links?: LinkProps[];
  collapsed?: boolean;
};

export default function AppbarNavLinksMenu({ links }: Props) {
  const matched = useMatchPaths(links);
  return (
    <Menu isLazy placement="bottom-start" variant="appbar">
      <MenuButton aria-selected={true} ml="1rem">
        <Box>{matched?.title}</Box>
        <DiscloseIcon className="disclose" />
      </MenuButton>
      <MenuList>
        {links?.map((r) => (
          <MenuItem
            key={r.to}
            as={NavLink}
            justifyContent="flex-start"
            opacity={1}
            to={r.to}
          >
            {r.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
