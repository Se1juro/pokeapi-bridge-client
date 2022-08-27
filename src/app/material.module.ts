import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports: [MatToolbarModule, MatPaginatorModule],
})
export class MaterialModule {}
