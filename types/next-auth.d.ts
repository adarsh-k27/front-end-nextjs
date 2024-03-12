import { NextAuthOptions } from 'next-auth'
declare module 'next-auth' {

  interface Account {
    // Define properties specific to the account object
    // For example:
    provider: string;
    providerId: string;
  }

  export interface Profile {
    // Define properties specific to the profile object
    // For example:
    name: string;
    email: string;
    image: string;
    avatar_url: string;
    repos_url: string;
    type: string;
  }

  type User = {
    name: string;
    email: string;
    image: string;
    id: String
  }

  interface SignInParams {
    user: User;
    account: Account;
    profile: Profile;
  }

  type NextAuthOptions = NextAuthOptions

  function signIn(user: User, account: Account, profile: Profile): Promise<Boolean>

  export const { Profile, User, Account, NextAuthOptions, signIn }
}


declare module "next-auth/jwt" {
  export interface JWT {
    access_token: string,
    user: {
      name: string;
      email: string;
      image: string;
      avatar_url: string;
      repos_url: string;
      type: string;
    }
  }
}

