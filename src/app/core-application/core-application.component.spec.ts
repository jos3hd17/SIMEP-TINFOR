import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreApplicationComponent } from './core-application.component';

describe('CoreApplicationComponent', () => {
  let component: CoreApplicationComponent;
  let fixture: ComponentFixture<CoreApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
