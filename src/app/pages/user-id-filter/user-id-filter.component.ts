import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { UserService } from '../../services/user-service/user-service.service';
import { PostsService } from '../../services/posts-service/posts-service.service';

@Component({
  selector: 'app-user-id-filter',
  standalone: true,
  imports: [NgForOf],
  providers: [UserService, PostsService],
  templateUrl: './user-id-filter.component.html',
  styleUrl: './user-id-filter.component.scss'
})
export class UserIdFilterComponent {

  constructor(
    public userService: UserService,
    public postService: PostsService,
  ){}

  ngOnInit() {
    this.userService.fetchAll();
  }

  handleIdChange(event: any) {
    this.postService.fetchById(event.target.value);
  }

}
