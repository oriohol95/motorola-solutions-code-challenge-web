export type User = {
  id: string;
  name: string;
  email: string;
  country: string;
  region: string;
}

export type UserToUpdate = {
  id: string | null;
  name: string;
  email: string;
  country: string;
  region: string;
}

export type GetUsersFilters = {
  country?: string | null;
  region?: string | null;
  text?: string | null;
  page?: number | null;
  size?: number | null;
}
