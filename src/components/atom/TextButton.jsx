import React from 'react';

function TextButton({ handleClick, color, children, moreStyle }) {
  if (color === 'light')
    return (
      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        <div
          className={`bg-pcLightGray hover:bg-pcGray text-md rounded-2xl border-pcDaryGray border-solid border-[1px] text-pcLightBlack text-center ${moreStyle} font-bold`}
        >
          {children}
        </div>
      </button>
    );
  if (color === 'dark')
    return (
      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        <div
          className={`bg-pcLightBlack text-md rounded-lg text-white text-center ${moreStyle}`}
        >
          {children}
        </div>
      </button>
    );
}

export default TextButton;
