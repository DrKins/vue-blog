export interface Item {
  id: number;
  text: unknown;
  likes: number;
  dislikes: number;
}

export interface StateInterface {
  APIData: Item[];
}
