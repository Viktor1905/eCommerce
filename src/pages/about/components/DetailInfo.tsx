import { TeammateCard, TeammateCardProps } from './TeammateCard.tsx';
import { ReactElement } from 'react';
import Viktor from '../assets/Viktor.jpg';

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
  infoAbout: 'Perfect Teammate',
  githubName: 'hourabl',
  photo: Viktor,
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
  infoAbout: 'Perfect Teammate',
  githubName: 'vitalikozhar',
  photo: Viktor,
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
