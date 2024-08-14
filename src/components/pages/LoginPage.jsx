import { useState } from 'react';
import InputBox from '../atom/InputBox';
import Alink from '../atom/Alink';
import TextButton from '../atom/TextButton';
import login from '../../apis/login';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    id: '',
    password: '',
  });
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl drop-shadow-lg mt-48 mb-12">Sign in</h1>
      <InputBox
        type="email"
        placeholder="Your Email *(이메일)"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={(e) => {
          setLoginData((prev) => ({
            ...prev,
            id: e.target.value,
          }));
        }}
      />
      <InputBox
        type="password"
        placeholder="Your Password *"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={(e) => {
          setLoginData((prev) => ({
            ...prev,
            password: e.target.value,
          }));
        }}
      />
      <TextButton
        color="light"
        moreStyle="w-[500px] h-[55px] leading-[55px] mb-6"
        handleClick={() => {
          login(loginData);
        }}
      >
        Login
      </TextButton>

      <Alink href="/">Back to Home</Alink>
    </div>
  );
}

export default LoginPage;
