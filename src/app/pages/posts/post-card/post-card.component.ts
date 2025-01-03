import { Component, Input } from '@angular/core';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { NgIf } from '@angular/common';

export interface Post {
  title: string;
  body: string;
  id: string;
  userId: string;
}

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MoreDetailsComponent,NgIf],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  @Input() post: Post = {title:'', body: '', id: '', userId: ''};
  showMore: boolean = false;
}
