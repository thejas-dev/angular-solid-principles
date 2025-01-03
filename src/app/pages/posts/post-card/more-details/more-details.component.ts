import { Component, Input } from '@angular/core';

// Interface Segregation Principle - Client specific interface
// Having values only required for this component
export interface Post {
  id: string;
  userId: string;
}

@Component({
  selector: 'app-more-details',
  standalone: true,
  imports: [],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.scss'
})
export class MoreDetailsComponent {
  @Input() post: Post = {id:'', userId:''};
}
