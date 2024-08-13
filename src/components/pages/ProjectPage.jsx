import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsBox } from 'react-icons/bs';
import { BiSolidPencil } from 'react-icons/bi';
import ContainorBox from '../molecules/ContainorBox';
import TextButton from '../atom/TextButton';
import InputBox from '../atom/InputBox';
import MemberManagement from '../organisms/MemberManagement';

function ProjectPage() {
  const { projectId } = useParams();
  const [titleEdit, setTitleEdit] = useState(false);
  const [descEdit, setDescEdit] = useState(false);
  console.log(projectId);
  return (
    <div className="flex flex-col w-[1280px] h-[850px] mx-auto relative">
      <div className="flex items-center justify-between mt-24">
        <div className="flex items-center ml-12">
          <BsBox size="1.3rem" className="leading-[1.3rem] mr-3" />
          {titleEdit ? (
            <InputBox
              type="text"
              placeholder="프로젝트 명 *"
              isError={false}
              moreStyle="w-[400px] h-[40px] mr-2"
              onChange={() => {
                console.log('프로젝트 명');
              }}
            />
          ) : (
            <span className="font-bold text-2xl mr-2">그룹1/프로젝트1_1</span>
          )}
          {titleEdit || (
            <button
              type="button"
              aria-label="프로젝트 제목 수정"
              onClick={() => {
                setTitleEdit(true);
              }}
            >
              <BiSolidPencil size="1.3rem" className="leading-[1.3rem] mr-6" />
            </button>
          )}
          {titleEdit && (
            <TextButton
              moreStyle="w-[100px] h-[35px] leading-[35px] rounded-xl"
              color="dark"
              handleClick={() => {
                setTitleEdit(false);
              }}
            >
              <span className="text-white text-md">저장</span>
            </TextButton>
          )}
        </div>

        <TextButton
          moreStyle="w-[140px] h-[35px] rounded-xl mr-24"
          color="dark"
          handleClick={() => {
            console.log('컨테이너 관리');
          }}
        >
          <span className="text-white text-md leading-[35px]">
            컨테이너 관리
          </span>
        </TextButton>
      </div>
      <hr className="w-[1136px] mx-auto mr-24 h-[3px] bg-pcLightBlack mt-2" />
      <div className="flex items-center ml-12 mt-8">
        <span className="font-bold text-xl mr-2">프로젝트 설명</span>
        {descEdit || (
          <button
            type="button"
            aria-label="프로젝트 설명"
            onClick={() => {
              setDescEdit(true);
            }}
          >
            <BiSolidPencil size="1.3rem" className="leading-[1.3rem] mr-6" />
          </button>
        )}

        {descEdit && (
          <TextButton
            moreStyle="w-[100px] h-[35px] rounded-xl"
            color="dark"
            handleClick={() => {
              console.log('저장');
              setDescEdit(false);
            }}
          >
            <span className="text-white text-md leading-[35px]">저장</span>
          </TextButton>
        )}
      </div>
      {descEdit ? (
        <textarea
          type="text"
          placeholder="프로젝트 설명을 적어주세요"
          className="block px-4 py-3 outline-none rounded-lg w-[900px] h-[250px] ml-12 mt-2 text-xl font-medium border-pcGray border-solid border-[2px]"
          onChange={() => {
            console.log('프로젝트 설명을 적어주세요');
          }}
        />
      ) : (
        <span className="w-[900px] ml-12 mt-2 text-xl font-medium">
          우리 프로젝트는 다양한 배경과 전문성을 가진 [팀 구성원 수]명의
          열정적인 구성원들로 이루어져 있습니다. [각 팀원들의 역할 또는 특기]
          등으로 구성되어 있으며, 함께 협력하여 혁신적인 해결책을 모색하고
          있습니다.
        </span>
      )}

      <span className="font-bold text-xl ml-12 mt-12">프로젝트 멤버</span>
      <div className="ml-12 mt-1">
        <MemberManagement type="project" />
      </div>

      <span className="font-bold text-xl ml-12 mt-12">컨테이너</span>
      <div className="grid grid-cols-3 gap-x-24 gap-y-4 ml-12 mt-4 w-[1000px]">
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        <ContainorBox type="view" />
        {/* 추가 ContainorBox 컴포넌트들 */}
      </div>
    </div>
  );
}

export default ProjectPage;
