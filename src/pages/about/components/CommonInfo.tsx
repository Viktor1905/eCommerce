import { ReactElement } from 'react';
import team from '../assets/ourTeam.png';
import mentor from '../assets/ourTeam2.png';
import help from '../assets/ourTeam3.png';
import problems from '../assets/ourTeam4.png';
import allDone from '../assets/ourTeam5.png';
import { InteractiveSpan } from './InteractiveSpan.tsx';

export function RenderCommonInfo(): ReactElement {
  return (
    <div className="cursor-default text-shadow-xs text-shadow-black">
      <InteractiveSpan text="We are the Friendly Coding team." img={team} />
      <p className="relative block">
        Our journey on <InteractiveSpan text="this project wasn’t easy," img={problems} /> but{' '}
        that’s what makes the result so rewarding! Challenges only brought us{' '}
        <InteractiveSpan text="closer—we supported each other," img={help} /> found solutions
        together, and celebrated every success.
      </p>
      <p className="relative">
        A special thanks to our mentor—
        <InteractiveSpan text="without their wise advice and timely help" img={mentor} /> wouldn’t
        be what you see today. The secret? Teamwork, love for animals, and a passion for creating a
        truly <InteractiveSpan text="user-friendly service. See for yourself!" img={allDone} />
      </p>
    </div>
  );
}
