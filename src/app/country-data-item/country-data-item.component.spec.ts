import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDataItemComponent } from './country-data-item.component';

describe('CountryDataItemComponent', () => {
  let component: CountryDataItemComponent;
  let fixture: ComponentFixture<CountryDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDataItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
