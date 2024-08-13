import { useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import InputBox from '../atom/InputBox';
import EnvBox from '../atom/EnvBox';
import UploadBox from '../atom/UploadBox';
import TextButton from '../atom/TextButton';
import AddingEnvModal from '../modals/AddingEnvModal';

function ContainorDetailBox() {
  const versions = ['React 18.0.2', 'React 18.0', 'React 16.0.2'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVersionOpen, setIsVersionOpen] = useState(false);
  const [files, setFiles] = useState({
    staticFiles: [],
    staticFilesName: [],
  });
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      className={`w-[1100px] h-[380px] border-solid border-[1.5px] border-pcDarkGray rounded-3xl ${!isOpen ? 'h-[80px]' : ''}`}
    >
      <AddingEnvModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center ml-8">
          <button
            type="button"
            aria-label="권한 수정"
            onClick={() => {
              setIsOpen((prev) => !prev);
              if (isOpen === true) {
                setIsVersionOpen(false);
              }
            }}
          >
            <BsCaretDownFill
              className={` ${isOpen ? 'rotate-0' : 'rotate-[-90deg]'}`}
              size="1.5rem"
            />
          </button>
          <InputBox
            type="text"
            placeholder="제목을 입력해주세요 *"
            isError={false}
            moreStyle="w-[500px] h-[40px] mr-2 font-bold text-lg"
            onChange={() => {
              console.log('그룹 명');
            }}
          />
        </div>
        <div className="flex flex-col relative mr-8">
          <div className="flex my-3">
            <span className="text-pcLightBlack font-bold text-md mr-1 w-[120px] text-center">
              {versions[selectedIndex]}
            </span>
            <button
              type="button"
              aria-label="버전 수정"
              onClick={() => {
                setIsVersionOpen((prev) => !prev);
              }}
            >
              <BsCaretDownFill
                className={`${isVersionOpen ? 'rotate-0' : 'rotate-[-90deg]'}`}
              />
            </button>
          </div>
          <div className="absolute top-10">
            {isVersionOpen &&
              versions.map((version, index) => {
                if (index !== selectedIndex)
                  return (
                    <button
                      type="button"
                      aria-label="버전 관리"
                      onClick={() => {
                        setSelectedIndex(index);
                        setIsVersionOpen(false);
                      }}
                      className="relative z-10"
                    >
                      <div className="w-[130px]  leading-[30px] border-solid border-[2px] border-pcDarkGray rounded-xl text-left bg-pcLightBlack">
                        <span className="font-bold pl-4 text-white">
                          {version}
                        </span>
                      </div>
                    </button>
                  );
                return '';
              })}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col ml-8">
          <div className="flex items-end mt-4">
            <InputBox
              type="text"
              placeholder="서브도메인 *"
              isError={false}
              moreStyle="w-[250px] h-[40px] mr-2 pl-6 font-bold text-md"
              onChange={() => {
                console.log('그룹 명');
              }}
            />
            <span className="font-bold text-md">.cori.pusan.ac.kr</span>
          </div>
          <div className="flex mt-4">
            <div className="mr-4">
              <EnvBox setModalOpen={setModalOpen} />
            </div>
            <div className="ml-4">
              <UploadBox files={files} setFiles={setFiles} />
            </div>
          </div>
          <div className="flex justify-end mr-4">
            <TextButton
              moreStyle="w-[100px]  leading-[30px] rounded-xl"
              color="dark"
              handleClick={() => {
                console.log('저장');
              }}
            >
              <span className="text-white text-md">저장</span>
            </TextButton>
            <TextButton
              moreStyle="w-[100px] leading-[30px] rounded-xl ml-4"
              color="dark"
              handleClick={() => {
                console.log('삭제');
              }}
            >
              <span className="text-white text-md">삭제</span>
            </TextButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContainorDetailBox;
