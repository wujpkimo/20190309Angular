export interface PostList2 {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: [];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

