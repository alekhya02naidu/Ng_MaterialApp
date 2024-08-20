import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthComponent } from './features/pages/auth/auth.component';
import { Dashboard1Component } from './features/pages/dashboard1/dashboard1.component';

export const routes: Routes = [
    { path: 'main', component: MainLayoutComponent, 
        children: [
            { path: 'dashboard1', component: Dashboard1Component }
        ]
    },
    { path: 'login', component: AuthComponent, data: { mode: 'login' } },
    { path: 'register', component: AuthComponent, data: { mode: 'register' } },
    { path: '', redirectTo: '/main/dashboard1', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
