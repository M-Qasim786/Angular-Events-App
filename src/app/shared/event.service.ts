import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEvent } from './event-model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  URL = 'http://localhost:3000/events';
  constructor(private http: HttpClient) {}
  getEvents(): Observable<IEvent[]> {
    return this.http
      .get<IEvent[]>(this.URL)
      .pipe(
        tap(
          (data) => console.log('All', JSON.stringify(data)),
          catchError(this.handleError)
        )
      );
  }

  getEventsDetail(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.URL}/${id}`);
  }

  postSaveEvent(formData: FormData): Observable<IEvent[]> {
    return this.http.post<IEvent[]>(this.URL, formData).pipe(
      tap(
        (data) => console.log('success', JSON.stringify(data)),
        catchError((error) => of(null))
      )
    );
  }

  deleteEvent(id: number): Observable<IEvent> {
    return this.http.delete<IEvent>(`${this.URL}/${id}`).pipe(
      tap(
        (data) => console.log(`data successfully delete,${id}`),
        catchError(async (error) => console.log('error', error))
      )
    );
  }
  updateCurrentEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.URL}/${id}`).pipe(
      tap(
        (data) => console.log(`data update successfully,${id}`, data),
        catchError(async (err) => console.log('error', err))
      )
    );
  }
  updateCurrentData(id: number, data: any): Observable<IEvent> {
    return this.http.put<IEvent>(`${this.URL}/${id}`, data).pipe(
      tap(
        (data) => console.log(`data update successfylly,${id}`, data),
        catchError(async (err) => console.log('error', err))
      )
    );
  }

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
