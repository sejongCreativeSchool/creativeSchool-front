export const changeDataFormat = (received) => {
  //2020-05-31T11:39:43.261Z
  let date = received.substring(0, 10);
  let time = received.substring(11, 16);

  return [date, time];
};
