import { MouseEvent, useCallback } from 'react';

type Props = {
  imageUrls?: string[] | null;
  value?: string | null;
  onChange: (url?: string) => void;
  readOnly?: boolean;
};

export default function useGalleryButtons({
  value,
  onChange,
  readOnly = true,
  imageUrls,
}: Props) {
  const index = imageUrls?.indexOf(value || '') ?? -1;
  const count = imageUrls?.length || 0;

  const next = useCallback(
    (evt: MouseEvent<HTMLElement>) => {
      evt.preventDefault();
      evt.stopPropagation();
      if (!readOnly && count) {
        const newIndex = index + 1 < count ? index + 1 : 0;
        onChange(imageUrls?.[newIndex]!);
      }
    },
    [count, imageUrls, index, onChange, readOnly],
  );

  const prev = useCallback(
    (evt: MouseEvent<HTMLElement>) => {
      evt.preventDefault();
      evt.stopPropagation();

      if (!readOnly && count) {
        const newIndex = index !== 0 ? index - 1 : count - 1;
        onChange(imageUrls?.[newIndex]!);
      }
    },
    [count, imageUrls, index, onChange, readOnly],
  );

  const isGallery = !readOnly && count > 1;

  return { isGallery, next, prev };
}
