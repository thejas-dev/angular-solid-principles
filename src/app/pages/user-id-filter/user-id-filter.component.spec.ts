import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdFilterComponent } from './user-id-filter.component';

describe('UserIdFilterComponent', () => {
  let component: UserIdFilterComponent;
  let fixture: ComponentFixture<UserIdFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserIdFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIdFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
