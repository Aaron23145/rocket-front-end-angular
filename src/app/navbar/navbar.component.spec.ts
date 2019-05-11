import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NavbarComponent,
        NavbarItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('elements are rendered correctly', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const navTag = debugEl.query(By.css('nav'));
    expect(navTag).toBeTruthy();

    const navNative: HTMLElement = navTag.nativeElement;
    const divsNative: HTMLCollection = navNative.children;
    expect(divsNative.length).toEqual(2);

    const children = [];
    Array.from(divsNative).forEach(element => {
      Array.from(element.children).forEach(elementOfElement => {
        children.push(elementOfElement);
      })
    });
    expect(children.length).toEqual(4);
  });
});
