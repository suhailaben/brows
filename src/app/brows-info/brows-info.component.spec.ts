import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsInfoComponent } from './brows-info.component';

describe('BrowsInfoComponent', () => {
  let component: BrowsInfoComponent;
  let fixture: ComponentFixture<BrowsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
