import Axios from "./base";

export const getUser = () => {
  return Axios.get("/api/user").then((res) => {
    console.log(res);
    return res;
  });
};

export const getPcImg = () => {
  return Axios.get("/api/todos/1").then((res) => {
    console.log(res);
    return res;
  });
};
