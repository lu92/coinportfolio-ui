import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPanelComponentComponent } from './coin-panel-component.component';

describe('CoinPanelComponentComponent', () => {
  let component: CoinPanelComponentComponent;
  let fixture: ComponentFixture<CoinPanelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPanelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
