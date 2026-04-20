import { env } from '../config/env';

export const users = {
  validUser: {
    username: env.username,
    password: env.password
  }
};
