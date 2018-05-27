import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplayComponent} from './display.component';
import {DisplayService} from './display.service';
import {By} from '@angular/platform-browser';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;
  let displayService: Partial<DisplayService>;

  beforeEach(async(() => {
    displayService = {
      grid: () => [[false, false], [false, true]]
    };
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
      providers: [{provide: DisplayService, useValue: displayService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should mark truthful cells black', () => {
    const cells = fixture.debugElement.queryAll(By.css('td.black'));
    expect(cells.length).toBe(1);
  });
});
