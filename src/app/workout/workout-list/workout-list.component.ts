import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutRepositoryService } from 'src/app/workout/workout-repository.service';
import { Workout } from 'src/app/workout/workout';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[];
  newWorkout: Workout = new Workout();

  constructor(private workoutRepository: WorkoutRepositoryService) {
  }

  ngOnInit() {
    this.workoutRepository.list().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  add() {
    this.workoutRepository.create(this.newWorkout).subscribe(workout => {
      this.workouts.push(workout);
    });
    this.newWorkout.name = '';
  }

}
