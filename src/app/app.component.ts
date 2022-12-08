import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  AppName:string = 'Estudando componentes';

  constructor(private router: Router) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Accordion', action: () => this.router.navigate(['accordion']) },
    { label: 'Avatar', action: () => this.router.navigate(['avatar']) },
    { label: 'Breadcrumb', action: () => this.router.navigate(['breadcrumb']) },
  ];

}
