import { Component, OnDestroy } from '@angular/core';
import { Observable , interval, Subscription} from 'rxjs';
import { retry , take, map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;
  constructor() { 
    
/*
    this.retornaObservable().pipe(
      retry() 
    ).subscribe(
      valor => console.log('Subs: ', valor), 
      error => console.log('Error: ', error), //error
      () => console.log('Obs terminado') //complete
    );
*/

  this.intervalSubs =  this.retornaItervalo().subscribe( console.log)

  }


  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaItervalo(): Observable<number>{

    const interval$ =  interval(100)
                        .pipe(
                          take(100),
                          map( valor => valor + 1),
                          filter( valor => (valor % 2 === 0)? true : false)
                        );
    return interval$;
  }

  retornaObservable(): Observable<number>{
    let i =0;

    return new Observable<number>( observer =>{


      const intervalo = setInterval( () => {
        i++;
       observer.next();

       if( i === 4){
         clearInterval(intervalo);
         observer.complete();
       }

       if( i===2 )
       {
         observer.error('i llego al valor 2');
       }
      }, 1000);

    });

  }


}
