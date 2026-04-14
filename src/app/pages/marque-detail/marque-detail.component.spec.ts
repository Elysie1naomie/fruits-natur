import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarqueDetailComponent } from './marque-detail.component';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MarqueDetailComponent', () => {
  let component: MarqueDetailComponent;
  let fixture: ComponentFixture<MarqueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueDetailComponent],
      providers: [provideRouter([]), provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(MarqueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
