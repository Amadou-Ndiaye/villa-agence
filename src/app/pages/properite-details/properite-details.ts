import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Properties } from '../../shared/properties/properties';
import { BestDeal } from '../../shared/best-deal/best-deal';


@Component({
  selector: 'app-properite-page',
  imports: [BestDeal],
  templateUrl: './properite-details.html',
  styleUrl: './properite-details.css',
})
export class ProperiteDetails {

  properties = [
    {
      id: 1,
      image: 'assets/images/property-01.jpg',
      title: 'Villa moderne à Dakar',
      description: 'Une magnifique villa moderne située dans un quartier calme de Dakar.'
    },

    {
      id: 2,
      image: 'assets/images/property-02.jpg',
      title: 'Villa de luxe aux Almadies',
      description: 'Une villa élégante avec des espaces modernes et confortables.'
    },

    {
      id: 3,
      image: 'assets/images/property-03.jpg',
      title: 'Maison familiale à Saly',
      description: 'Une belle maison idéale pour une famille, proche de la plage.'
    },

    {
      id: 4,
      image: 'assets/images/property-04.jpg',
      title: 'Appartement moderne',
      description: 'Un appartement moderne offrant un cadre de vie confortable.'
    },

    {
      id: 5,
      image: 'assets/images/property-05.jpg',
      title: 'Penthouse avec vue',
      description: 'Un magnifique penthouse avec une vue exceptionnelle sur la ville.'
    },

    {
      id: 6,
      image: 'assets/images/property-06.jpg',
      title: 'Villa contemporaine',
      description: 'Une villa contemporaine avec un design élégant et moderne.'
    }
  ];

}