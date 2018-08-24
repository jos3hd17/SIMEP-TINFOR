import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFactsComponent } from './read-facts.component';

describe('ReadFactsComponent', () => {
  let component: ReadFactsComponent;
  let fixture: ComponentFixture<ReadFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
