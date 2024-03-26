import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { API_SERVER } from '@/API/config'
import axios from "axios";
import jwt from 'jsonwebtoken'


export const authOptions: NextAuthOptions = {
  //set providers here
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SCECRET ?? "",
    }),
  ],
  
  pages: {
    signIn: "/signin", //sigin page

  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt:{
    //secret:process.env.NEXTAUTH_SECRET,
    async encode(params) {
      
      const JWT_TOKEN =await jwt.sign({user:params.token!.user},params.secret)
      console.log('====================================');
      console.log(JWT_TOKEN);
      console.log('====================================');
      return JWT_TOKEN
    },
    async decode( {
      token,
      secret,
    }) {
       let decodedToken= await jwt.verify(token!,secret)
       console.log('====================================');
       console.log(decodedToken);
       console.log('====================================');
       return decodedToken
    },
  
  
  },
  //set callback here
  
  callbacks: {
    async signIn({ user, account, profile, }) {
      // here we need to add a function for adding user into Database from Api server
      
      const structuredProfile = {
        avatar_url: profile!.avatar_url,
        repos_url: profile?.repos_url,
        type: profile?.type.toUpperCase(),
        name: profile?.name,
        email: profile?.email
      }
      try {
        const res = await axios.post(`${API_SERVER}/login`, structuredProfile)
        const user = res.data.user
        return user
      } catch (error) {
        console.log("error calling", error);
        return false
      }

    },
    //for creating token including Database details
    async jwt({ token, profile, user, session, account, trigger }) {
      if (user || account) {
        
        const params: { email: string | undefined | null } = { email: user.email }
        const userDetails = await axios.get(`${API_SERVER}/user`, { params })
        let data = userDetails.data.user
        let accessToken=userDetails.data.access_token
        token.user = data
        token.access_token=accessToken
        return token;
      }
      return token;
    },
    
    //for create session including token details this session stored as cookie 
    async session({ token, session, user, newSession, trigger }) {

      console.log("user", user, token, session);

      if (token.user) {
        // session.user.id=user.id
        session.user=token.user
        return session;
      }
      return session
    },
    
  },
  
  


};