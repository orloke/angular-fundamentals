import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  posts: string[] =[];

  logar(post: string) {
    console.log(post);
    this.posts.push(post);
  }

  showAllPosts() {
    console.log(this.posts);

  }
}
