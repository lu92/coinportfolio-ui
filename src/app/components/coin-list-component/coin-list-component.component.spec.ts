import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListComponentComponent } from './coin-list-component.component';

describe('CoinListComponentComponent', () => {
  let component: CoinListComponentComponent;
  let fixture: ComponentFixture<CoinListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
