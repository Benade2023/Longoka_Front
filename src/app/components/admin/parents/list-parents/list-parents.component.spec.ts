import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParentsComponent } from './list-parents.component';

describe('ListParentsComponent', () => {
  let component: ListParentsComponent;
  let fixture: ComponentFixture<ListParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListParentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
