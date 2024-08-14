import React, { useState } from 'react';
import { BiFace, BiSolidBookmarkStar, BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../atom/ProjectCard';
import GroupCard from '../atom/GroupCard';
import TextButton from '../atom/TextButton';

function Navigation() {
  const navigate = useNavigate();
  const [navigateData, setNavigateData] = useState([
    {
      groupName: '그룹1',
      groupId: 1,
      projects: [
        {
          projectName: '프로젝트1',
          projectId: 1,
        },
      ],
    },
  ]);
  return (
    <div className="w-[330px] h-[950px] bg-pcLightBlue rounded-r-3xl shadow-md overflow-y-auto relative">
      <div className="flex flex-col">
        <div className="flex items-center">
          <BiFace size="2.5rem" className="mx-4 my-8" />
          <div className="flex flex-col">
            <span className="font-bold text-xl">PNU CLOUD</span>
            <span className="text-sm">Forbidden Proxy Attendance</span>
          </div>
        </div>
        <div className="flex items-center mt-8 mb-2">
          <BiSolidBookmarkStar size="1.3rem" className="mr-1 ml-8" />
          <span className="font-bold mr-2">그룹</span>
          <div className="relative w-[200px] shadow-[0_2px_2px_-1px_rgba(0,0,0,0.9)] rounded-xl">
            <input
              type="text"
              placeholder="그룹 이름"
              className="py-1 w-[200px] bg-white pl-3 outline-none rounded-xl"
            />
            <button type="button" aria-label="그룹명 검색">
              <div className="absolute top-[6px] right-3">
                <BiSearchAlt2 size="1.3rem" />
              </div>
            </button>
          </div>
        </div>
        <div>
          {navigateData.map((group) => (
            <GroupCard groupName={group.groupName} groupId={group.groupId}>
              {group.projects.map((project) => {
                console.log(project);
                return (
                  <ProjectCard
                    projectName={project.projectName}
                    groupId={group.groupId}
                    projectId={project.projectId}
                  />
                );
              })}
            </GroupCard>
          ))}
          <GroupCard>
            <ProjectCard />
          </GroupCard>
        </div>

        <TextButton
          moreStyle="w-[140px] h-[35px] fixed absolute bottom-8 left-24"
          color="dark"
          handleClick={() => {
            navigate('/group');
          }}
        >
          <span className="text-white text-md leading-[35px]">그룹 추가 +</span>
        </TextButton>
      </div>
    </div>
  );
}

export default Navigation;
