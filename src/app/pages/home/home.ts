import { Component } from '@angular/core';

import { Hero } from '../../shared/hero/hero';
import { Featured } from '../../shared/featured/featured';
import { VideoView } from '../../shared/video-view/video-view';
import { FunFacts } from '../../shared/fun-facts/fun-facts';
import { BestDeal } from '../../shared/best-deal/best-deal';
import { Properties } from '../../shared/properties/properties';


@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Featured,
    VideoView,
    FunFacts,
    BestDeal,
    Properties,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  slides = [
    {
      titre: 'Dakar, Sénégal',
      description: 'Trouvez la villa idéale pour vous',
      image: 'assets/images/banner-01.jpg'
    },
    {
      titre: 'Almadies, Dakar',
      description: 'Découvrez des villas exceptionnelles',
      image: 'assets/images/banner-02.jpg'
    },
    {
      titre: 'Saly, Sénégal',
      description: 'Votre prochaine maison de rêve',
      image: 'assets/images/banner-03.jpg'
    }
  ];

}