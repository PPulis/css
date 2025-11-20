import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../dto/user';

@Injectable({
  providedIn: 'root',
})
export class UserService{
  
  private url:string = "https://jsonplaceholder.typicode.com/users";


  constructor(private http:HttpClient){ //The access modifier in the constructor globalises the parameter passed in the constructore
    
  }

  //SELECT 
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

//   //SELECT BY ID = Longer version
//  getUser(id: number) {
//   return this.http.get<User>(`${this.url}/${id}`).pipe(
//     catchError(error => {
//       if (error.status === 404) {
//         // Handle not found
//         return throwError(() => new Error('User not found'));
//       }
//       // Handle other errors
//       return throwError(() => error);
//     })
//   );
// }

 //SELECT BY ID = Shorthand version
 getUser(id: number): Observable<User> {
  return this.http.get<User>(`${this.url}/${id}`).pipe(
    catchError(error => throwError(() => new Error(error.status === 404 ? 'User not found' : error.message)))
  );
}

  //INSERT
  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.url, user);
  }
  
  //DELETE by ID
  deleteUser(id:number): void{
    this.http.delete<void>(this.url + '/' + id);
  }

  //UPDATE by ID
  updateUser(id:number, user:User):Observable<User>{
    return this.http.put<User>(this.url + '/' + id,user);
  }

}
