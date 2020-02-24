# Node-Express-Boilerplate

Back end repository for: ""

Base url: ""

## API Routes

## Authentication Endpoints:

Register a new user:

POST /api/auth/register

Required fields: username, password, first_name, last_name, email

Optional Fields: profile_image_url

Expected Request Body:
```
{
  "username": "user1",
  "password": "password", 
  "first_name": "Patrick", 
  "last_name": "Replogle", 
  "email": "user1@gmail.com",
  "profile_image_url": "http://www.image_url.com"
}
```

Returns:
```
{
    "new_user": {
        "id": 1,
        "username": "user1",
        "password": "$2a$10$kJw66/2Yb1xnUIczPAXIze5hiyjCnxTebH1oGukuxWeYvVp8aRrMG",
        "first_name": "Patrick",
        "last_name": "Replogle",
        "email": "user1@email.com",
        "profile_image_url": "http://www.image_url.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjQsInVzZXJuYW1lIjoiRGVtbzUiLCJpYXQiOjE1NzY4MDg1OTgsImV4cCI6MTU3NjgxMjE5OH0.PCNRX9Wn16kFBrTDNdQtHlyqs8BbiLxvAXvJHXDokzM"
}
```

Login user endpoint:

POST /api/auth/login

Expected Request Body:
```
{
  "username": "user1",
  "password": "password"
}
```

Returns:
```
{
    "id": 1,
    "username": "user1",
    "message": "Welcome user1!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU4MjU2NTg1NSwiZXhwIjoxNTgzMTcwNjU1fQ.co-vWFadM3IbKznIUVsbyZkOqv7A1h1evS4jIsGpokA"
}
```

## User Endpoints

Update user -Logged in user can only update their own account-

PUT /api/users/:id

```
{
  "username": "user1-edited",
  "password": "password", 
  "first_name": "Patrick", 
  "last_name": "Replogle", 
  "email": "user1@gmail.com",
  "profile_image_url": "http://www.image_url.com"
}
```

Returns:

```
{
  "username": "user1-edited",
  "password": "password", 
  "first_name": "Patrick", 
  "last_name": "Replogle", 
  "email": "user1@gmail.com",
  "profile_image_url": "http://www.image_url.com"
}
```
Delete user -Logged in user can only delete their own account-:

DELETE /api/users/:id

Returns:

```
 1
```






