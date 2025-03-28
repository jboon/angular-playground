import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidiComponent } from './bidi.component';

describe('BidiComponent', () => {
  let component: BidiComponent;
  let fixture: ComponentFixture<BidiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
