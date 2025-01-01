import { WindowActions } from './components/WindowActions';

function App() {
  return (
    <main
      className={'text-font draggable bg-background h-screen px-8 py-6 flex flex-col items-start'}
    >
      <WindowActions />
      <h1 className={'text-2xl font-semibold'}>Ultimate Clocker</h1>
    </main>
  );
}

export default App;
