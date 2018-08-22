import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStadisticsComponent } from './preview-stadistics.component';

describe('PreviewStadisticsComponent', () => {
  let component: PreviewStadisticsComponent;
  let fixture: ComponentFixture<PreviewStadisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewStadisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
