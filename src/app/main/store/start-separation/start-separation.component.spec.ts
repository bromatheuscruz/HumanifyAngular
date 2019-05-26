import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSeparationComponent } from './start-separation.component';

describe('StartSeparationComponent', () => {
  let component: StartSeparationComponent;
  let fixture: ComponentFixture<StartSeparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSeparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSeparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
