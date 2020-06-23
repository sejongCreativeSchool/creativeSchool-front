import axios from "axios";
let notificationBaseURL = `http://www.booreum.com:3001/v1/post`;

export const getNotificationsById = async (id) => {
  return axios.get(`${notificationBaseURL}/${id}`);
};

export const getNotices = () => {
  return axios.get(`${notificationBaseURL}`);
};

export const getNoticeById = (id) => {
  return axios.get(`${notificationBaseURL}/${id}`);
};

export const getHTMLStringFromURL = (url) => {
  return axios.get(url);
};
