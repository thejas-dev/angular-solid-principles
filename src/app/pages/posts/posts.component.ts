import { Component } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { PostsService } from '../../services/posts-service/posts-service.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  providers: [PostsService],
  imports: [CommonModule,NgIf,NgForOf,PostCardComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  
  constructor(
    public postsService: PostsService,
  ){}
  
  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    // Single responsibility principle, fetching data is not part of this component
    // Responsibility of the CommonServices should be to handle all data fetching operations
    this.postsService.fetchAll()
  }


}
