import { ConsultarPessoasComponent } from './../../pessoas/consultar-pessoas/consultar-pessoas.component';
import { InformacaoComponent } from 'app/informacao/informacao/informacao.component';
import { PainelComponent } from '../../painel/painel.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { InformacaoConsultarComponent } from 'app/informacao-consultar/informacao-consultar.component';
import { CadastrarPessoasComponent } from 'app/pessoas/cadastrar-pessoas/cadastrar-pessoas.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
   /* { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
    { path: 'painel',        component: PainelComponent },
    { path: 'informacao/cadastrar',        component: InformacaoComponent },
    { path: 'informacao/cadastrar/:latitude/:longitude',        component: InformacaoComponent },
    { path: 'informacao/cadastrar/:latitude/:longitude/:tipoInformacao',        component: InformacaoComponent },
    { path: 'informacao/editar/:id',        component: InformacaoComponent },
    { path: 'informacao/consultar',        component: InformacaoConsultarComponent },
    { path: 'pessoa/consultar',        component: ConsultarPessoasComponent },
    { path: 'pessoa/cadastrar',        component: CadastrarPessoasComponent },
    { path: 'pessoa/editar/:id',        component: CadastrarPessoasComponent },
   
    
];
