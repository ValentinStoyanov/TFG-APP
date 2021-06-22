import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistoricoService } from './historico.service';



describe('HistoricoService', () => {

    let httpTestingController: HttpTestingController;
    let service: HistoricoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule,HistoricoService]
        });
     
        httpTestingController = TestBed.get(HttpTestingController);
     
        service = TestBed.get(HistoricoService);
      });
     
      afterEach(() => {
        httpTestingController.verify();
      });



      it('should return an error when the server returns a 404', (done: DoneFn) => {
        const errorResponse = new HttpErrorResponse({
          error: 'test 404 error',
          status: 404, statusText: 'Not Found'
        });
    
       // httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    
        service.report1().subscribe(
          () => done.fail('expected an error, not heroes'),
            (          error: { message: any; })  => {
            expect(error.message).toContain('test 404 error');
            done();
          }
        );
      });
    

  });