import {NextAuthOptions} from 'next-auth'
declare module 'next-auth' {

    interface Account {
        // Define properties specific to the account object
        // For example:
        provider: string;
        providerId: string;
      }
    
      interface Profile {
        // Define properties specific to the profile object
        // For example:
        name: string;
        email: string;
        image: string;
      }
    
      type User={
        name: string;
        email: string;
        image: string;
        id:String
      }

      interface SignInParams {
        user: User;
        account: Account;
        profile: Profile;
      }
    
      type NextAuthOptions=NextAuthOptions

      function signIn(user:User,account:Account,profile:Profile):Promise<Boolean>


}

