import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  	selector: 'app-goal',
  	templateUrl: './goal.component.html',
  	styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

    goals = [
        new Goal(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2019,5,2)),
        new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,5,2)),
        new Goal(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,5,2)),
        new Goal(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2019,5,2)),
        new Goal(5, 'Solve math homework','Damn Math',new Date(2018,4,12)),
        new Goal(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date()),
    ]

    toogleDetails(index){
        this.goals[index].showDescription = !this.goals[index].showDescription;
    }

    deleteGoal(duncan,index){
    	if (duncan){
            let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
            
            if(toDelete){
                this.goals.splice(index,1)
            }
        }
    }
    

  constructor() { }

  ngOnInit() {
  }
}
