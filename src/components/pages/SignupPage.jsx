import React, { useState } from 'react';
import InputBox from '../atom/InputBox';
import TextButton from '../atom/TextButton';
import Alink from '../atom/Alink';
import signup, { getValidCheck } from '../../apis/signup';

function SignupPage() {
  const [signupData, setSignupData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [validCode, setValidCode] = useState('');

  const [checkPassword, setCheckPassword] = useState('');

  const [emailVailCheck, setEmailValidCheck] = useState(false);
  const [vailCheck, setValidCheck] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl drop-shadow-lg mt-16 mb-12">Sign up</h1>
      <InputBox
        type="text"
        placeholder="Your Name *(실명)"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={(e) => {
          setSignupData((prev) => ({
            ...prev,
            username: e.target.value,
          }));
        }}
      />
      <div className="relative">
        <InputBox
          type="email"
          placeholder="Your Email *(이메일)"
          isError={false}
          moreStyle="w-[500px] h-[70px] mb-8"
          disabled={emailVailCheck}
          onChange={(e) => {
            setSignupData((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        <div className="absolute top-5 right-4">
          <TextButton
            color="dark"
            moreStyle="w-[100px]  leading-[25px] rounded-xl text-sm"
            handleClick={() => {
              console.log('중복 확인');
              setEmailValidCheck(true);
            }}
            disabled={emailVailCheck}
          >
            중복 확인
          </TextButton>
        </div>
      </div>{' '}
      {emailVailCheck && (
        <div className="relative">
          <InputBox
            type="text"
            placeholder="인증번호 *"
            moreStyle="w-[500px] h-[70px] mb-8"
            disabled={vailCheck}
            onChange={(e) => {
              setValidCode(e.target.value);
            }}
          />
          <div className="absolute top-2 right-4 ">
            <TextButton
              color="dark"
              moreStyle="w-[100px] h-[25px] leading-[25px] rounded-xl text-sm"
              handleClick={() => {
                getValidCheck(
                  {
                    email: signupData.email,
                    code: validCode,
                  },
                  setValidCheck,
                );
                setValidCheck(true);
              }}
              disabled={vailCheck}
            >
              인증 확인
            </TextButton>
          </div>
          <div className="absolute top-9 right-4 ">
            <TextButton
              color="dark"
              moreStyle="w-[100px] h-[25px] leading-[25px] rounded-xl text-sm"
              onClick={() => {
                console.log('인증 번호 전송');
              }}
              disabled={vailCheck}
            >
              인증 번호 전송
            </TextButton>
          </div>
        </div>
      )}
      <InputBox
        type="password"
        placeholder="Your Password *"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={(e) => {
          setSignupData((prev) => ({
            ...prev,
            password: e.target.value,
          }));
        }}
      />
      <InputBox
        type="password"
        placeholder="Your Password Again *"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={(e) => {
          setCheckPassword(() => e.target.value);
        }}
      />
      <TextButton
        color="light"
        moreStyle="w-[500px] h-[55px] leading-[55px] mb-6"
        handleClick={() => {
          if (checkPassword === signupData.password) signup(signupData);
          else alert('비밀번호가 일치하지 않습니다.');
        }}
      >
        Sign up
      </TextButton>
      <Alink href="/">Back to Home</Alink>
    </div>
  );
}

export default SignupPage;
