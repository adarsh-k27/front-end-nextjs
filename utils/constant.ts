const PRIVATE_PATHS={
    HOME:"/dashboard",
    NEW_PROJECT:"new-project"
 }
 
 const PUBLIC_PATHS={
    SIGNIN:"/signin",
    MAIN:"/"
 }
 
 
 export const ROUTES={
     ...PRIVATE_PATHS,
     ...PUBLIC_PATHS
     
 }


 export const API_SERVICE_BASEURL="http://localhost:5000"