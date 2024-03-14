import { NextRequest, NextResponse } from "next/server";


const PRIVATE_PATHS={
    HOME:"/dashboard"
 }
 
 const PUBLIC_PATHS={
    SIGNIN:"/signin",
    MAIN:"/"
 }
 
 
 const ROUTES={
     ...PRIVATE_PATHS,
     ...PUBLIC_PATHS
     
 }

 declare global {
    interface Object {
      isPublicPath(path: string): boolean;
      isPrivatePath(path: string): boolean;
    }
  }
  

 
 Object.prototype.isPublicPath = function(path:string) {
     return Object.values(this).includes(path);
   };

   Object.prototype.isPrivatePath = function(path:string) {
    return Object.values(this).includes(path);
  };
   

export function middleware(request:NextRequest){
    const session=request.cookies.get("next-auth.session-token")
    const pathname=request.nextUrl.pathname
    console.log(PUBLIC_PATHS.isPublicPath(pathname));
    
    if(PUBLIC_PATHS.isPublicPath(pathname) && session !==undefined && session.value ){
        return NextResponse.redirect(new URL('/', request.url))
    }
    if(session==undefined && PRIVATE_PATHS.isPrivatePath(pathname) ){
        return NextResponse.redirect(new URL('/signin', request.url))
    }
    return NextResponse.next()
}
export const config={
    matcher:["/dashboard","/signin"]
}




