import { createContext } from 'react';
import { SessionInterface } from './';
import { exampleUser, User } from 'fashionkilla-interfaces';

export const SessionContext = createContext<SessionInterface>({
  setStore: () => {},
  login: async (username: string, password: string) => exampleUser,
  logout: () => {},
  forceStart: (user: User) => {},
});
