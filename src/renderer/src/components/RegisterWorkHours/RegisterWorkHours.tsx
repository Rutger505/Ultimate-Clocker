import { RegisterWorkHoursForm } from './RegisterWorkHoursForm';

export function RegisterWorkHours() {
  return (
    <div className={'flex flex-col items-center gap-5'}>
      <h2 className={'text-2xl font-semibold'}>Register Work Hours</h2>
      <RegisterWorkHoursForm />
    </div>
  );
}
