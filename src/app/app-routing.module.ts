import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployersClassComponent } from "./components/employers-class/employers-class.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomePageComponent },
  { path: "employers-class", component: EmployersClassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
