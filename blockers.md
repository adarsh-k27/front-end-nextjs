# AUTHENTICATION

1. for signin i need to create a clientid and client scecret for Github 
    created fronm github/setting/developer 
2. the create a new application and generate client scecret 
3. there in github redirect Url we need to pass like => http://localhost:4000/api/auth/callback/github then only it will work 
4. we need to pass redirectUrl in signIn function 



# Session Creation Is Not Happening.
1.resoleved by adding secret in authOptions and its worked fine . (2-3 hours take to test It)

# session cookis not getting parsed from backend

1. for passing cookie in header we need to add with credential as true
2. This is not getting parsing because we are not creating JWT token we are creating JWE (Encrypted Sssion)
3. for Encoding and decoding JWT token we have encode and decode function in JWT opyion in next auth use that and create JWT token with            jsonwebtoken library 




