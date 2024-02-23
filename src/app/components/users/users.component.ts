import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { OneUserComponent } from '../one-user/one-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule, UserDetailsComponent, OneUserComponent],
  providers: [HttpClient, UsersService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private userservice: UsersService) {}
  ngOnInit() {
    this.userservice.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
