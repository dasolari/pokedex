const getTypeId = (url: string | undefined): number | undefined => {
  if (!url) return undefined;
  const splittedUrl = url.split('/');
  return Number(splittedUrl[splittedUrl.length - 2]);
};

export default getTypeId;
