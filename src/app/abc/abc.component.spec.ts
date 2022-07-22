import { ComponentFixture, TestBed } from '@angular/core/testing';

import { abcComponent } from './abc.component';

describe('XyzComponent', () => {
  let component: abcComponent;
  let fixture: ComponentFixture<abcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ abcComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(abcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
