import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyMyFormComponent } from './ly-my-form.component';

describe('LyMyFormComponent', () => {
  let component: LyMyFormComponent;
  let fixture: ComponentFixture<LyMyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyMyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyMyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
