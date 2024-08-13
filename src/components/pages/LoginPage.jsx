import InputBox from '../atom/InputBox';
import Alink from '../atom/Alink';
import TextButton from '../atom/TextButton';

function LoginPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl drop-shadow-lg mt-48 mb-12">Sign in</h1>
      <InputBox
        type="email"
        placeholder="Your Email *(이메일)"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={() => {
          console.log('이메일 변경');
        }}
      />
      <InputBox
        type="password"
        placeholder="Your Password *"
        isError={false}
        moreStyle="w-[500px] h-[70px] mb-8"
        onChange={() => {
          console.log('비밀번호 변경');
        }}
      />
      <TextButton
        color="light"
        moreStyle="w-[500px] h-[55px] leading-[55px] mb-6"
        handleClick={() => {
          console.log('로그인');
        }}
      >
        Login
      </TextButton>

      <Alink href="https://www.naver.com/">Back to Home</Alink>
    </div>
  );
}

export default LoginPage;
