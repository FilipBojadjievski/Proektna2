export interface comment {
  poster: String;
  content: String;
}
export interface Blog {
  poster: string;
  title: string;
  content: string;
}
export interface post {
  name: String;
  poster: String;
  balance: number;
  comments: comment[];
}
