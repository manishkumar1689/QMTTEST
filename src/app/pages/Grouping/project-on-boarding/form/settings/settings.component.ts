import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Accordion } from '@eds/vanilla';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit ,AfterViewInit{

  constructor() {
  
  }
  ngAfterViewInit(): void {

     
    }

  ngOnInit() {
    setTimeout(() => {
      const accordions = document.querySelectorAll('.accordion');

      if (accordions) {
        Array.from(accordions).forEach((accordionDOM) => {
          const accordion = new Accordion(<HTMLElement>accordionDOM);
          accordion.init();
        });
      }
    }, 2000)
  }

}
