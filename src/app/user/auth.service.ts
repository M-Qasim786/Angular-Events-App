// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable, of } from "rxjs";
// import { catchError,tap } from "rxjs/operators";
// import { IUser } from "./user-model";

// @Injectable({
//   providedIn:'root'
// })


// export class AuthService{

//   URL='http://localhost:3000/loginUser'
//   constructor(private http: HttpClient){}

//   loginUser(formData: FormData):Observable<IUser>{
// return this.http.post<IUser>(this.URL, formData).pipe(
//   tap(data => console.log('data post in dbs', JSON.stringify(data)),
//   catchError(error => of(null))
//   )
// )

//   }




// }
