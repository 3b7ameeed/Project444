import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcPage } from './welc.page';

describe('WelcPage', () => {
  let component: WelcPage;
  let fixture: ComponentFixture<WelcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
