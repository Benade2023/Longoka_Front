import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassePrescolaireComponent } from './classe-prescolaire.component';

describe('ClassePrescolaireComponent', () => {
  let component: ClassePrescolaireComponent;
  let fixture: ComponentFixture<ClassePrescolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassePrescolaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassePrescolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
