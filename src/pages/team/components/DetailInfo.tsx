import { TeammateCard } from './TeammateCard.tsx';
import { ReactElement } from 'react';

export function DetailInfo(): ReactElement {
  return (
    <section className="mt-5 w-full">
      <h1>Our team:</h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-2 w-full">
        <TeammateCard
          name="Viktor Vonyarkha"
          labels={{
            feature: true,
            crossCheck: true,
            deploy: true,
            tests: true,
            bugfix: true,
          }}
          role="Team lead"
        />
        <TeammateCard
          name="Anastasiia Blagoveshchenskaia "
          labels={{
            feature: true,
            UX: true,
            refactor: true,
            tests: true,
            bugfix: true,
          }}
          role="Queen of forms"
        />
        <TeammateCard
          name="Vitali Kozhar"
          labels={{
            feature: true,
            API: true,
            database: true,
            tests: true,
            bugfix: true,
          }}
          role="API Master"
        />
      </div>
    </section>
  );
}
