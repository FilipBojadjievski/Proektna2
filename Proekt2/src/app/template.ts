export interface comment {
  poster: String;
  content: String;
}
export interface post {
  name: String;
  poster: String;
  balance: number;
  comments: comment[];
}
