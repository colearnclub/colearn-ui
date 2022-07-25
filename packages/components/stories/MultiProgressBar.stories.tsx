import {
  Bar,
  Container,
  Bonus,
} from '../src/components/common/MultiProgressBar';
import minutesToHours from 'date-fns/minutesToHours';

export default {
  title: 'App/MultiProgressBar',
  component: MultiProgressBar,
};

function minsOrHrs(mins?: Maybe<string | number>): string {
  if (!mins || mins < 60) {
    return `${mins} mins`;
  }
  return `${minutesToHours(+mins)} hours`;
}

export function MultiProgressBar(args) {
  const done = 30,
    planned = 70,
    goal = 100;

  return (
    <Container max={goal} size="lg" w="100%" style={{ marginTop: 50 }}>
      {goal > 0 && (
        <Bar
          value={goal}
          label={`${minsOrHrs(Math.max(goal - planned, 0))} Remaining`}
          bg="transparent"
        />
      )}
      {planned > 0 && (
        <Bar
          value={Math.min(planned, goal)}
          label={`${minsOrHrs(planned)} Planned`}
          type="secondary"
        />
      )}
      {done > 0 && (
        <Bar
          value={Math.min(done, goal)}
          label={`${minsOrHrs(done)} Completed`}
        >
          <div>{(goal / 100) * done}%</div>
        </Bar>
      )}
    </Container>
  );
}

export function Colorful(args) {
  const done = 30,
    planned = 70,
    goal = 100;

  return (
    <Container
      max={goal}
      size="sm"
      w="100%"
      style={{ borderRadius: '8px', marginTop: 50 }}
    >
      {goal > 0 && (
        <Bar
          value={goal}
          label={`${minsOrHrs(Math.max(goal - planned, 0))} Remaining`}
          bg="transparent"
          style={{ borderRadius: '8px' }}
        />
      )}
      {planned > 0 && (
        <Bar
          value={Math.min(planned, goal)}
          label={`${minsOrHrs(planned)} Planned`}
          bg="rgba(196, 234, 76, 0.8)"
          style={{ borderRadius: '8px' }}
        />
      )}
      {done > 0 && (
        <Bar
          value={Math.min(done, goal)}
          label={`${minsOrHrs(done)} Completed`}
          bg="#ff7474"
          style={{ borderRadius: '8px' }}
        />
      )}
    </Container>
  );
}

export function WithBonus(args) {
  const done = 30,
    planned = 70,
    goal = 100,
    bonus = 13;

  return (
    <Container max={goal + bonus} size="lg" w="100%" style={{ marginTop: 50 }}>
      <Bar
        value={goal}
        label={`${minsOrHrs(Math.max(goal - planned, 0))} Remaining`}
        bg="transparent"
      />
      <Bar
        value={Math.min(planned, goal)}
        label={`${minsOrHrs(planned)} Planned`}
        type="secondary"
      />
      <Bonus value={bonus} label="additional" />
      <Bar value={done} label={`${minsOrHrs(done)} Completed`}>
        <div>{(goal / 100) * done}%</div>
      </Bar>
    </Container>
  );
}
