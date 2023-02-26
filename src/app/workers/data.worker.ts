/// <reference lib="webworker" />
import { generateData } from './data-generator';

let stopTimerHandler: any;

addEventListener('message', (event) => {
  const command = event.data.command;
  switch (command) {
    case 'start':
      startTimer(event.data.interval, event.data.size);
      break;
    case 'stop':
      clearInterval(stopTimerHandler);
      break;
  }
});

function startTimer(interval: number, size: number) {
  if (stopTimerHandler) clearInterval(stopTimerHandler);

  stopTimerHandler = setInterval(
    () => postMessage(generateData(size)),
    interval
  );
}
