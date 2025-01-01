import { WorkDays } from './WorkDays';
import { useState } from 'react';

export function Report() {
  const [workDays, setWorkDays] = useState<boolean[]>(Array(5).fill(false));

  return (
    <div className={'flex flex-col items-center gap-5'}>
      <h2 className={'text-2xl font-semibold mt-4'}>Report</h2>
      <WorkDays workDays={workDays} setWorkDays={setWorkDays} />
    </div>
  );
}
