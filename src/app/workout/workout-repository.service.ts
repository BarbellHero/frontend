import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Workout } from './workout';

@Injectable()
export class WorkoutRepositoryService {
  private readonly resource: string;

  constructor(private http: HttpClient) {
    this.resource = environment.apiBase + 'workout/';
  }

  get(id: number) {
    return this.http.get<Workout>(this.resource + id);
  }

  create(workout: Workout) {
    return this.http.post<Workout>(this.resource, workout);
  }

  list() {
    return this.http.get<Workout[]>(this.resource);
  }

  update(workout: Workout) {
    return this.http.put(this.resource + workout.id, workout);
  }

  delete(id: number) {
    return this.http.delete(this.resource + id);
  }
}
