import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class TileService {
    maximizeSubject = new Subject<any>();
    maximizeEvent = this.maximizeSubject.asObservable();

    minimizeSubject = new Subject<any>();
    minimizeEvent = this.minimizeSubject.asObservable();

    maximize(element: HTMLElement) {
        this.maximizeSubject.next(element);
    }

    minimize(element: HTMLElement) {
        this.minimizeSubject.next(element);
    }
}
