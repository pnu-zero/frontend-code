import { useState } from 'react';

function ContainorBox({
  setContainorsData,
  stackName,
  stackImg,
  isExistContainer,
}) {
  const [representVersions] = useState(() => {
    if (stackName === 'React') {
      return 'React 18.0.2';
    }
    if (stackName === 'Vue.js') {
      return 'Vue2';
    }
    if (stackName === 'HTML5') {
      return 'HTML5';
    }
    if (stackName === 'Angular') {
      return 'Angular17';
    }
    if (stackName === 'Next.js') {
      return 'Next.js14';
    }

    if (stackName === 'Node.js') {
      return 'Node.js20';
    }
    if (stackName === 'Spring Boot') {
      return 'Spring Boot6.0';
    }
    if (stackName === 'PHP') {
      return 'PHP7.0';
    }
    if (stackName === 'Flask') {
      return 'Flask3.6';
    }
    if (stackName === 'FastAPI') {
      return 'FastAPI';
    }

    if (stackName === 'MYSQL') {
      return 'MYSQL';
    }
    if (stackName === 'PostgreSQL') {
      return 'PostgreSQL';
    }
    if (stackName === 'MongoDB') {
      return 'MongoDB';
    }
    if (stackName === 'SQLite') {
      return 'SQLite';
    }

    if (stackName === 'Console') {
      return 'Console';
    }
    return '';
  });

  console.log(isExistContainer);

  return (
    <button
      type="button"
      onClick={() => {
        setContainorsData((prev) => {
          const tempContainorData = prev.map(
            ({
              templateTitle,
              containorStack,
              subdomain,
              envVars,
              containorFile,
              defaultSubDomain,
            }) => ({
              templateTitle,
              containorStack,
              subdomain,
              envVars: envVars.map((item) => ({ ...item })), // 배열 깊은 복사
              containorFile,
              defaultSubDomain,
            }),
          );

          let id = Math.max(
            ...tempContainorData.map((container) => container.containerId),
          );

          if (id === -Infinity) id = 1;

          if (
            stackName === 'MYSQL' ||
            stackName === 'PostgreSQL' ||
            stackName === 'MongoDB' ||
            stackName === 'SQLite'
          ) {
            tempContainorData.push({
              containerId: id * -1,
              templateTitle: '',
              containorStack: representVersions,
              subdomain: '',
              envVars: [
                {
                  id: -1,
                  key: '기본 키',
                  value: '',
                },
              ],
              containorFile: null,
              defaultSubDomain: false,
            });
          } else
            tempContainorData.push({
              containerId: id * -1,
              templateTitle: '',
              containorStack: representVersions,
              subdomain: '',
              envVars: [],
              containorFile: null,
              defaultSubDomain: false,
            });

          return tempContainorData;
        });
      }}
      disabled={isExistContainer}
    >
      <div
        className={`w-[350px] h-[120px] border-solid border-[1.5px] border-pcDarkGray rounded-xl ${isExistContainer ? '' : 'hover:border-blue-300'}`}
      >
        <div className="flex flex-col items-center">
          <img
            src={stackImg}
            alt="대표이미지"
            className="mt-1 w-[59px] min-h-[59px]"
          />
          <span className="font-bold text-md">{stackName}</span>
          <hr className="w-[300px] mx-auto bg-pcDarkGray mt-1" />
          {/* <div className="flex my-3">
            <span className="text-pcDarkGray text-md mr-1">
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
    </button>
  );
}

export default ContainorBox;
