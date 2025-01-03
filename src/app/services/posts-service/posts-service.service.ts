import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base-service.service';
import { HttpClient } from '@angular/common/http';
import { environmentConfig } from '../../../environments/environments';

interface Post {
  title: string;
  body: string;
  id: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<Post> {
  public posts: Post[] = [];

  constructor(private http: HttpClient) {
    super();
  }

  fetchAll(): void {
    this.http.get(`${environmentConfig.dummyDataApiURL}/posts`).subscribe(
      (response:any) => {
        this.posts = response;
      },
    );
  }

  fetchById(userId: any): void {
    this.http.get(`${environmentConfig.dummyDataApiURL}/posts?userId=${userId}`).subscribe(
      (response:any) => {
        this.posts = response;
      },
    );
  }
  
  getItems(): Post[] {
    return this.posts;
  }
}
