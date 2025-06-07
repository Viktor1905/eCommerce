import { ReactElement, useRef } from 'react';
import { LabelBlock, LabelsProps } from './LabelBlock.tsx';

export function ModalWindow({
  name,
  labels,
  role,
  infoAbout,
  githubName,
  photo,
  contribution,
  setShowModal,
}: ModalWindowProps & { setShowModal: () => void }): ReactElement {
  const ref = useRef<HTMLDivElement | null>(null);
  const closeWrapper = (event: React.MouseEvent): void => {
    if (event.target === ref.current) {
      setShowModal(false);
    }
  };
  return (
    <div
      className="w-screen h-screen fixed inset-0  top-0 bg-black/50 z-5 flex justify-center items-center"
      ref={ref}
      onClick={closeWrapper}
    >
      <div className="w-[50%] bg-white cursor-default">
        <h2 className="bg-jungle text-white pl-1 rounded">{name}</h2>
        <div className="pr-2 pl-2 flex flex-col">
          <LabelBlock {...labels} />
          <div>{role}</div>
          <p className="text-justify pt-2 pb-2">{infoAbout}</p>
          <div className="flex w-full justify-end items-center">
            <a
              className="text-jungle hover:text-goldenrod"
              href={`https://github.com/${githubName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {githubName}
            </a>
            <img className="w-7 h-7 ml-2 rounded-full" src={photo} alt={name} />
          </div>
          <ul>
            <h2>Contribution to the project:</h2>
            {contribution.map((item, index): ReactElement => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export interface ModalWindowProps {
  name: string;
  labels: LabelsProps;
  role: string;
  infoAbout: string;
  githubName: string;
  photo: string;
  contribution: string[];
  setShowModal: (value: boolean) => void;
}
