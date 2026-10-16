import { Component, input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {

  slides = input<any[]>([]);

  currentSlide = 0;

  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide++;

    if (this.currentSlide >= this.slides().length) {
      this.currentSlide = 0;
    }
  }

  previousSlide() {
    this.currentSlide--;

    if (this.currentSlide < 0) {
      this.currentSlide = this.slides().length - 1;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}