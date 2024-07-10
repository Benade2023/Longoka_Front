import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreClasseComponent } from './autre-classe.component';

describe('AutreClasseComponent', () => {
  let component: AutreClasseComponent;
  let fixture: ComponentFixture<AutreClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutreClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutreClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
