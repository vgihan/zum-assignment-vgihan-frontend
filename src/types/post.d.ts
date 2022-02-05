export interface Post extends PostSearch, PostWrite {}
export interface PostSearch {
  id: number;
  date: Date;
  title: string;
  writer: string;
}
export interface PostWrite {
  content: string;
  title: string;
  writer: string;
}
