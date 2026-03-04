export interface Post {
  title?: string;
  id?: string;
  excerpt?: string;
  image?: string;
  author?: string;
  date?: string;
  link?: string;

}

export interface Product{
  name: string;
  description: string;
  image: string;
  link?: string;
}

export interface Maker {
  name: string;
  logo: string;
  description: string;
  routerlink?: string;
}


export default interface ContentAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}
