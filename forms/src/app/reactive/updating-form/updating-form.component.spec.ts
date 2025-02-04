import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingFormComponent } from './updating-form.component';

describe('UpdatingFormComponent', () => {
  let component: UpdatingFormComponent;
  let fixture: ComponentFixture<UpdatingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
