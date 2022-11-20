import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExampleTwoComponent } from './service-example-two.component';

describe('ServiceExampleTwoComponent', () => {
  let component: ServiceExampleTwoComponent;
  let fixture: ComponentFixture<ServiceExampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExampleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
