import { Component } from '@angular/core';
import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
  selector: 'app-root',
  template: `
    <tabs>
      <tab class="white" tabTitle="WHITE">
        <div class="white">
          <p class="whiteText">WHITE!</p>
          <p>CONTENT GOES HERE</p>
        </div>
      </tab>
      <tab class="blue" tabTitle="BLUE">
        <div class="blue">
          <p class="blueText">BLUE!</p>
          <p>CONTENT GOES HERE</p>
        </div>
      </tab>
      <tab class="black" tabTitle="BLACK">
        <div class="black">
          <p class="blackText">BLACK!</p>
          <p>CONTENT GOES HERE</p>
        </div>
      </tab>
      <tab class="red" tabTitle="RED">
        <div class="red">
          <p class="redText">RED!</p>
          <p>CONTENT GOES HERE</p>
        </div>
      </tab>
      <tab class="green" tabTitle="GREEN">
        <div class="green">
          <p class="greenText">GREEN!</p>
          <p>CONTENT GOES HERE</p>
        </div>
      </tab>
    </tabs>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
  }
}
