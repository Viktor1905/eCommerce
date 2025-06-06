import { ReactElement } from 'react';
import { LabelBlock, LabelsProps } from './LabelBlock.tsx';

export function TeammateCard({ name, labels, role }: TeammateCardProps): ReactElement {
  return (
    <div className="mt-3 cursor-pointer bg-white  rounded max-w-[700px] hover:shadow-[0px_15px_30px_5px] shadow-goldenrod/40  hover:-translate-y-1  transition-transform duration-300">
      <h2 className="bg-jungle text-white pl-1 rounded">{name}</h2>
      <div className="pr-2 pl-2">
        <LabelBlock {...labels} />
        <div>{role}</div>
      </div>
    </div>
  );
}

interface TeammateCardProps {
  name: string;
  labels: LabelsProps;
  role: string;
}
