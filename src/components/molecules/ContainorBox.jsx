import { useState } from 'react';
// import { BsCaretDownFill } from 'react-icons/bs';
import ReactImg from '../../assets/ReactImg.png';

function ContainorBox({ type }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex] = useState(0);
  const versions = ['React 18.0.2', 'React 18.0', 'React 16.0.2'];
  if (type === 'view')
    return (
      <div>
        <div className="w-[350px] border-solid border-[1.5px] border-pcDarkGray rounded-xl hover:border-blue-300">
          <div className="flex flex-col items-center">
            <img src={ReactImg} alt="대표이미지" className="mt-1" />
            <span className="font-bold text-md">React</span>
            <hr className="w-[300px] mx-auto bg-pcDarkGray mt-1" />
            <span className="text-pcDaryGray text-md mr-1  mt-1">
              {versions[selectedIndex]}
            </span>
            <span className="font-bold text-md  mt-1">
              testfrontend.pusan.ac.kr
            </span>
            <span className="font-bold text-lg  mb-1">
              테스트-프론트엔드-컨테이너
            </span>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <div className="w-[350px] h-[120px] border-solid border-[1.5px] border-pcDarkGray rounded-xl hover:border-blue-300">
        <div className="flex flex-col items-center">
          <img src={ReactImg} alt="대표이미지" className="mt-1" />
          <span className="font-bold text-md">React</span>
          <hr className="w-[300px] mx-auto bg-pcDarkGray mt-1" />
          {/* <div className="flex my-3">
            <span className="text-pcDaryGray text-md mr-1">
              {versions[selectedIndex]}
            </span>
            <button
              type="button"
              aria-label="버전 수정"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <BsCaretDownFill
                className={`${isOpen ? 'rotate-0' : 'rotate-[-90deg]'}`}
              />
            </button>
          </div>
          {isOpen &&
            versions.map((group, index) => {
              if (index !== selectedIndex)
                return (
                  <button
                    type="button"
                    aria-label="멤버"
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsOpen(false);
                    }}
                    className="relative z-10"
                  >
                    <div className="w-[130px] h-[30px] leading-[30px] border-solid border-[2px] border-pcDarkGray rounded-xl text-left bg-pcLightBlack">
                      <span className="font-bold pl-4 text-white">{group}</span>
                    </div>
                  </button>
                );
              return '';
            })} */}
        </div>
      </div>
    </div>
  );
}

export default ContainorBox;
