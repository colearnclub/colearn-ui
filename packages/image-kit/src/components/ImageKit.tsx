import { createContext, ReactNode, useContext, useState } from 'react';

import ImgKitClient from '../ImgKitClient';

export const IKConext = createContext<ImgKitClient | null>(null);

type Props = {
  children: ReactNode;
  publicKey: string;
  urlEndpoint: string;
  authenticationEndpoint?: string;
  auth?: boolean;
};

export function ImageKitProvider({
  children,
  publicKey,
  urlEndpoint,
  authenticationEndpoint,
  auth = true,
}: Props) {
  const [value] = useState(
    new ImgKitClient(publicKey, urlEndpoint, authenticationEndpoint, auth),
  );
  return <IKConext.Provider value={value}>{children}</IKConext.Provider>;
}

export function useImageKit(): ImgKitClient | null {
  return useContext(IKConext);
}
