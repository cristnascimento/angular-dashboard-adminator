import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterImportsComponent } from './footer-imports.component';

describe('FooterImportsComponent', () => {
  let component: FooterImportsComponent;
  let fixture: ComponentFixture<FooterImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterImportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
