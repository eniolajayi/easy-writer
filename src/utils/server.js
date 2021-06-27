export const getServerUrl = () => {
  if (process.env.NODE_ENV !== "development") {
    return process.env.REACT_APP_SERVER_URL;
  } else {
    return "http://localhost:4000";
  }
};
