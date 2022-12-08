import { PoBreadcrumbItem } from '@po-ui/ng-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  favorite = 'http://localhost:4200';

  service = { isFavorite: false, url: "/example" };

  items: Array<PoBreadcrumbItem> = [
    {label:'Accordion',link:'accordion',action: () => {alert('accordion')} },
    {label:'Avatar',link:'avatar',action: () => {alert('avatar')} }
  ]
  constructor() {}

  ngOnInit(): void {}
}
