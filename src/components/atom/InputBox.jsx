import React, { forwardRef } from 'react';

const InputBox = forwardRef(
  (
    {
      type,
      placeholder,
      isError = false,
      moreStyle,
      onChange,
      disabled = false,
    },
    ref,
  ) => (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`block px-4 py-3 text-md outline-none rounded-lg ${moreStyle} ${isError ? 'border-red-500 border-solid border-[2px]' : 'border-pcGray border-solid border-[2px]'}`}
      ref={ref}
      disabled={disabled}
    />
  ),
);

export default InputBox;
