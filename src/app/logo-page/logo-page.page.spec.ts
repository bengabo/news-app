import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogoPagePage } from './logo-page.page';

describe('LogoPagePage', () => {
  let component: LogoPagePage;
  let fixture: ComponentFixture<LogoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
