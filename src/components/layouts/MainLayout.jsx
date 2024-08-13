import { AiOutlineSetting } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Navigation';

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[1610px] h-[100vh] relative flex">
      <div className="absolute flex top-4 right-24 items-center">
        <span className="font-bold mr-1">김선우</span>
        <button
          type="button"
          className="relative  z-10"
          aria-label="상단 메뉴바 열기"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <AiOutlineSetting size="1.5rem" />
        </button>
        {isOpen && (
          <div>
            <button
              type="button"
              className="absolute block w-[75px] leading-[25px] border-pcDarkGray border-solid border-[1px] rounded-lg top-7 right-0 z-10"
            >
              로그아웃
            </button>
            <button
              type="button"
              className="absolute block w-[75px] leading-[25px] border-pcDarkGray border-solid border-[1px] rounded-lg top-14 right-0  z-10"
            >
              내정보
            </button>
          </div>
        )}
      </div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default MainLayout;
