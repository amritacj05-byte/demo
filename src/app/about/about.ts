import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Card } from '../card/card';

@Component({
  selector: 'app-about',
  imports: [Carousel,Card],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  cardData: any[] = [
    {
      id: 1,
      title: "mission",
      Description: "Nature is one of the most beautiful gifts on Earth. It includes mountains, rivers, forests, oceans, plants, animals, and the sky that surrounds us. Nature provides us with fresh air, clean water, food, and a peaceful environment to live in.",
      image: "https://images.pexels.com/photos/30672903/pexels-photo-30672903.jpeg?cs=srgb&dl=pexels-ahmetyuksek-30672903.jpg&fm=jpg"
    },
    {
      id: 2,
      title: "vision",
      Description: "Nature is one of the most beautiful gifts on Earth. It includes mountains, rivers, forests, oceans, plants, animals, and the sky that surrounds us. Nature provides us with fresh air, clean water, food, and a peaceful environment to live in.",
      image: "https://tse4.mm.bing.net/th/id/OIP.9RUSRboMFLCX_1II2we43QHaE7?pid=Api&P=0&h=180"
    },
    {
      id: 3,
      title: "rate",
      Description: "Nature is one of the most beautiful gifts on Earth. It includes mountains, rivers, forests, oceans, plants, animals, and the sky that surrounds us. Nature provides us with fresh air, clean water, food, and a peaceful environment to live in.",
      image: "https://tse4.mm.bing.net/th?id=OIF.V3X%2bSCCZYX8u%2f0UPV%2fJoig&pid=Api&P=0&h=180"
    }
  ]

}