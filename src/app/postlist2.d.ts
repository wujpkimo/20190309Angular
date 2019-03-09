export interface PostList2 {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: [];
  description: string;
  author: {
    username: string,
    bio: string,
    image: string,
    following: boolean
  };
  favorited: boolean;
  favoritesCount: number;
}

export class Postlist implements PostList2 {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: [];
  description: string;
  author: {
    username: string,
    bio: string,
    image: string,
    following: boolean
  };
  favorited: boolean;
  favoritesCount: number;
}
