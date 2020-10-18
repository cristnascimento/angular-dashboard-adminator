import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImportsComponent } from './header-imports.component';

describe('HeaderImportsComponent', () => {
  let component: HeaderImportsComponent;
  let fixture: ComponentFixture<HeaderImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderImportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
