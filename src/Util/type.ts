export interface Result {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

export interface Pagemap {
  cse_thumbnail: CSEThumbnail[];
  metatags: { [key: string]: string }[];
  cse_image: CSEImage[];
}

export interface CSEImage {
  src: string;
}
export interface CSEThumbnail {
  src: string;
  width: string;
  height: string;
}
