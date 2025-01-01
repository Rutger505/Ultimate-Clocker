import { Tab, Tabs } from '../Tabs';

export function RegisterWorkHoursForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
