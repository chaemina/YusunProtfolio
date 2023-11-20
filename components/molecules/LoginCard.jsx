import React, { useState } from "react";
import axios from "axios";
import Button from "../atom/Button";

const LoginCard = () => {
  const [nickName, setNickName] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://port-0-portfoilo-be-3szcb0g2blp5tw9ck.sel5.cloudtype.app/login",
        { nickName },
      );

      const authToken = response.headers.Authorization;

      window.localStorage.setItem("token", authToken);

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <p className="text-2xl">Enter your NickName</p>
      <input
        className="border w-[30%] h-[10%] p-4"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />
      <Button
        onClick={handleLogin}
        className="w-[30%] h-[70%] bg-sky-500 text-white hover:text-sky-500 hover:bg-white hover:border-sky-500"
      >
        Login
      </Button>
    </>
  );
};

export default LoginCard;
