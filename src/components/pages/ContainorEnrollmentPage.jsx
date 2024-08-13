import { BsBox } from 'react-icons/bs';
import { useState } from 'react';
import ContainorBox from '../molecules/ContainorBox';
import ContainorDetailBox from '../molecules/ContainorDetailBox';

function ContainorEnrollmentPage() {
  const [selectedContainorTypeIndex, setSelectedContainorTypeIndex] =
    useState(0);

  return (
    <div className="flex flex-col w-[1280px] mx-auto relative">
      <div className="flex items-center justify-between mt-24">
        <div className="flex items-center ml-12">
          <BsBox size="1.3rem" className="leading-[1.3rem] mr-3" />
          <span className="font-bold text-2xl mr-2">그룹1/프로젝트1_1</span>
        </div>
      </div>
      <hr className="w-[1136px] mx-auto mr-24 h-[3px] bg-pcLightBlack my-2" />
      <span className="font-bold text-xl ml-12 mt-8">컨테이너 관리</span>
      <div className="flex ml-14 mt-6">
        <button
          type="button"
          onClick={() => {
            setSelectedContainorTypeIndex(0);
          }}
        >
          <span
            className={`text-md font-bold mr-6  text-pcDaryGray ${selectedContainorTypeIndex === 0 && 'underline underline-offset-4 decoration-blue-300 text-pcLightBlack'}`}
          >
            프론트엔드
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedContainorTypeIndex(1);
          }}
        >
          <span
            className={`text-md font-bold mr-6  text-pcDaryGray ${selectedContainorTypeIndex === 1 && 'underline underline-offset-4 decoration-blue-300 text-pcLightBlack'}`}
          >
            백엔드
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedContainorTypeIndex(2);
          }}
        >
          <span
            className={`text-md font-bold mr-6  text-pcDaryGray ${selectedContainorTypeIndex === 2 && 'underline underline-offset-4 decoration-blue-300 text-pcLightBlack'}`}
          >
            데이터베이스
          </span>
        </button>
      </div>
      <div>
        {selectedContainorTypeIndex === 0 && (
          <div className="grid grid-cols-3 gap-x-24 gap-y-4 ml-12 mt-4 w-[1000px]">
            <button type="button" aria-label="프론트엔드-컨테이너-1">
              <ContainorBox />
            </button>
            <ContainorBox /> <ContainorBox /> <ContainorBox />
          </div>
        )}
        {selectedContainorTypeIndex === 1 && (
          <div className="grid grid-cols-3 gap-x-24 gap-y-4 ml-12 mt-4 w-[1000px]">
            <ContainorBox /> <ContainorBox /> <ContainorBox /> <ContainorBox />{' '}
            <ContainorBox /> <ContainorBox /> <ContainorBox /> <ContainorBox />
          </div>
        )}
        {selectedContainorTypeIndex === 2 && (
          <div className="grid grid-cols-3 gap-x-24 gap-y-4 ml-12 mt-4 w-[1000px]">
            <ContainorBox /> <ContainorBox />
          </div>
        )}
        {/* 추가 ContainorBox 컴포넌트들 */}
      </div>
      <hr className="w-[1100px] ml-12 bg-pcGray mb-3 mt-5" />
      <div className="ml-12">
        <ContainorDetailBox />
      </div>
    </div>
  );
}

export default ContainorEnrollmentPage;
