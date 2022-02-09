import { Post, PostGet, PostWrite } from "../types/post";
import { createQueryString } from "../utils/createQueryString";
import { getReq, postReq, updateGetReq } from "../utils/customFetch";

export const getPost = async (condition: PostGet = {}) => {
  return await (await getReq(`/post${createQueryString(condition)}`)).json();
};
export const getRefreshPost = async (condition: PostGet = {}) => {
  return await (
    await updateGetReq(`/post${createQueryString(condition)}`)
  ).json();
};
export const setPost = async (newPost: PostWrite): Promise<Post[]> => {
  return await (
    await postReq(`/post${createQueryString(newPost)}`, JSON.stringify(newPost))
  ).json();
};
