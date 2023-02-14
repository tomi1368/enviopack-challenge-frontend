import axios, { AxiosRequestConfig } from "axios";
const BASE_URL = "http://localhost:2000";

interface VerbParamsInterface {
  url: string;
  body?: any;
  config?: AxiosRequestConfig;
}

const getConfig = async (config) => {
  return {
    baseURL: BASE_URL,
  };
};

const Get = async ({ url, config = {} }: VerbParamsInterface) => {
  const defaultConfig = await getConfig(config);
  const { data } = await axios.get(url, { ...defaultConfig });
  return data;
};

const Post = async ({ url, body = {}, config = {} }: VerbParamsInterface) => {
  const defaultConfig = await getConfig(config);
  const { data } = await axios.post(url, body, { ...defaultConfig });
  return data;
};

const Put = async ({ url, body = {}, config = {} }: VerbParamsInterface) => {
  const defaultConfig = await getConfig(config);
  const { data } = await axios.put(url, body, { ...defaultConfig });
  return data;
};

const Del = async ({ url, config = {} }: VerbParamsInterface) => {
  const defaultConfig = await getConfig(config);
  const { data } = await axios.delete(url, { ...defaultConfig });
  return data;
};

const Patch = async ({ url, body = {}, config = {} }: VerbParamsInterface) => {
  const defaultConfig = await getConfig(config);
  const { data } = await axios.patch(url, body, {
    ...defaultConfig,
  });
  return data;
};

const actions = {
  Get,
  Post,
  Put,
  Del,
  Patch,
};

export default actions;
