import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  images: any[] = [
    {
      itemImageSrc: '/assets/home/image/bg-image.png',
      thumbnailImageSrc: '/assets/home/image/bg-image.png',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: '/assets/home/image/bg-image.png',
      thumbnailImageSrc: '/assets/home/image/bg-image.png',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: '/assets/home/image/bg-image.png',
      thumbnailImageSrc: '/assets/home/image/bg-image.png',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: '/assets/home/image/bg-image.png',
      thumbnailImageSrc: '/assets/home/image/bg-image.png',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

}
