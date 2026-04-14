import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit with empty form', () => {
    component.submit();
    expect(component.sent()).toBeFalse();
  });

  it('should submit with valid form', () => {
    component.form.nom = 'Jean';
    component.form.email = 'jean@test.com';
    component.form.message = 'Bonjour';
    component.submit();
    expect(component.sent()).toBeTrue();
  });
});
