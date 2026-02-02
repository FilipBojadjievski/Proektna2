import { Component, Input } from '@angular/core';
import { Blog } from '../template';
import { timeLog } from 'console';
import { BlogsComponent } from '../blogs/blogs.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [BlogsComponent, NgFor, NgIf],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input()
  name: string = 'Anonymus';
  todisplay: number = 0;
  increase(a: HTMLElement) {
    this.todisplay += 1;
    this.todisplay %= this.posts.length;
    a.scrollIntoView({ behavior: 'smooth' });
  }
  decrease(a: HTMLElement) {
    this.todisplay -= 1;
    this.todisplay += this.posts.length;
    this.todisplay %= this.posts.length;
    a.scrollIntoView({ behavior: 'smooth' });
  }
  view(i: number) {
    if (i != this.todisplay) {
      return 'none';
    } else {
      return '';
    }
  }
  posts: Blog[] = [
    {
      poster: 'Dzoni',
      title: 'One day Blog',
      content: `A Perfect Day in Zürich
        
          Zürich, Switzerland’s largest city, combines old-world charm with
          modern style. Even with only one day, you can experience its culture,
          scenery, and great food within walking distance or a short tram ride.
        

        Morning: Explore the Old Town
        
          Begin in Altstadt (Old Town), wandering its cobblestone streets
          lined with colorful buildings and cafés. Visit Grossmünster for
          city views, then cross the Limmat River to see
          Fraumünster and its famous Chagall windows. Stop by
          Café Schober for a coffee and pastry before moving on.
        

        Midday: Relax by the Lake
        
          Walk along Lake Zürich from Bürkliplatz or take a short
          boat cruise for mountain views. If it’s warm, join locals swimming by
          the promenade. For lunch, enjoy lakeside dining at
          Fischer’s Fritz.
        

        Afternoon: Art and Chocolate
        
          Ride the Polybahn to the ETH terrace for a panoramic
          city view, then visit the Kunsthaus Zürich to see works by
          Monet and Giacometti. Finish with a visit to Läderach or
          Sprüngli for some world-class Swiss chocolate.
        

        Evening: Modern Zürich
        
          Have dinner in the Zürich-West district, known for its creative
          restaurants and industrial charm. Try Frau Gerolds Garten for a
          relaxed atmosphere before ending your day with a quiet walk along the
          Limmatquai.
        

        Final Thoughts
        
          One day in Zürich is enough to capture its elegance, history, and
          lakeside beauty — a perfect taste of Switzerland’s charm.
        `,
    },
  ];
  post(title: HTMLInputElement, content: HTMLTextAreaElement) {
    if (title.value == '' || content.value == '') {
      return;
    }
    let temp: Blog = {
      poster: this.name,
      title: title.value,
      content: content.value,
    };
    this.posts.push(temp);
    title.value = '';
    content.value = '';
    this.todisplay = this.posts.length - 1;
  }
  deletePost(id: number) {
    this.posts?.splice(id, 1);
    if (this.todisplay > this?.posts.length - 1) {
      this.todisplay = this?.posts.length - 1;
    }
  }
}
