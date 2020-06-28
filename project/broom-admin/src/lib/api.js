import axios from "axios";

let errandBaseUrl = "http://booreum.com:3001/v1/errand";

export const getErrands = () => {
  return axios.get(errandBaseUrl);
};

export const getErrandById = (id) => {
  return axios.get(`${errandBaseUrl}/${id}`);
};

export const deleteErrandById = (id) => {
  return axios.delete(`${errandBaseUrl}/${id}`);
};

let noticeBaseUrl = "http://booreum.com:3001/v1/post";

export const postNotice = (html, title) => {
  let formData = new FormData();
  formData.append("html", html);
  formData.append("title", title);

  return axios({
    method: "post",
    url: `${noticeBaseUrl}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

export const updateNoticeById = (html, title, id) => {
  let formData = new FormData();
  formData.append("html", html);
  formData.append("title", title);

  console.log(formData);

  return axios({
    method: "put",
    url: `${noticeBaseUrl}/${id}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

export const getNotices = () => {
  return axios.get(`${noticeBaseUrl}`);
};

export const getNoticeById = (id) => {
  return axios.get(`${noticeBaseUrl}/${id}`);
};

export const getHTMLStringFromURL = (url) => {
  return axios.get(url);
};

export const deleteNoticeById = (id) => {
  return axios.delete(`${noticeBaseUrl}/${id}`);
};

let userBaseUrl = "http://booreum.com:3001/v1/auth/user";

export const getUsers = () => {
  return axios.get(`${userBaseUrl}s`);
};

export const getUserById = (accessToken) => {
  return axios.get(`${userBaseUrl}/${accessToken}`);
};

export const deleteUserById = (id) => {
  return axios.delete(`${userBaseUrl}/${id}`);
};

let loginBaseURL = "http://booreum.com:3001/v1/auth";

export const postLogin = (id, password) => {
  return axios({
    method: "post",
    url: `${loginBaseURL}/login`,
    data: {
      user_id: id,
      user_pw: password,
    },
  });
};

export const checkAuth = () => {
  console.log(localStorage.token);
  return axios({
    method: "get",
    url: `${loginBaseURL}/check`,
    headers: {
      "x-access-token": localStorage.token,
    },
  });
};
