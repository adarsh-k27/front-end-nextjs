import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { use } from "react";


console.log("Credentials",process.env.GITHUB_CLIENT_ID);

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SCECRET ?? "",
      
    }),
  ],
  
  pages: {
    signIn: "/signin", //sigin page
  },
  callbacks:{
    async session({session,user,token}){
      
      console.log("user",user);
      
      if(session.user){
        session.user.id=user.id

      }
      return session
    },
    async signIn({user,account,profile})  {
       console.log("user",user,profile,account);
       //user contains details like eail,id,name,image
       // here we need to add a function for adding user into Database from Api server
       
       
      // Save user details to the database when a user signs in
      
      return true
    },
  
    

    
   },
  debug:true,
  session:{
    strategy:"jwt"
  }
  
};