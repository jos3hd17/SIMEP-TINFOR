import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsByUserComponent } from './facts-by-user.component';

describe('FactsByUserComponent', () => {
  let component: FactsByUserComponent;
  let fixture: ComponentFixture<FactsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
