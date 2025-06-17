import { TeammateCard, TeammateCardProps } from './TeammateCard.tsx';
import { ReactElement } from 'react';
import Viktor from '../assets/Viktor.jpg';
import Anastasia from '../assets/Anastasia.jpg';
import Vitaliy from '../assets/Vitaliy.jpg';

export function DetailInfo({ onMemberClick }: DetailInfoProps): ReactElement {
  return (
    <section className="mt-5 w-full">
      <h1>Our team:</h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-2 w-full">
        <TeammateCard
          {...ViktorInfo}
          onClick={() => {
            onMemberClick(ViktorInfo);
          }}
        />
        <TeammateCard
          {...AnastasiiInfo}
          onClick={() => {
            onMemberClick(AnastasiiInfo);
          }}
        />
        <TeammateCard
          {...VitaliiInfo}
          onClick={() => {
            onMemberClick(VitaliiInfo);
          }}
        />
      </div>
    </section>
  );
}

const ViktorInfo = {
  name: 'Viktor Vonyarkha',
  labels: {
    feature: true,
    crossCheck: true,
    deploy: true,
    tests: true,
    bugfix: true,
  },
  role: 'Team lead 🦁',
  infoAbout:
    'Hello, I’m Viktor. My tech journey began with fixing PCs, phones, and gadgets — back when I never imagined programming could become my career and passion. But one day, I realized I wanted work that brought both fulfillment and joy. That’s how I discovered frontend development. When a friend told me about this course, I decided to give it a try — and it turned out to be transformative. By the end, I was amazed by the depth of knowledge gained here. This experience became a true breakthrough that’ll stay with me forever.',
  githubName: 'viktor1905',
  photo: Viktor,
  contribution: [
    'Task allocation among team members',
    'Repository setup with core branches',
    'Jira board configuration with sprints and workflows',
    'Login page with form validation',
    'Secure logout functionality',
    'Product catalog with responsive design',
    'Filtering & sorting',
    'API integration for assigned tasks',
    'Test coverage for developed components',
  ],
};
const AnastasiiInfo = {
  name: 'Anastasiia Blagoveshchenskaia ',
  labels: {
    feature: true,
    UX: true,
    refactor: true,
    tests: true,
    bugfix: true,
  },
  role: 'Queen of forms 🧚',
  infoAbout:
    "I'm  Nastya. My favorite Winx fairy is Bloom, I love Ladybug, tasty food (especially fish) and I don't actually like making forms. I like my teammates because they are very fun and ready to hop in to cover for each other. My favorite time on the course was having calls with them and fixing bugs together\n" +
    'Thanks to RS School for giving such an amazing opportunity to learn so much and work on many different projects\n' +
    'I hope to find a job soon :) \n' +
    'If anyone is still reading, here is a video how to prepare for job interview (from RS School!): https://www.youtube.com/watch?v=4Am6o6lsjqE',
  githubName: 'hourabl',
  photo: Anastasia,
  contribution: [
    'Project configuration setup',
    'Registration page - Implemented complete layout and functional logic',
    'Created profile page interface',
    'Developed profile editing functionality',
    'Implemented secure password and address management',
    'Integrated  categories logic and layout in catalog page',
    'Shopping cart - Built basket page with main functionality',
    'API integration for assigned tasks',
    'Test coverage for developed components',
  ],
};
const VitaliiInfo = {
  name: 'Vitali Kozhar',
  labels: {
    feature: true,
    API: true,
    database: true,
    tests: true,
    bugfix: true,
  },
  role: 'API Master ⚙️',
  infoAbout:
    'I was born in Minsk and graduated from the Belarusian State University of Informatics and Radioelectronics with a degree in Radio Engineering. Throughout my career, I’ve worked with a variety of advanced electronic systems. For the past 16 years, I’ve been living in Dubai, UAE, continuing my work in the same field.\n' +
    '\n' +
    'Driven by a desire to expand my horizons, I decided to explore the world of programming. I began with JavaScript and enrolled in a course at RS School. I’ve successfully completed it, truly enjoyed the experience, and now I’m excited to continue my journey in the IT field.”',
  githubName: 'vitalikozhar',
  photo: Vitaliy,
  contribution: [
    'API Configuration: Set up and optimized API connections',
    'Implemented main page layout',
    'Designed and built header component',
    'Application Routing: Established all client-side navigation',
    'Developed product page with business logic',
    'Integrated search functionality',
    'Implemented basket clearing logic and added interactive basket control buttons',
    'API integration for assigned tasks',
    'Test coverage for developed components',
  ],
};

interface DetailInfoProps {
  onMemberClick: (member: TeammateCardProps | null) => void;
}
