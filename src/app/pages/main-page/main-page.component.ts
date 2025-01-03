import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { UserIdFilterComponent } from '../user-id-filter/user-id-filter.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [PostsComponent,UserIdFilterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
