import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablaPreciosComponent } from './tablaPrecios/tabla-precios.component';
import { PromoComponent } from './promo/promo.component';
import { SnickersOriginalComponent } from './snickers/snickers-original.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,BannerComponent,NavbarComponent,TablaPreciosComponent,PromoComponent,SnickersOriginalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
