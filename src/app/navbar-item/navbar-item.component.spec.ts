import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarItemComponent } from './navbar-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarItemComponent', () => {
  let component: NavbarItemComponent;
  let fixture: ComponentFixture<NavbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NavbarItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarItemComponent);
    component = fixture.componentInstance;
    component.routerLink = '/aRandomPath';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the routerLink correctly', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const aTag = debugEl.query(By.css('a'));
    expect(aTag).toBeTruthy();

    const aNative: HTMLElement = aTag.nativeElement;
    expect(aNative.hasAttribute('href')).toBeTruthy();

    const href = aNative.getAttribute('href');
    expect(href).toEqual('/aRandomPath');
  });
});
