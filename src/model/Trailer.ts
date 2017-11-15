export class Trailer {
  postDate:string;
  url:string;
  type:string;
  exclusive:boolean;
  hd:boolean;

  constructor(postDate: string, url: string, type: string, exclusive: boolean, hd: boolean) {
    this.postDate = postDate;
    this.url = url;
    this.type = type;
    this.exclusive = exclusive;
    this.hd = hd;
  }
}
