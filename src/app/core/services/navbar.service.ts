import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private subject = new BehaviorSubject('');
  public title = this.subject.asObservable();

  constructor(
    private router: Router
  ) { 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.subject.next('');
      }
    });
  }

  setTitle(title: string){
    this.subject.next(title);
  }

}
