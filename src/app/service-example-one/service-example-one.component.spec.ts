import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExampleOneComponent } from './service-example-one.component';

describe('ServiceExampleOneComponent', () => {
  let component: ServiceExampleOneComponent;
  let fixture: ComponentFixture<ServiceExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExampleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
