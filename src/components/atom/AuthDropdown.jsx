import { useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

function AuthDropdown({ type }) {
  const [isOpen, setIsOpen] = useState(false);
  const groupList = ['소유자', '멤버'];
  const projectList = ['Admin', 'Write', 'Read'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  if (type === 'group')
    return (
      <div className="relative w-[100px] h-[30px] leading-[30px] border-solid border-[2px] border-pcDarkGray rounded-xl text-left">
        <span className="font-bold pl-4">{groupList[selectedIndex]}</span>
        <button
          type="button"
          aria-label="권한 수정"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <BsCaretDownFill
            className={`absolute right-2 top-[7px] ${
              isOpen ? 'rotate-0' : 'rotate-[-90deg]'
            }`}
          />
        </button>
        {isOpen &&
          groupList.map((group, index) => {
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
                  <div className="w-[100px] h-[30px] leading-[30px] border-solid border-[2px] border-pcDarkGray rounded-xl text-left bg-pcLightBlack">
                    <span className="font-bold pl-4 text-white">{group}</span>
                  </div>
                </button>
              );
            return '';
          })}
      </div>
    );

  if (type === 'project')
    return (
      <div className="relative w-[100px] leading-[30px] border-solid border-[2px] border-pcDarkGray rounded-xl text-left">
        <span className="pl-4">{projectList[selectedIndex]}</span>
        <button
          type="button"
          aria-label="권한 수정"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <BsCaretDownFill
            className={`absolute right-2 top-[7px] ${
              isOpen ? 'rotate-0' : 'rotate-[-90deg]'
            }`}
          />
        </button>
        {isOpen &&
          projectList.map((group, index) => {
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
                  <div className="w-[100px] leading-[30px] border-solid border-[2px] border-pcDarkGray rounded-xl text-left bg-pcLightBlack">
                    <span className="font-bold pl-4 text-white">{group}</span>
                  </div>
                </button>
              );
            return '';
          })}
      </div>
    );
}

export default AuthDropdown;
