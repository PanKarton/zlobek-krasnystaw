export const getEnv = (name: string | undefined): string => {
  if (!name) throw new Error(`Missing ${name}`);
  return name;
};
