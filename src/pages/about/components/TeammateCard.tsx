import { ReactElement } from 'react';
import { LabelBlock, LabelsProps } from './LabelBlock.tsx';

export function TeammateCard({
  name,
  labels,
  role,
  infoAbout,
  githubName,
  photo,
}: TeammateCardProps): ReactElement {
  return (
    <div className="mt-3 cursor-pointer bg-white  rounded max-w-[700px] hover:shadow-[0px_15px_30px_5px] shadow-goldenrod/40  hover:-translate-y-1  transition-transform duration-300">
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
      </div>
    </div>
  );
}

interface TeammateCardProps {
  name: string;
  labels: LabelsProps;
  role: string;
  infoAbout: string;
  githubName: string;
  photo: string;
}
