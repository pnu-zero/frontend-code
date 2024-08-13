import React from 'react';
import { BsBox } from 'react-icons/bs';

function ProjectCard() {
  return (
    <button
      type="button"
      className="mx-auto block my-1"
      onClick={() => {
        console.log('프로젝트 열기');
      }}
    >
      <div className="w-[280px] h-[45px] rounded-xl bg-pcGray flex items-center mx-auto">
        <BsBox size="1.2rem" className="ml-6" />
        <span className="font-bold text-sm ml-2">프로젝트 1_1</span>
      </div>
    </button>
  );
}

export default ProjectCard;
