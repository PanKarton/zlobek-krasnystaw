export const getEnvVariable = (name: string | undefined): string => {
  if (!name) throw new Error(`Missing ${name}`);
  return name;
};
