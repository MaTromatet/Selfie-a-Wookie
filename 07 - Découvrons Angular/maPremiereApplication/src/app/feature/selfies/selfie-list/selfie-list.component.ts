import { Component, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css'],
})
export class SelfieListComponent implements OnInit {
  lesSelfies: Selfie[] = [
    {
      image:
        'https://www.theriderpost.com/wp-content/uploads/2016/06/896e3e36d885874856df151425f1ce5484412952-1.jpeg',
      wookie: { nom: 'Chewie', selfies: [] },
      titre: 'titre : un super selfie',
    },
    {
      image: 'http://www.groomlidays.com/wp-content/uploads/2016/07/Wookie.jpg',
      wookie: { nom: 'Chewie 2', selfies: [] },
      titre: 'titre : encore un autre',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
