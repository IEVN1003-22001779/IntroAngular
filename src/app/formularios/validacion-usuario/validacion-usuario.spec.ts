import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidacionUsuario } from './validacion-usuario';

describe('ValidacionUsuario', () => {
  let component: ValidacionUsuario;
  let fixture: ComponentFixture<ValidacionUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidacionUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidacionUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
