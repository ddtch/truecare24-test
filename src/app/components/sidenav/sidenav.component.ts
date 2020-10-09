import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public navItems = [
    {
      title: 'Dashboard',
      icon: 'Dashboard',
      link: 'dashboard',
    },
    {
      title: 'FAQ',
      icon: 'FAQ',
      link: '',
    },
    {
      title: 'Sign out',
      icon: 'Sign-out',
      link: '',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
