import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTenderBidComponent } from './edit-tender-bid.component';

describe('EditTenderBidComponent', () => {
  let component: EditTenderBidComponent;
  let fixture: ComponentFixture<EditTenderBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTenderBidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTenderBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
