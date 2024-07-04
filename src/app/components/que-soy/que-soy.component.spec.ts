import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueSoyComponent } from './que-soy.component';

describe('QueSoyComponent', () => {
  let component: QueSoyComponent;
  let fixture: ComponentFixture<QueSoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueSoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueSoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
