import { default as heads } from './heads';
import * as fs from 'fs';

function getImageSuffix(file: ArrayBufferView | string, suffixs: Array<string> = Object.keys(heads)): string {
  let fileBuffer = new Uint8Array();
  if (file instanceof Buffer) {
    fileBuffer = file as Uint8Array;
  } else {
    fileBuffer = fs.readFileSync(file as string);
  }
  for (const suffix in heads) {
    if (suffixs.indexOf(suffix) < 0) continue;
    let headers = heads[suffix];
    let isImage = false;
    for (const header of headers) {
      if (header.begin) {
        const headbuf = Buffer.from(header.begin);
        isImage = headbuf.equals(fileBuffer.slice(0, header.begin.length));
      }
      if (isImage && header.end) {
        const endbuf = Buffer.from(header.end);
        isImage = endbuf.equals(fileBuffer.slice(-header.end.length));
      }
      if (isImage) {
        return suffix;
      }
    }
  }
  return '';
}

function isImage(file: ArrayBufferView | string, suffixs: Array<string>): boolean {
  return getImageSuffix(file, suffixs) !== '';
}

export default {
  isImage,
  getImageSuffix,
  get suffixs(): Array<string> {
    return Object.keys(heads);
  },
};

const suffixs = Object.keys(heads);

export { isImage, getImageSuffix, suffixs };
