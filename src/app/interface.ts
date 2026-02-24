export interface Post {
  title?: string;
  id?: string;
  excerpt?: string;
  image?: string;
  author?: string;
  date?: string;
  link?: string;  
}

export default interface ContentAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}
