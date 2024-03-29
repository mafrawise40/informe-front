import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
//MENU LATERAL
export const ROUTES: RouteInfo[] = [
   /* { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },*/
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },

    { path: '/painel', title: 'Painel',  icon:'', class: '' },
    //{ path: '/informacao/cadastrar', title: 'Informação Incluir',  icon:'', class: '' },
    //{ path: '/informacao', title: 'Informações',  icon:'', class: '' },
    { path: '/informacao/consultar', title: 'Informações',  icon:'', class: '' },
    { path: '/pessoa/consultar', title: 'Pessoas',  icon:'', class: '' },
    { path: '/veiculo/consultar', title: 'Veículos',  icon:'', class: '' },
    //{ path: '/veiculo/cadastrar', title: 'Veículos - Cadastrar',  icon:'', class: '' },
    { path: '/arquivo/galeria', title: 'Galeria de Fotos',  icon:'', class: '' },
    { path: '/relatorio/informacao', title: 'Relatorio de Informação',  icon:'', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
