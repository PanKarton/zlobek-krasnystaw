export const formatDate = (value: Date, locale = 'pl-PL') => {
  const date = new Date(value);
  return date.toLocaleDateString(locale);
};
