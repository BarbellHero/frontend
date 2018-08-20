import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkoutRepositoryService } from '../workout-repository.service';
import { Workout } from '../workout';
import { MatTable } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.scss']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[];
  displayedColumns = ['id', 'name'];

  @ViewChild('table')
  table: MatTable<Workout>;

  @ViewChild('addForm')
  addForm: NgForm;

  constructor(private workoutRepository: WorkoutRepositoryService) {
  }

  ngOnInit() {
    this.workoutRepository.list().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

  add(form: NgForm) {
    this.workoutRepository.create(form.value).subscribe(workout => {
      this.workouts.push(workout);
      this.table.renderRows();
      this.addForm.resetForm();
    });
  }

}
