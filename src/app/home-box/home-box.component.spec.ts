import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoxComponent } from './home-box.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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

  it('should set the content correctly', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const aTag = debugEl.query(By.css('a'));
    const h2Tag = debugEl.query(By.css('h2'));
    const pTag = debugEl.query(By.css('p'));
    expect(aTag).toBeTruthy();
    expect(h2Tag).toBeTruthy();
    expect(pTag).toBeTruthy();

    const aNative: HTMLElement = aTag.nativeElement;
    expect(aNative.hasAttribute('href')).toBeTruthy();

    const href = aNative.getAttribute('href');
    expect(href).toEqual('/routerLink');

    const h2Native: HTMLElement = h2Tag.nativeElement;
    const h2Text: string = h2Native.textContent;
    expect(h2Text).toEqual('title');

    const pNative: HTMLElement = pTag.nativeElement;
    const pText: string = pNative.textContent;
    expect(pText).toEqual('description');
  });
});
