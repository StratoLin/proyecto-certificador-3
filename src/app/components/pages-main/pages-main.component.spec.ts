import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesMainComponent } from './pages-main.component';

describe('PagesMainComponent', () => {
  let component: PagesMainComponent;
  let fixture: ComponentFixture<PagesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesMainComponent]
    });
    fixture = TestBed.createComponent(PagesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
