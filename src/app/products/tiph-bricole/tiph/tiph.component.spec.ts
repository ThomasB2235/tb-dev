import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiphComponent } from './tiph.component';

describe('TiphComponent', () => {
  let component: TiphComponent;
  let fixture: ComponentFixture<TiphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
