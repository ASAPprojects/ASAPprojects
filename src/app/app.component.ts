import { Component, OnInit, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	public current:number = 1;
    public pics:Array<string> = [];
    constructor(){
        this.init();
    }
    init(){
        var nameOfPicFolder = 'src/assets/images';
        var noOfPics = 3;
        var counter = 1;
        while (counter <= noOfPics) {
            this.pics.push(nameOfPicFolder+'/image'+counter+'.jpg');
            counter++;
        }
		this.current = 0;
    }
	
	isCurrent(newValue:number){
		this.current == newValue ? true : false;
        return this.current;
    }

	setInterval(() => this.current = (this.current < 3) ? (this.current + 1) : 0, 5000);
}