import React from 'react';
import TextButton from './TextButton';

function EnvBox({ setModalOpen }) {
  return (
    <div className="w-[400px] h-[200px] border-solid border-[1.5px] border-pcDarkGray rounded-xl overflow-y-auto overflow-x-hidden">
      <div className="flex justify-center h-[30px] items-center my-2">
        <span className="font-bold text-xl mr-8 leading-[20px] w-[300px] text-center">
          환경 변수
        </span>
        <TextButton
          color="light"
          moreStyle="w-[90px] leading-[25px] text-md mr-8"
          handleClick={() => {
            setModalOpen(true);
          }}
        >
          추가
        </TextButton>
      </div>
      <hr className="w-[400px] bg-pcGray " />

      <div className="flex justify-center h-[30px] items-center my-2">
        <span className="font-bold text-xl mr-8 leading-[20px] w-[300px] text-center">
          ssh-access-key
        </span>
        <TextButton
          color="light"
          moreStyle="w-[90px] leading-[25px] text-md mr-8"
          handleClick={() => {
            console.log('추가');
          }}
        >
          삭제
        </TextButton>
      </div>
      <hr className="w-[400px] bg-pcGray " />
    </div>
  );
}

export default EnvBox;
