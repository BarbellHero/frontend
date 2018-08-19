import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
} from '@angular/material';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutRepositoryService } from './workout-repository.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    WorkoutRoutingModule
  ],
  declarations: [WorkoutListComponent],
  providers: [WorkoutRepositoryService]
})
export class WorkoutModule { }
