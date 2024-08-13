import TextButton from '../atom/TextButton';
import AuthDropdown from '../atom/AuthDropdown';

function Member({ type }) {
  return (
    <div>
      <div className="w-full h-[30px] leading-[30px] flex">
        <span className="font-bold text-md  w-[100px] ml-[20px] text-center">
          김선우
        </span>
        <span className="font-bold text-md w-[280px] text-center">
          ttcoristo!@naver.com
        </span>
        <span className="font-bold text-md w-[110px] text-center">
          <AuthDropdown type={type} />
        </span>
        <span className="font-bold text-md w-[140px] text-center">
          <TextButton
            moreStyle="w-[100px] h-[25px]  leading-[25px] rounded-xl"
            color="dark"
            handleClick={() => {
              console.log('멤버 삭제');
            }}
          >
            <span className="text-white text-sm">멤버 삭제</span>
          </TextButton>
        </span>
      </div>
      <hr className="w-[550px] mx-auto  h-[1.5px] bg-pcGray my-1" />
    </div>
  );
}

export default Member;
