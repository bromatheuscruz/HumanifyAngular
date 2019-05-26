import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFiscalNoteComponent } from './view-fiscal-note.component';

describe('ViewFiscalNoteComponent', () => {
  let component: ViewFiscalNoteComponent;
  let fixture: ComponentFixture<ViewFiscalNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFiscalNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFiscalNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
