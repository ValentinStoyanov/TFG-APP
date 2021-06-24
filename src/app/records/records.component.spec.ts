import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RecordsComponent } from './records.component';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('close() should change showMe', (done) => {

    const comp = new RecordsComponent();
    
    comp.showMe = true

    expect(comp.showMe).toBe(true)

    comp.close()

    expect(comp.showMe).toBe(false)

    done();

  });


  it('not valid storage item', (done) => {

    const comp = new RecordsComponent();

    var name: string = "";

    comp.execute_report(name)

    expect(comp.showMe).toBe(false)
    expect(comp.showMeNow).toBe(true)

    done();
  

  });


  it('valid storage item', (done) => {

    const comp = new RecordsComponent();

    localStorage.setItem("Test report R2",JSON.stringify({
      "ecu": "43",
      "percentage": "0.8683099669736007"
    }))

    comp.execute_report("Test report R2")

    expect(comp.showMe).toBe(true)
    expect(comp.showMeNow).toBe(false)

    done();
  

  });


  it('delete storage item', (done) => {

    const comp = new RecordsComponent();

    comp.reloadPage = function() { };

    localStorage.setItem("Test report R2",JSON.stringify({
      "ecu": "43",
      "percentage": "0.8683099669736007"
    }))

    
    expect(comp.delete("Test report R2")).toBe(true)

    done();
  

  });


  it('delete storage item does not exist', (done) => {

    const comp = new RecordsComponent();

    comp.reloadPage = function() { };

    
    expect(comp.delete("")).toBe(false)

    done();
  

  });


});
