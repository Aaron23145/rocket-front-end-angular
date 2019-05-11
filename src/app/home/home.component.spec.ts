import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeBoxComponent } from '../home-box/home-box.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeComponent,
        HomeBoxComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.boxesContent = [
      {
        title: 'Status',
        description: 'Check the rocket status to know if it\'s waiting, in countdown or it has been shooted.',
        icon: 'fas fa-eye',
        routerLink: 'status'
      },
      {
        title: 'Countdown',
        description: 'Check the remaining time until the rocket shoots.',
        icon: 'far fa-clock',
        routerLink: 'countdown'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate an unordered list with two items', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const ulTag = debugEl.query(By.css('ul'));
    expect(ulTag).toBeTruthy();

    const ulNative = ulTag.nativeElement;
    expect(ulNative.children.length).toEqual(2);
  });
});
