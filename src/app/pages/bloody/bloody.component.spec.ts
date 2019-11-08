import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodyComponent } from './bloody.component';

describe('BloodyComponent', () => {
  let component: BloodyComponent;
  let fixture: ComponentFixture<BloodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
