import { useEffect } from 'react';
import { RenderCommonInfo } from './components/CommonInfo.tsx';
import { DetailInfo } from '../team/components/DetailInfo.tsx';

export function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us | Zoo Shop | Pet Supplies';
  }, []);
  return (
    <div className="flex text-goldenrod flex-col justify-center align-items-center max-w-[1440px] p-4">
      <RenderCommonInfo />
      <DetailInfo />
    </div>
  );
}
