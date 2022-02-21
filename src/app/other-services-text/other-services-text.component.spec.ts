import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServicesTextComponent } from './other-services-text.component';

describe('OtherServicesTextComponent', () => {
  let component: OtherServicesTextComponent;
  let fixture: ComponentFixture<OtherServicesTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherServicesTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherServicesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
