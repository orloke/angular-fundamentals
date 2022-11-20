import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './First-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderListComponent } from './render-list/render-list.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { FatherComponentComponent } from './father-component/father-component.component';
import { SonComponentComponent } from './son-component/son-component.component';
import { ServiceExampleOneComponent } from './service-example-one/service-example-one.component';
import { ServiceExampleTwoComponent } from './service-example-two/service-example-two.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleFatherComponent } from './life-cycle-father/life-cycle-father.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderListComponent,
    CustomComponentComponent,
    FatherComponentComponent,
    SonComponentComponent,
    ServiceExampleOneComponent,
    ServiceExampleTwoComponent,
    LifeCycleComponent,
    LifeCycleFatherComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
