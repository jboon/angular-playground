import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservedFormComponent } from './observed-form.component';

describe('ObservedFormComponent', () => {
  let component: ObservedFormComponent;
  let fixture: ComponentFixture<ObservedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
