export const getEnv = (name: string | undefined): string => {
  console.log('Dzialam');

  if (!name) throw new Error(`Missing ${name}`);
  return name;
};
