import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  employees = [
    {
      id: 1,
      name: 'Akshay Patel',
      imageUrl: 'https://picsum.photos/200'
    },
    {
      id: 2,
      name: 'Panth Patel',
      imageUrl: 'https://picsum.photos/200'
    }
  ];
}
