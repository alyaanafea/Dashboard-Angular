import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css',
})
export class OneUserComponent implements OnInit {
  @Input() oneUser: any;
  src = '../../../assets/images/maleuser.png';

  ngOnInit() {
    if (this.oneUser.gender === 'female') {
      this.src = '../../../assets/images/femaleuser.png';
    }
  }
}
