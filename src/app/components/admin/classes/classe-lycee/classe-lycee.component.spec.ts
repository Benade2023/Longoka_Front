import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseLyceeComponent } from './classe-lycee.component';

describe('ClasseLyceeComponent', () => {
  let component: ClasseLyceeComponent;
  let fixture: ComponentFixture<ClasseLyceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseLyceeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseLyceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
