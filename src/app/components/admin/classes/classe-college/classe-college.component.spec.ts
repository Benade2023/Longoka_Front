import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseCollegeComponent } from './classe-college.component';

describe('ClasseCollegeComponent', () => {
  let component: ClasseCollegeComponent;
  let fixture: ComponentFixture<ClasseCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseCollegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
