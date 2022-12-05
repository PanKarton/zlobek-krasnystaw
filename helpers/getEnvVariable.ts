export const getEnvVariable = (name: string | undefined): string => {
  if (!name) throw new Error(`Missing env variable`);
  return name;
};
