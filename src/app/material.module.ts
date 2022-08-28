import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [MatToolbarModule, MatPaginatorModule, MatInputModule],
})
export class MaterialModule {}
