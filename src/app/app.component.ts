import {ChangeDetectorRef, Component} from '@angular/core';
import {Observable} from '../../node_modules/rxjs';
import * as EventSource from 'eventsource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'app';
  counter = '';
  helloWorldUrl = 'http://localhost:8080/helloworld';
  tickerUrl = 'http://localhost:8080/ticker';


  constructor(private ref: ChangeDetectorRef) {
    this.getHelloWorldStream().subscribe((data) => this.text = data);
    this.getTickerStream().subscribe((data) => {
      this.counter = data;
      this.ref.detectChanges();
    });
  }

  getTickerStream(): Observable<string> {
    return Observable.create((observer) => {
      // let tickerUrl = this.tickerUrl;
      const eventSource = new EventSource(this.tickerUrl);
      eventSource.onmessage = (event) => {
        console.log('Received event: ', event);
        observer.next(event.data);
      };
      eventSource.onerror = (error) => {
        // readyState === 0 (closed) means the remote source closed the connection,
        // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
        // is to insert a special element in the stream of events, which the client can identify as the last one.
        if (eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      };
    });
  }

  getHelloWorldStream(): Observable<string> {
    return Observable.create((observer) => {
      // let tickerUrl = this.tickerUrl;
      const eventSource = new EventSource(this.helloWorldUrl);
      eventSource.onmessage = (event) => {
        console.log('Received event: ', event);
        observer.next(event.data);

      };
    });
  }
}

