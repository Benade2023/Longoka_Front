import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassePrimaireComponent } from './classe-primaire.component';

describe('ClassePrimaireComponent', () => {
  let component: ClassePrimaireComponent;
  let fixture: ComponentFixture<ClassePrimaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassePrimaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassePrimaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
