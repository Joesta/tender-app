import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBidSubmissionComponent } from './edit-bid-submission.component';

describe('EditBidSubmissionComponent', () => {
  let component: EditBidSubmissionComponent;
  let fixture: ComponentFixture<EditBidSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBidSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBidSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
