/*
    Craeteed by: Fadi Findakly
    Last Update: Oct. 07, 2020
*/

export interface Content {
  id: number;
  author: string;
  imageUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags?: string[];
}
