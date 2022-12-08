import { getEnvVariable } from './getEnvVariable';

export const buildURL = (path: string | undefined) => getEnvVariable(process.env.NEXT_PUBLIC_STRAPI_URL) + path;
