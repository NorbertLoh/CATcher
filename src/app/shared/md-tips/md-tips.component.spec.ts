import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdTipsComponent } from './md-tips.component';

describe('MdTipsComponent', () => {
  let component: MdTipsComponent;
  let fixture: ComponentFixture<MdTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdTipsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
