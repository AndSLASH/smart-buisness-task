import type { User } from "../types/User";
import type { UsersState } from "../types/UsersState";
import { getOnlyDigits } from "./getOnlyDigits";

type Filters = UsersState["filters"];

export const filterUsers = (users: User[], filters: Filters): User[] => {
  return users.filter((user) =>
    (Object.entries(filters) as [keyof Filters, string][]).every(
      ([key, value]) => {
        const userValue = user[key] ?? "";

        if (key === "phone") {
          return getOnlyDigits(userValue).includes(getOnlyDigits(value));
        }

        return userValue.toLowerCase().includes(value.toLowerCase());
      },
    ),
  );
};
