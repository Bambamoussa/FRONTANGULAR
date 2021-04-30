import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../poke-apiservice';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  @Input()
  Details!: PokeAPIService;

  constructor(private PokeShare:PokeShareInfoService) { }

  ngOnInit(): void {
   console.log( this.PokeShare.getValue())
  }

}
