import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarquesComponent } from './marques.component';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MarquesComponent', () => {
  let component: MarquesComponent;
  let fixture: ComponentFixture<MarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarquesComponent],
      providers: [provideRouter([]), provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(MarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no selected marque initially', () => {
    expect(component.selectedMarque()).toBeNull();
  });
});
