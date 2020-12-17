import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComPage } from './com.page';

describe('ComPage', () => {
  let component: ComPage;
  let fixture: ComponentFixture<ComPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
