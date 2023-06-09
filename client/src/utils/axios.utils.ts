import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: `https://contact-list-tau-sage.vercel.app`,
});

export const request = async ({ ...options }) => {
  const onSuccess = (response: AxiosResponse) => {
    if (response.status === 200 && response.data.success) {
      return response.data.data;
    }
    return response;
  };
  const onError = (error: any) => {
    console.log(error);
    if (
      error.response?.status === 403 &&
      error.response?.data?.success === false
    ) {
      throw new Error(error.response?.data?.message);
    }
    if (
      error.response?.status === 401 &&
      error.response?.data?.success === false
    ) {
      throw new Error(error.response?.data?.message);
    }
    if (
      error.response?.status === 404 &&
      error.response?.data?.success === false
    ) {
      throw new Error(error.response?.data?.message);
    }

    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
