import {Component, OnInit} from '@angular/core';
import {DisplayService} from './display.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  rows: Observable<boolean[][]>;

  constructor(private displayService: DisplayService) {
    this.rows = this.displayService.grid();
  }

  ngOnInit() {
  }

}
