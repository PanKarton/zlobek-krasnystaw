export const buildDownloadPdfURL = (path: string) => {
  const base = process.env.NODE_ENV === 'development' ? '/' : 'https://zlobek-krasnystaw.pl/';
  return base + path;
};
