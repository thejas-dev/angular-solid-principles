import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base-service.service';
import { HttpClient } from '@angular/common/http';
import { environmentConfig } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<number> {

  public userIds: number[] = [];

  constructor(private http: HttpClient) {
    super();
  }

  fetchAll(): void {
    this.http.get<any[]>(`${environmentConfig.dummyDataApiURL}/users`).subscribe(
      (response) => {
        this.userIds = response.map((user) => user.id);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  fetchById(id: any): void {
    console.error('This operation is not supported for users.');
  }

  getItems(): number[] {
    return this.userIds;
  }
}
