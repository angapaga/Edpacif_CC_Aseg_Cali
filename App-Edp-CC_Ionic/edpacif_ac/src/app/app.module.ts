import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule,
            HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
