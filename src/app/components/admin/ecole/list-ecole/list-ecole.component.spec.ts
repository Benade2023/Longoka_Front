import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEcoleComponent } from './list-ecole.component';

describe('ListEcoleComponent', () => {
  let component: ListEcoleComponent;
  let fixture: ComponentFixture<ListEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEcoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});