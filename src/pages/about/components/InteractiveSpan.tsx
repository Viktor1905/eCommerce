import { ReactElement, useState } from 'react';
import team from '../assets/ourTeam.png';

export function InteractiveSpan({ img, text }: InteractiveSpanProps): ReactElement {
  const [isShown, setIsShown] = useState(false);
  const [activeImage, setActiveImage] = useState(team);
  function mouseEnter(img: string) {
    setIsShown(true);
    setActiveImage(img);
  }
  function mouseLeave() {
    setIsShown(false);
    setActiveImage('');
  }
  return (
    <span
      className="relative inline-block w-fit cursor-pointer text-shadow-md text-shadow-black"
      onMouseEnter={(): void => {
        mouseEnter(img);
      }}
      onMouseLeave={mouseLeave}
    >
      <img
        src={img}
        alt={img}
        onMouseEnter={mouseLeave}
        className={
          isShown && activeImage === img ? `absolute w-[200px] z-5 rounded top-7 ` : `hidden`
        }
      />
      {text}
    </span>
  );
}

interface InteractiveSpanProps {
  img: string;
  text: string;
}
