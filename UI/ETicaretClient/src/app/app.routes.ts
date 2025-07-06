import { Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { CustomerModule } from './admin/components/customer/customer.module';
import { ProductsModule } from './admin/components/products/products.module';
import { DashboardModule } from './admin/components/dashboard/dashboard.module';
import { OrderModule } from './admin/components/order/order.module';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

export const routes: Routes = [
    {path : "admin" , component : LayoutComponent, children : [
        {path: "" , component: DashboardComponent }, //admin main page routing
        {
            path : "customer", loadChildren : () => import("./admin/components/customer/customer.module").then
            (module => CustomerModule)
        },
        {
            path : "products", loadChildren : () => import("./admin/components/products/products.module").then
            (module => ProductsModule)
        },
        {
            path : "order", loadChildren : () => import("./admin/components/order/order.module").then
            (module => OrderModule)
        }
    ]},
    
    {path : "", component: HomeComponent}, //main page of application
    {path : "baskets" , loadChildren: () => import("./ui/components/baskets/baskets.module").then
        (module => module.BasketsModule)
    },
    {path : "products" , loadChildren: () => import("./ui/components/products/products.module").then
        (module => module.ProductsModule)
    },
];

