import React from 'react';
import InputBox from '../atom/InputBox';
import TextButton from '../atom/TextButton';
import Alink from '../atom/Alink';

function SignupPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl drop-shadow-lg mt-16 mb-12">Sign up</h1>
      <InputBox
        type="text"
        placeholder="Your Name *(실명)"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={() => {
          console.log('이름변경');
        }}
      />
      <div className="relative">
        <InputBox
          type="email"
          placeholder="Your Email *(이메일)"
          isError={false}
          moreStyle="w-[500px] h-[70px] mb-8"
          onChange={() => {
            console.log('이메일 변경');
          }}
        />
        <div className="absolute top-4 right-4">
          <TextButton
            color="dark"
            moreStyle="w-[100px] h-[25px] leading-[25px] rounded-xl text-sm"
            onClick={() => {
              console.log('중복 확인');
            }}
          >
            중복 확인
          </TextButton>
        </div>
      </div>
      <div className="relative">
        <InputBox
          type="text"
          placeholder="인증번호 *"
          isError
          moreStyle="w-[500px] h-[70px] mb-8"
          onChange={() => {
            console.log('인증번호 변경');
          }}
        />
        <div className="absolute top-2 right-4 ">
          <TextButton
            color="dark"
            moreStyle="w-[100px] h-[25px] leading-[25px] rounded-xl text-sm"
            onClick={() => {
              console.log('인증 확인');
            }}
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
          >
            인증 번호 전송
          </TextButton>
        </div>
      </div>
      <InputBox
        type="password"
        placeholder="Your Password *"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={() => {
          console.log('비밀번호 변경');
        }}
      />
      <InputBox
        type="password"
        placeholder="Your Password Again *"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={() => {
          console.log('비밀번호 재 확인');
        }}
      />
      <TextButton
        color="light"
        moreStyle="w-[500px] h-[55px] leading-[55px] mb-6"
        handleClick={() => {
          console.log('회원가입');
        }}
      >
        Sign up
      </TextButton>

      <Alink href="https://www.naver.com/">Back to Home</Alink>
    </div>
  );
}

export default SignupPage;
