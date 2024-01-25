import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreemPageComponent } from './full-screem-page.component';

describe('FullScreemPageComponent', () => {
  let component: FullScreemPageComponent;
  let fixture: ComponentFixture<FullScreemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreemPageComponent]
    });
    fixture = TestBed.createComponent(FullScreemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
