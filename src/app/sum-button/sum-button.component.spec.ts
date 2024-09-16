import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumButtonComponent } from './sum-button.component';

describe('SumButtonComponent', () => {
  let component: SumButtonComponent;
  let fixture: ComponentFixture<SumButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
