import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutRepositoryService } from 'src/app/workout/workout-repository.service';
import { Workout } from 'src/app/workout/workout';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[];
  displayedColumns = ['id', 'name'];
  newWorkout: Workout = new Workout();

  @ViewChild('table')
  table: MatTable<Workout>;

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
      this.table.renderRows();
    });
    this.newWorkout.name = '';
  }

}
