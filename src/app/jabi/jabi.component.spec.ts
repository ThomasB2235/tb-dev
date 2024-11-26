import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JabiComponent } from './jabi.component';

describe('JabiComponent', () => {
  let component: JabiComponent;
  let fixture: ComponentFixture<JabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JabiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
