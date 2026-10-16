import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { SubHeader } from '../../shared/sub-header/sub-header';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, SubHeader],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
