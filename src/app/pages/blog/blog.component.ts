import { Component, OnInit } from '@angular/core';

interface SingleBlog {
  image: String,
  title: String,
  time: String
  slog: String
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  
  blogPost: Array<SingleBlog> = [{
      image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80',
      title: 'Another Profitable Canadian cannabis Producer: Greenway GreenHouse Posts',
      time: '12 minutes ago',
      slog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur consequuntur fugit voluptatum enim reiciendis modi quidem beatae praesentium, rerum expedita at dolorum ipsa quaerat odio ut harum asperiores. Possimus?'
    },
    {
      image: 'https://media.istockphoto.com/photos/lagos-nigeria-lekkiikoyi-bridge-lagos-landmark-infrastructure-and-picture-id1129845783?k=20&m=1129845783&s=612x612&w=0&h=lwWik3dZEfDt3yTRVxjX4Vp3v6oakafbyMJvojqFPLU=',
      title: 'Another Profitable Canadian cannabis Producer: Greenway GreenHouse Posts',
      time: '12 minutes ago',
      slog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur consequuntur fugit voluptatum enim reiciendis modi quidem beatae praesentium, rerum expedita at dolorum ipsa quaerat odio ut harum asperiores. Possimus?'
    },
    {
      image: 'https://media.istockphoto.com/photos/beatuful-woman-in-benagil-cave-algarve-portugal-picture-id1287198512?b=1&k=20&m=1287198512&s=170667a&w=0&h=7qwMZyTujLVvSl_biPi7l0ellxHG8s7N9aj1TUhwFJM=',
      title: 'Another Profitable Canadian cannabis Producer: Greenway GreenHouse Posts',
      time: '12 minutes ago',
      slog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur consequuntur fugit voluptatum enim reiciendis modi quidem beatae praesentium, rerum expedita at dolorum ipsa quaerat odio ut harum asperiores. Possimus?'
    },
    {
      image: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
      title: 'Another Profitable Canadian cannabis Producer: Greenway GreenHouse Posts',
      time: '12 minutes ago',
      slog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur consequuntur fugit voluptatum enim reiciendis modi quidem beatae praesentium, rerum expedita at dolorum ipsa quaerat odio ut harum asperiores. Possimus?'
    },
    {
      image: 'https://images.freeimages.com/images/small-previews/338/sunset-over-lake-2-1377767.jpg',
      title: 'Another Profitable Canadian cannabis Producer: Greenway GreenHouse Posts',
      time: '12 minutes ago',
      slog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur consequuntur fugit voluptatum enim reiciendis modi quidem beatae praesentium, rerum expedita at dolorum ipsa quaerat odio ut harum asperiores. Possimus?'
    },
    {
      image: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
      title: 'Another Profitable Canadian cannabis Producer: Greenway GreenHouse Posts',
      time: '12 minutes ago',
      slog: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequatur consequuntur fugit voluptatum enim reiciendis modi quidem beatae praesentium, rerum expedita at dolorum ipsa quaerat odio ut harum asperiores. Possimus?'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
