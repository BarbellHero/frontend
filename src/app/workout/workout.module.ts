import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutRepositoryService } from './workout-repository.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WorkoutRoutingModule
  ],
  declarations: [WorkoutListComponent],
  providers: [WorkoutRepositoryService]
})
export class WorkoutModule { }
