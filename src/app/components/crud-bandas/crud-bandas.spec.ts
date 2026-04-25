import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBandasComponent } from './crud-bandas.component';

describe('CrudBandas', () => {
  let component: CrudBandasComponent;
  let fixture: ComponentFixture<CrudBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudBandasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudBandasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
