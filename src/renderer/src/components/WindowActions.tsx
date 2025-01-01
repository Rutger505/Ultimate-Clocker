export function WindowActions() {
  return (
    <div className={'absolute top-0 right-0 flex'}>
      <button
        className={'hover:bg-selection h-8 w-8 flex items-center justify-center'}
        onClick={() => window.api.minimizeApp()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
        >
          <path d="M240-120v-80h480v80H240Z" />
        </svg>
      </button>
      <button
        className={'hover:bg-selection h-8 w-8 flex items-center justify-center'}
        onClick={() => window.api.closeApp()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
    </div>
  );
}
