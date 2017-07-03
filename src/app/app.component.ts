import { Component } from '@angular/core';
import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
  selector: 'app-root',
  template: `
    <tabs>
      <tab [tabTitle]="'Tab 1'">
        Tab 1 Content
        <p>TAB ONE!!!!</p>
      </tab>
      <tab tabTitle="Tab 2">
        Tab 2 Content
        <p>TAB TWOOOOOOO!!!!</p>
      </tab>
    </tabs>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'app';
  name;

  constructor() {
    this.name = 'ng2-tabs'
  }
}
