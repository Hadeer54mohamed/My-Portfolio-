import createImageUrlBuilder from '@sanity/image-url';
import { client } from './client'; // أو '../sanity/lib/client' حسب مكانه

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
