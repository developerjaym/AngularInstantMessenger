import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/authenticate.service';
import { UserDTO } from '../../model/user-dto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: UserDTO[];
  constructor(private authService: AuthenticateService) {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data) => (this.users = data));
    console.log(this.users);
  }
}
