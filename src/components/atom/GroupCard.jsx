import { useState } from 'react';
import { BsFillInboxesFill, BsCaretDownFill } from 'react-icons/bs';

function GroupCard({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        className="mx-auto block my-2"
        onClick={() => {
          console.log('그룹 열기');
        }}
      >
        <div className="w-[280px] h-[45px] rounded-xl bg-pcSky flex items-center justify-between  mx-auto">
          <div className="flex items-center">
            <BsFillInboxesFill size="1.2rem" className="ml-6" />
            <span className="font-bold text-lg ml-2">그룹 1</span>
          </div>
        </div>
      </button>
      <button
        type="button"
        aria-label="해당 그룹 프로젝트 리스트 보기"
        className="absolute top-3 right-6"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <BsCaretDownFill
          size="1.2rem"
          className={`mr-4 transition-transform duration-200 ${
            isOpen ? 'rotate-0' : 'rotate-[-90deg]'
          }`}
        />
      </button>

      {isOpen && children}
    </div>
  );
}

export default GroupCard;
