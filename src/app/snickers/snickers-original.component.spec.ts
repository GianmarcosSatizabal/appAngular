import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnickersOriginalComponent } from './snickers-original.component';

describe('SnickersOriginalComponent', () => {
  let component: SnickersOriginalComponent;
  let fixture: ComponentFixture<SnickersOriginalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnickersOriginalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnickersOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
