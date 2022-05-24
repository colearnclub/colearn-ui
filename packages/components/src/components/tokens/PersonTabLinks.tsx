import { Flex, FlexProps } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { PersonTab, PersonTabProps } from './PersonTab';

import { Maybe, PersonMembership } from '../types';

export function PersonTabLink(props: { to: string } & PersonTabProps) {
  return <PersonTab as={Link} {...props} />;
}

type Props = FlexProps & {
  members?: Maybe<Maybe<PersonMembership>[]>;
  all?: boolean;
  selected?: string;
  allTitle?: string;
  formatterArgs?: any;
  urlFormatter: (args?: any, person?: Maybe<PersonMembership>) => string;
};

export function PersonTabLinks({
  members,
  all = true,
  allTitle = 'All learners',
  urlFormatter,
  formatterArgs,
  selected,
  ...rest
}: Props) {
  return (
    <Flex align="center" flexWrap="wrap" {...rest}>
      {all && (
        <PersonTabLink
          pl="1rem"
          variant="outline"
          title={allTitle}
          selected={!selected}
          to={urlFormatter(formatterArgs)}
        />
      )}
      {members?.map((member) => (
        <PersonTabLink
          key={member?.personId}
          variant="outline"
          person={member?.person}
          selected={member?.personId === selected}
          to={urlFormatter(formatterArgs, member)}
        />
      ))}
    </Flex>
  );
}
