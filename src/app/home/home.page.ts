

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ip: any;

  constructor(private http: HttpClient) {}
  
  cargarIP(){
    this.http.get('https://api64.ipify.org/?format=json')
    .subscribe((response:any) => {
      this.ip = response.ip;
    })
  }


 
}


