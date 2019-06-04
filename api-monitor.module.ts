import { NgModule } from '@angular/core';
import { AdminToolsCommonModule } from '../common/admin-tools-common.module';
import { ApiMonitorComponent } from './api-monitor.component';
import { ApiMonitorService } from './api-monitor.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    AdminToolsCommonModule, CarouselModule.forRoot()
  ],
  declarations: [
    ApiMonitorComponent,
  ],
  exports: [
    ApiMonitorComponent,
  ],
  providers: [
    ApiMonitorService,
  ]
})
export class ApiMonitorModule {
}
