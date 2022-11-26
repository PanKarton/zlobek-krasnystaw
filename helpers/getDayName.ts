export const getDayName = (value: Date, locale = 'pl-PL') => {
  const date = new Date(value);
  return date.toLocaleDateString(locale, { weekday: 'long' });
};
