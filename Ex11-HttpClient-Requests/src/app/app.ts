import { Component, OnInit } from '@angular/core';
import { UserService } from './services/userservice';
import { User } from './dto/user';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected user: User | null = null;
  protected users: User[] = [];
  protected errorMessage: string = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      })
  }

  filterUser(event: any): void {
    const value = event.target.value as number;
      this.userService.getUser(value).subscribe({
        // next and error handlers
        next: (data: User) => { // on success
          this.user = data;// set user data
          this.errorMessage = "";// 
        },
        error: (err: any) => {// on error
          this.user = null;// clear user on error
          this.errorMessage = err.message;//  set error message
        }
      });
  }
}
