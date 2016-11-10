import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    
    public devInfo = `This is just a dev page ${moment().format('LLLL')}`;

    ngOnInit() {
    }

   
}