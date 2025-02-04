import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobiComponent } from './nobi.component';

describe('NobiComponent', () => {
  let component: NobiComponent;
  let fixture: ComponentFixture<NobiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NobiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
