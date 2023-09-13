interface Base<T> {
  id: string;
  type: string;
  attributes: T;
}

interface UserAttributes {
  first_name: string;
  middle_name: string;
  last_name: string;
  language: string;
}

export type UserData = Base<UserAttributes>;
