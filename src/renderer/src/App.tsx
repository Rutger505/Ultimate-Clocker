import { WindowActions } from './components/WindowActions';
import Report from './components/Report';

function App() {
  return (
    <main
      className={'text-font draggable bg-background h-screen px-8 py-6 flex flex-col items-start'}
    >
      <WindowActions />
      <h1 className={'text-2xl font-semibold'}>Ultimate Clocker</h1>

      <div className={'w-full h-full flex justify-center items-center'}>
        <Report deadlineDay={15} />
      </div>
    </main>
  );
}

export default App;
