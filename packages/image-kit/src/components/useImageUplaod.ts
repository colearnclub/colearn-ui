import { useCallback } from 'react';
import { nanoid } from 'nanoid';

import { UploadResult } from '../ImgKitClient';
import { useImageKit } from './ImageKit';

function getFilExt(name: string): string {
  const parts = name.split('.');
  if (parts.length < 2) {
    return '';
  }
  return `.${parts.pop()?.toLowerCase()}`;
}

type RetType = (file: File) => Promise<UploadResult | null>;

export const ImageUplpoadDirs = {
  resoucres: '/resources',
};

export default function useImageUplaod(
  dir: keyof typeof ImageUplpoadDirs,
): RetType {
  const ik = useImageKit();

  const upload = useCallback(
    (file) => {
      const fileName = `${nanoid(16)}${getFilExt(file.name)}`;
      return ik!.upload(file, fileName, ImageUplpoadDirs[dir]);
    },
    [ik, dir],
  );
  return upload;
}
