import { DateTime } from 'luxon';
import clsx from 'clsx';

interface Props {
  workDays: boolean[];
  deadlineDay: number;
}

export function Deadline({ workDays, deadlineDay }: Readonly<Props>) {
  if (workDays.every((day) => !day)) {
    return <div className="text-font">Select work days</div>;
  }

  function isWorkDay(day: DateTime) {
    return day.weekday > 0 && day.weekday < 6 && Boolean(workDays[day.weekday - 1]);
  }

  const today = DateTime.now().startOf('day');
  let deadline = DateTime.now().set({ day: deadlineDay }).startOf('day');
  if (deadline < today) {
    deadline = deadline.plus({ months: 1 });
  }

  let lastWorkDay = deadline;
  while (!isWorkDay(lastWorkDay)) {
    lastWorkDay = lastWorkDay.minus({ days: 1 });
  }

  const daysUntilLastWorkDayBeforeDeadline = lastWorkDay.diff(today, 'days').as('days');

  let deadlineColor: string;
  if (daysUntilLastWorkDayBeforeDeadline > 10) {
    deadlineColor = '';
  } else if (daysUntilLastWorkDayBeforeDeadline > 0) {
    deadlineColor = 'text-warning';
  } else {
    deadlineColor = 'text-danger';
  }

  return (
    <div className="flex-col flex items-center gap-2">
      <h3 className="text-lg font-semibold">Deadline</h3>
      <p className={clsx(deadlineColor, 'max-w-[200px] text-center')}>
        Send report{' '}
        {daysUntilLastWorkDayBeforeDeadline > 0
          ? `in ${daysUntilLastWorkDayBeforeDeadline} days `
          : 'today '}
        ({lastWorkDay.toLocaleString(DateTime.DATE_FULL)})
      </p>
    </div>
  );
}
