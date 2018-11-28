import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Observable, interval } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { R3ResolvedDependencyType } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inter = interval(500);
  distancia: number;
  luminosidade: number;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.inter.pipe(
      startWith(0),
      switchMap(() => this.api.getDistance())
    ).subscribe(response => {
      this.distancia = response['distance'];
    });

    this.inter.pipe(
      startWith(0),
      switchMap(() => this.api.getLightness())
    ).subscribe(response => {
      this.luminosidade = response['lightness'];
    });
  }

}
