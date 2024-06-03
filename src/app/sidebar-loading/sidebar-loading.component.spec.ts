import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLoadingComponent } from './sidebar-loading.component';

describe('SidebarLoadingComponent', () => {
  let component: SidebarLoadingComponent;
  let fixture: ComponentFixture<SidebarLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
