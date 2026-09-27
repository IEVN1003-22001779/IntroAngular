import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrianguloPuntos } from './triangulo-puntos';

describe('TrianguloPuntos', () => {
  let component: TrianguloPuntos;
  let fixture: ComponentFixture<TrianguloPuntos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrianguloPuntos],
    }).compileComponents();

    fixture = TestBed.createComponent(TrianguloPuntos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
