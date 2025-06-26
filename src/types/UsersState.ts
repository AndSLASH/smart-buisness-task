import type { User } from "./User";

export interface UsersState {
  data: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  loading: boolean;
  error: string | null;
}
