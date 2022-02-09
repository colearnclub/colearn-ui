import { useRef } from 'react';
import { Box, BoxProps, Button, Flex } from '@chakra-ui/react';
import useInfinitePageScroll from '../hooks/useInfinitePageScroll';

import { Maybe, PageCursorInfo, PageOffsetInfo } from '../types';

type Props = BoxProps & {
  pageInfo?: Maybe<PageOffsetInfo | PageCursorInfo>;
  loading?: boolean;
  onFetchMore?: () => void;
};

export default function InfinitListContainer({
  children,
  pageInfo,
  loading = false,
  onFetchMore,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const loaderRef = useInfinitePageScroll<HTMLButtonElement>(
    !!pageInfo?.hasNextPage,
    onFetchMore,
  );

  return (
    <Box {...props} ref={ref}>
      {children}
      {pageInfo?.hasNextPage && (
        <Flex align="center" justify="center">
          <Button
            ref={loaderRef}
            onClick={onFetchMore}
            variant="link"
            size="sm"
          >
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </Flex>
      )}
    </Box>
  );
}
