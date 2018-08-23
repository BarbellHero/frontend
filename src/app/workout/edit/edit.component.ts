import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutRepositoryService } from '../workout-repository.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild('editForm')
  editForm: NgForm;

  constructor(
    private route: ActivatedRoute, 
    private workoutRepository: WorkoutRepositoryService,
    private router: Router
  ) {
    const id = route.snapshot.params.id;
    this.workoutRepository.get(id).subscribe(workout => {
      this.editForm.setValue(workout);
    });
  }

  ngOnInit() {
  }

  submit() {
    this.workoutRepository.update(this.editForm.value).subscribe(() => {
      this.router.navigate(['/workout/list']);
    });
  }

}
