import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleItem } from './single-item';

describe('SingleItem', () => {
  let component: SingleItem;
  let fixture: ComponentFixture<SingleItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
