import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitsComponent } from './fruits.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FruitsComponent', () => {
  let component: FruitsComponent;
  let fixture: ComponentFixture<FruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle selected fruit', () => {
    const fruit = component.fruits()[0];
    component.toggle(fruit);
    expect(component.selected()?.id).toBe(fruit.id);
    component.toggle(fruit);
    expect(component.selected()).toBeNull();
  });
});
