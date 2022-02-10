import ImageKit from 'imagekit-javascript';

import { parseURL } from './utils';

export type UploadResult = {
  name: string;
  fileId: string;
  filePath: string;
  fileType: string;
  height: number;
  size: number;
  width: number;
  thumbnailUrl: string;
  url: string;
};

export type GetUrlParams = {
  path?: string;
  src?: string;
  transformation?: any[];
  transformationPosition?: 'path' | 'query';
  queryParameters?: any;
};

export default class ImgKitClient {
  private client: ImageKit;

  public urlEndpoint: string;

  private static instance_: ImgKitClient;

  public static init(publicKey: string, urlEndpoint: string): ImgKitClient {
    if (!ImgKitClient.instance_) {
      ImgKitClient.instance_ = new ImgKitClient(publicKey, urlEndpoint);
    }
    return this.instance();
  }

  public static instance(): ImgKitClient {
    if (!ImgKitClient.instance_) {
      throw new Error('using instance before initialization()');
    }
    return ImgKitClient.instance_;
  }

  constructor(
    publicKey: string,
    urlEndpoint: string,
    authenticationEndpoint?: string,
    auth = false,
  ) {
    if (!publicKey) {
      throw new Error('Missing publicKey during initialization');
    }

    if (!urlEndpoint) {
      throw new Error('Missing urlEndpoint during initialization');
    }
    this.urlEndpoint = urlEndpoint;

    let newUrlEndpoint = urlEndpoint;

    const url_params = parseURL(urlEndpoint);
    let { protocol, host, pathname } = url_params;
    pathname = pathname.slice(1);
    let leadingSlashes = pathname.match('/+');
    if (leadingSlashes) {
      pathname = pathname.replace(leadingSlashes[0], '/');
      newUrlEndpoint = `${protocol}//${host}/${pathname}`;
    }

    this.client = new ImageKit({
      publicKey,
      urlEndpoint: newUrlEndpoint,
      authenticationEndpoint: auth ? authenticationEndpoint : undefined,
    });
  }

  public async upload(
    file: File,
    fileName: string,
    folder: string = '/',
    useUniqueFileName: boolean = true,
    tags?: string[] | null,
    isPrivateFile: boolean = false,
    customCoordinates?: any,
    responseFields?: any,
  ): Promise<UploadResult | null> {
    const params = {
      file,
      fileName,
      useUniqueFileName,
      isPrivateFile,
      folder,
    };

    if (tags) {
      // @ts-expect-error
      params.tags = tags;
    }
    if (customCoordinates) {
      // @ts-expect-error
      params.customCoordinates = customCoordinates;
    }
    if (responseFields) {
      // @ts-expect-error
      params.responseFields = responseFields;
    }

    return new Promise((resolve, reject) => {
      this.client.upload(params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  public getUrl({
    path,
    src,
    transformation = [],
    transformationPosition,
    queryParameters,
  }: GetUrlParams): string {
    let newPath = path;
    if (path) {
      let trailingSlashes = newPath?.match('/+');
      if (trailingSlashes) {
        newPath = newPath?.replace(trailingSlashes[0], '/');
      }
    }

    if (src) {
      return this.client.url({
        src,
        transformation,
        transformationPosition: 'query',
        queryParameters,
      });
    }

    if (path) {
      return this.client.url({
        path: newPath!,
        transformation,
        transformationPosition: transformationPosition || 'path',
        queryParameters,
      });
    }
    throw new Error('Missing src/path!');
  }
}
