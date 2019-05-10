import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToCountdownComponent } from './redirect-to-countdown.component';

describe('RedirectToCountdownComponent', () => {
  let component: RedirectToCountdownComponent;
  let fixture: ComponentFixture<RedirectToCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectToCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectToCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
