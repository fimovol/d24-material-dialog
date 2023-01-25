import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A21asincronaComponent } from './a21asincrona.component';

describe('A21asincronaComponent', () => {
  let component: A21asincronaComponent;
  let fixture: ComponentFixture<A21asincronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A21asincronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A21asincronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
