interface Props {
  workDays: boolean[];
  deadlineDay: number;
}

export function Deadline({ workDays, deadlineDay }: Readonly<Props>) {
  console.log(['skldf'][2]);

  const today = new Date();
  const deadline = new Date(today.getFullYear(), today.getMonth(), deadlineDay);

  if (deadline < today) {
    deadline.setMonth(deadline.getMonth() + 1);
  }

  /**
   * Check if a given day is a workday
   * @param day 0 Monday, 1 Tuesday, ..., 6 Sunday
   */
  const isWorkday = (day: number) => {
    return !!workDays[day]; // Array could be shorter than 7
  };

  // Calculate the number of workdays until the deadline
  const daysUntil = 0;

  return (
    <div className="text-font">
      <h3>Deadline: {deadline.toLocaleDateString()}</h3>
      <p>Working days remaining: {daysUntil}</p>
    </div>
  );
}
