import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdChild } from './third-child';

describe('ThirdChild', () => {
  let component: ThirdChild;
  let fixture: ComponentFixture<ThirdChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
