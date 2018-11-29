import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { state } from '@angular/animations';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() suffix = '';
  @Input() type = 0;
  checked = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  toggleLed() {
    this.apiService.toggleLed().subscribe();
  }

}
