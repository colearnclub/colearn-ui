import { useMemo, useRef } from 'react';
import { Box, BoxProps, Button, Flex } from '@chakra-ui/react';

import { Maybe, PageCursorInfo, PageOffsetInfo } from '../types';

import useDimenstionsObserver from '../hooks/useDimenstionsObserver';
import useInfinitePageScroll from '../hooks/useInfinitePageScroll';

type ResourcesGridProps = BoxProps & {
  pageInfo?: Maybe<PageOffsetInfo | PageCursorInfo>;
  loading?: boolean;
  onFetchMore?: () => void;
};

export const DEFAULT_PAGE_SIZE = 25;
export const CARD_WIDTH = 220;
export const CARD_PADDING_X = 12;

function calcContainerWidth(width?: number, maxCols = 7) {
  if (!width) {
    return undefined;
  }
  const cardSizeFull = CARD_WIDTH + 2 * CARD_PADDING_X;
  return Math.min(width - (width % cardSizeFull), cardSizeFull * maxCols);
}

export default function ResourcesGrid({
  children,
  pageInfo,
  loading = false,
  onFetchMore,
  ...props
}: ResourcesGridProps) {
  const loaderRef = useInfinitePageScroll<HTMLButtonElement>(
    !!pageInfo?.hasNextPage,
    onFetchMore,
  );

  const ref = useRef<HTMLDivElement>(null);
  const d = useDimenstionsObserver(ref);
  const maxW = useMemo(() => calcContainerWidth(d?.width, 7), [d?.width]);

  return (
    <Box {...props} ref={ref}>
      <Box
        maxW={maxW}
        mx="auto"
        sx={{
          '> *': {
            mx: `${CARD_PADDING_X}px`,
            mt: `${CARD_PADDING_X * 2}px`,
          },
        }}
      >
        {children}
      </Box>
      {pageInfo?.hasNextPage && (
        <Flex align="center" justify="center" mt="1.5rem">
          <Button onClick={onFetchMore} ref={loaderRef} variant="link">
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </Flex>
      )}
    </Box>
  );
}
