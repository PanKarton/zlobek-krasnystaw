type NameToType = {
  readonly ENV: 'production' | 'staging' | 'development' | 'test';
  readonly NODE_ENV: 'production' | 'development';
  readonly PORT: number;
};
export function getEnv<Env extends keyof NameToType>(name: Env): NameToType[Env];
export function getEnv(name: keyof NameToType): NameToType[keyof NameToType] {
  const val = process.env[name] as 'production' | 'staging' | 'development' | 'test' | undefined;

  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return val;
}
