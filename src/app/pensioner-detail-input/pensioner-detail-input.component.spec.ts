import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionerDetailInputComponent } from './pensioner-detail-input.component';

describe('PensionerDetailInputComponent', () => {
  let component: PensionerDetailInputComponent;
  let fixture: ComponentFixture<PensionerDetailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionerDetailInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionerDetailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
