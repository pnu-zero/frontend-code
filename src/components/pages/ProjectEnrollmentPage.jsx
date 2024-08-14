import { useState } from 'react';
import { BsFillInboxesFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import InputBox from '../atom/InputBox';
import TextButton from '../atom/TextButton';

function ProjectEnrollmentPage() {
  const { groupId } = useParams();
  const [groupName, setGroupName] = useState('');
  const [, setProjectData] = useState({
    title: '',
    desc: '',
    domainName: '',
  });
  return (
    <div className="flex flex-col w-[1280px] h-[850px] mx-auto relative ">
      <div className="flex items-center justify-between mt-36">
        <div className="flex items-center ml-12">
          <BsFillInboxesFill size="1.3rem" className="leading-[1.3rem] mr-3" />
          <span className="font-bold text-2xl mr-2">{groupName}</span>
        </div>
      </div>
      <hr className="w-[1136px] mx-auto mr-24 h-[3px] bg-pcLightBlack mt-2" />
      <div className="flex flex-col items-center mt-16">
        <div className="w-[700px]">
          <span className="font-bold text-2xl">프로젝트명 *</span>
          <InputBox
            type="text"
            placeholder="프로젝트명 *"
            isError={false}
            moreStyle="w-[400px] h-[40px] mr-2"
            onChange={(e) => {
              setProjectData((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
          />
        </div>

        <div className="w-[700px] mt-8">
          <span className="font-bold text-2xl">프로젝트 설명</span>
          <textarea
            type="text"
            placeholder="프로젝트 설명을 적어주세요"
            className="block px-4 py-3 outline-none rounded-lg w-[700px] h-[150px] mt-2 text-xl font-medium border-pcGray border-solid border-[2px]"
            onChange={(e) => {
              setProjectData((prev) => ({
                ...prev,
                desc: e.target.value,
              }));
            }}
          />
        </div>
        <div className="w-[700px] mt-8">
          <span className="font-bold text-2xl">도메인명 *</span>
          <div className="flex items-center">
            <InputBox
              type="text"
              placeholder="도메인 주소*"
              isError={false}
              moreStyle="w-[400px] h-[40px] mr-2"
              onChange={(e) => {
                setProjectData((prev) => ({
                  ...prev,
                  domainName: e.target.value,
                }));
              }}
            />
            <span className="font-bold text-xl">.pun.app</span>
          </div>
        </div>
      </div>
      <TextButton
        color="light"
        moreStyle="w-[250px] h-[45px] leading-[45px] text-lg mb-6 absolute bottom-4 right-24"
        handleClick={() => {
          console.log('다음');
        }}
      >
        다음
      </TextButton>
    </div>
  );
}

export default ProjectEnrollmentPage;
