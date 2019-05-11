import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoxComponent } from './home-box.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeBoxComponent', () => {
  let component: HomeBoxComponent;
  let fixture: ComponentFixture<HomeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeBoxComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBoxComponent);
    component = fixture.componentInstance;
    component.content = {
      title: 'title',
      description: 'description',
      icon: 'icon',
      routerLink: 'routerLink'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
