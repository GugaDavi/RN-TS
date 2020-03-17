export interface IUser {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
}

export interface IRepoStar {
  id: number;
  name: string;
  owner: IOwnerRepoStar;
  html_url: string;
}

export interface IOwnerRepoStar {
  avatar_url: string;
  login: string;
}
