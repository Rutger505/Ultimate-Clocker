interface Props {
  workDays: boolean[];
  setWorkDays: (workDays: boolean[]) => void;
}

export function WorkDays({ workDays, setWorkDays }: Readonly<Props>) {
  return (
    <div className={'space-y-2 flex items-center flex-col'}>
      <h3 className={'text-xl font-semibold'}>Work Days</h3>
      <div className={'flex gap-2'}>
        {workDays.map((workDay, index) => (
          <div
            key={index}
            className={`w-8 h-8 flex justify-center items-center rounded-full cursor-pointer ${
              workDay ? 'bg-selection' : 'bg-background'
            }`}
            onClick={() => {
              const newWorkDays = [...workDays];
              newWorkDays[index] = !workDay;
              setWorkDays(newWorkDays);
            }}
          >
            {['M', 'T', 'W', 'T', 'F'][index]}
          </div>
        ))}
      </div>
    </div>
  );
}
