import { WorkDays } from './WorkDays';
import { useState } from 'react';
import { Deadline } from './Deadline';

interface Props {
  deadlineDay: number;
}

export function Report({ deadlineDay }: Readonly<Props>) {
  const [workDays, setWorkDays] = useState<boolean[]>(Array(5).fill(false));

  return (
    <div className={'flex flex-col items-center gap-5'}>
      <h2 className={'text-2xl font-semibold'}>Report</h2>
      <WorkDays workDays={workDays} setWorkDays={setWorkDays} />
      <Deadline workDays={workDays} deadlineDay={deadlineDay} />
    </div>
  );
}
