import { Tab, Tabs } from '../Tabs';
import { FormEvent } from 'react';

export function RegisterWorkHoursForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs>
        <Tab label={'Date'}>aslkdfasjdf</Tab>
        <Tab label={'Hours'}>czxv</Tab>
      </Tabs>
    </form>
  );
}
