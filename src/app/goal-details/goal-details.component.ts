import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output() duncan = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.duncan.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}