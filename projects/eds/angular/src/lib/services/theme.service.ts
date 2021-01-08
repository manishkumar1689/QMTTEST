import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  toggle(isLight: boolean) {
    if (isLight) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }
}
