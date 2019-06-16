import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesModule } from "./services/services.module";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, ServicesModule, MaterialModule],
  exports: [MaterialModule]
})
export class SharedModule {}
