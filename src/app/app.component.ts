import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'worker-app';
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./workers/data-component.worker', import.meta.url));
//   worker.onmessage = ({ data-component }) => {
//     console.log(`page got message: ${data-component}`);
//   };
//   worker.postMessage({ command: 'stop' });
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
