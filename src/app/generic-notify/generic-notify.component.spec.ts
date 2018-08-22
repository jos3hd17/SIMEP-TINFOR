import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericNotifyComponent } from './generic-notify.component';

describe('GenericNotifyComponent', () => {
  let component: GenericNotifyComponent;
  let fixture: ComponentFixture<GenericNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
