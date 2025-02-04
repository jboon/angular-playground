import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidiComponent } from './unidi.component';

describe('UnidiComponent', () => {
  let component: UnidiComponent;
  let fixture: ComponentFixture<UnidiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
