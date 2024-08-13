import { useRef } from 'react';
import { AiFillFile } from 'react-icons/ai';
import TextButton from './TextButton';

function UploadBox({ files, setFiles }) {
  const clientFileRef = useRef();
  const clientFileModificationRef = useRef();

  const saveFile2 = () => {
    const curFile = clientFileRef.current.files[0];

    if (curFile) {
      // 파일 보내기 성공하면 상태 값 변경

      setFiles((prev) => ({
        staticFiles: [...prev.staticFiles, curFile],
        staticFilesName: [...prev.staticFilesName, curFile.name],
      }));
    }
  };

  const modifyFile2 = () => {
    const curFile = clientFileModificationRef.current.files[0];
    if (curFile) {
      // 파일 보내기 성공하면 상태 값 변경

      setFiles((prev) => ({
        ...prev,
        staticFile: curFile,
        staticFileName: curFile.name,
      }));
    }
  };

  return (
    <div>
      <div className="w-[400px] h-[200px] border-solid border-[1.5px] border-pcDarkGray rounded-xl overflow-auto overflow-x-hidden">
        <div className="flex justify-center h-[30px] items-center my-2">
          <span className="font-bold text-xl mr-8 leading-[20px] w-[300px] text-center">
            파일 업로드
          </span>
          <label htmlFor="js2" className="mb-2" aria-label="파일 수정">
            <div className="bg-pcLightGray hover:bg-pcGray text-md  border-pcDaryGray border-solid border-[1px] text-pcLightBlack text-center  font-bold w-[90px] leading-[25px] rounded-xl mr-8">
              <span className="">추가</span>
            </div>
          </label>
          <input
            id="js2"
            className="hidden"
            type="file"
            accept=".zip,.tar"
            ref={clientFileRef}
            onChange={saveFile2}
          />
        </div>
        <hr className="w-[400px] bg-pcGray " />
        <div className="w-full">
          {files.staticFiles.length !== 0 ? (
            files.staticFilesName.map((name, index) => (
              <div>
                <div className="flex items-center w-[400px] h-[80px]">
                  <div className="flex flex-col w-[300px] items-center mr-8 ">
                    <div>
                      <AiFillFile size="40px" color="black" />
                    </div>
                    <span className="text-md text-black text-center overflow-hidden">
                      {name}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      id="clientFileModification"
                      className="hidden"
                      type="file"
                      accept=".zip,.tar"
                      ref={clientFileModificationRef}
                      onChange={modifyFile2}
                    />
                    <TextButton
                      moreStyle="w-[90px] leading-[25px] rounded-xl mr-8"
                      color="dark"
                      handleClick={() => {
                        setFiles((prev) => {
                          const updatedStaticFiles = prev.staticFiles.filter(
                            (_, tempIndex) => tempIndex !== index,
                          );
                          const updatedStaticFilesName =
                            prev.staticFilesName.filter(
                              (_, tempIndex) => tempIndex !== index,
                            );

                          return {
                            staticFiles: updatedStaticFiles,
                            staticFilesName: updatedStaticFilesName,
                          };
                        });
                      }}
                    >
                      삭제
                    </TextButton>
                  </div>
                </div>
                <hr className="w-[400px] bg-pcGray " />
              </div>
            ))
          ) : (
            <div className="w-full text-center" />
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadBox;
