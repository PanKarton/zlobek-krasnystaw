export const getEnvVariable = (name: string | undefined): string => {
  console.log('getEnv:', name);

  if (!name) throw new Error(`Missing ${name}`);
  return name;
};
