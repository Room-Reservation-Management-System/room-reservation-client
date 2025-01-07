import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { NgZorroAntdModule } from 'src/app/NgZorroAntdModule';


@NgModule({
  declarations: [
    CustomerComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgZorroAntdModule
  ]
})
export class CustomerModule { }
