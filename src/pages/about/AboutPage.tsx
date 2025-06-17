import { useEffect, useState } from 'react';
import { RenderCommonInfo } from './components/CommonInfo.tsx';
import { DetailInfo } from './components/DetailInfo.tsx';
import { RSLogo } from './components/RSLogo.tsx';
import { TeammateCardProps } from './components/TeammateCard.tsx';
import { ModalWindow } from './components/ModalWindow.tsx';

export function AboutUsPage() {
  const [currentMember, setCurrentMember] = useState<TeammateCardProps | null>(null);
  useEffect(() => {
    document.title = 'About Us | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <div className="flex text-goldenrod flex-col justify-center align-items-center max-w-[1440px] p-4">
      <RenderCommonInfo />
      <DetailInfo
        onMemberClick={(member: TeammateCardProps | null): void => {
          setCurrentMember(member);
        }}
      />
      <a
        className="w-full flex justify-center mt-10"
        href="https://rs.school/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RSLogo />
      </a>
      {currentMember && (
        <ModalWindow
          {...currentMember}
          setShowModal={() => {
            setCurrentMember(null);
          }}
        />
      )}
    </div>
  );
}
