import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { faCoffee, faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [HttpClientModule, RouterLink, FormsModule],
  providers: [UsersService, HttpClientModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  id = 0;
  UpdatedUser: any;
  user: any;
  faCoffee = faCoffee;
  role = 'admin';
  src = '../../../assets/images/maleuser.png';
  confirmation = false;
  constructor(
    myRoute: ActivatedRoute,
    private myService: UsersService,
    private router: Router
  ) {
    this.id = myRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.myService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user.gender === 'female') {
          this.src = '../../../assets/images/femaleuser.png';
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  changeUserDetails() {
    this.confirmation = confirm('Do You Want To Save This Changes?');
    if (this.confirmation) {
      this.myService.updateUserDetails(this.id, this.user).subscribe();
      this.router.navigate(['/users']);
    } else {
      this.router.navigate(['/users']);
    }
  }
  deleteUser() {
    console.log(this.id);
    this.confirmation = confirm('Do You Want To Delete This User?');
    if (this.confirmation) {
      this.myService.DeleteUser(this.user.id).subscribe(
        () => {
          alert('User deleted successfully.');
        },
        (error) => {
          console.error('Error deleting user:', error);
          // Handle error appropriately
        }
      );
      this.router.navigate(['/users']);
      console.log(this.user);
    } else {
      console.log('hello');
    }
  }
  cancel() {
    this.router.navigate(['/users']);
  }
}
