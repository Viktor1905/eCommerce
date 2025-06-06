import { ReactElement } from 'react';

export function LabelBlock({
  feature,
  crossCheck,
  tests,
  UX,
  API,
  database,
  refactor,
  deploy,
  bugfix,
}: LabelsProps): ReactElement {
  return (
    <ul className="flex gap-2 mt-2 mb-2 flex-wrap">
      {feature && <li className="bg-goldenrod rounded text-white pl-1 ">feature 🦄</li>}
      {crossCheck && <li className="bg-green-500 rounded text-white pl-1 ">cross-check 🦉</li>}
      {tests && <li className="bg-blue-600 rounded text-white pl-1 ">tests 🐣</li>}
      {UX && <li className="bg-pink-500 rounded text-white pl-1 ">UX/UI 🦚</li>}
      {API && <li className="bg-khaki rounded text-white pl-1 ">API 🕷️</li>}
      {database && <li className="bg-yellow-600 rounded text-white pl-1 ">database 🐝</li>}
      {refactor && <li className="bg-emerald-600 rounded text-white pl-1 ">refactor 🐍</li>}
      {deploy && <li className="bg-sky-600 rounded text-white pl-1 ">deploy 🦅</li>}
      {bugfix && <li className="bg-red-500 rounded text-white pl-1 ">bugfix 🪲</li>}
    </ul>
  );
}

export interface Labels {
  feature?: boolean;
  crossCheck?: boolean;
  tests?: boolean;
  UX?: boolean;
  API?: boolean;
  database?: boolean;
  refactor?: boolean;
  deploy?: boolean;
  bugfix?: boolean;
}
export interface LabelsProps {
  feature?: boolean;
  crossCheck?: boolean;
  tests?: boolean;
  UX?: boolean;
  API?: boolean;
  database?: boolean;
  refactor?: boolean;
  deploy?: boolean;
  bugfix?: boolean;
}
