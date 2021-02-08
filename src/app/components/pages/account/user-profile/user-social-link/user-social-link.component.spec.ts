import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocialLinkComponent } from './user-social-link.component';

describe('UserSocialLinkComponent', () => {
  let component: UserSocialLinkComponent;
  let fixture: ComponentFixture<UserSocialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocialLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSocialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
