import axios from "axios";

export const handleLogin = async (
  nickName,
  setToken,
  setStoredNickName,
  setNickName,
) => {
  try {
    if (nickName !== "") {
      const response = await axios.post(
        "https://port-0-portfoilo-be-3szcb0g2blp5tw9ck.sel5.cloudtype.app/login",
        { nickName },
      );
      const authToken = response.headers.authorization;

      window.localStorage.setItem("token", authToken);
      setToken(authToken);
      setNickName("");
      setStoredNickName(nickName);
    }
  } catch (err) {
    console.error(err);
  }
};

export const handleLogout = (setToken) => {
  setToken("");
  window.localStorage.removeItem("token");
};
