# For use all functionalities of challenge_microservices_visual_entertainament, you need register and login.

### Register User
```
POST http://34.125.242.171:8000/user/register
Content-Type: application/json

{
    "name":"Francisco Sponton",
    "email":"fransponton.com@gmail.com",
    "password":"123456",
    "gender":"Male"
}
```

### Login User - Return token for others requests
```
POST http://34.125.242.171:8000/user/login
Content-Type: application/json

{
    "email":"fransponton@gmail.com",
    "password":"123456"
}
```

## You need first create an actor and director after that, create an movie or tv show.

### POST - create object of any entity, it's polimorfic

### Erros catched:
*  missing prop on form, return info with props required   (For example: when create a movie o tv show without title or an actor o dicrector without name)
*  missing value on prop in form (For example: when create an object of any entity with value null or "")
*  error prop of any entity (For example: when you try create an actor or director with prop "nameee" )


### Create an Actor
```
POST  http://34.125.242.171:8000/actor/create
Content-Type: application/json
Authorization: bearer token_logged

{
    "name":"Leonardo Di Caprio",
    "birth_year":"1974",
    "gender":"Male"
}
```
### Create an Director
```
POST  http://34.125.242.171:8000/director/create
Content-Type: application/json
Authorization: bearer token_logged

{
    "name":"Christopher Nolan",
    "birth_year":"1970"
}
```


#### Create a movie with id of any actors and id director
```
POST  http://34.125.242.171:8000/movie/create
Content-Type: application/json
Authorization: bearer token_logged

{
    "title":"Inception",
    "release":"2010",
    "language":"Eng",
    "genres":["Sci-Fi","Adventure", "Action", "Thriller"],
    "id_actors":["id_of_Leonardo_Di_Caprio","another_id_of_any_actor"],
    "id_director": "id_of_Christopher_Nolan"
}
```

#### Create a tv show with id of any actors and id director
```
POST  http://34.125.242.171:8000/tvshow/create
Content-Type: application/json
Authorization: bearer token_logged
{
    "title":"Friends",
    "release":"1994",
    "language":"Eng",
    "seasons":10,
    "genres":["Romance","Comedy"],
    "id_actors":["id_of_any_actor_before_created","another_id_of_any_actor_before_created"],
    "id_director": "id_of_David_Crame_before_created"
}
```

## GETTER'S

### GET List of any entity 
### http://34.125.242.171:8000/```actor``` or ```movie``` or ```director``` or ```tvshow```

### For Example
```
GET http://34.125.242.171:8000/actor/
Content-Type: application/json
Authorization: bearer token_logged
```

### For Example
### GET Sorted list by any PROP - ASC OR DESC 
```
GET http://34.125.242.171:8000/actor/sort?prop=birth_year&shape=-1
Content-Type: application/json
Authorization: bearer token_logged
```
### For Example
### GET object of any entity by id
```
GET http://34.125.242.171:8000/actor/647f768c98386d0a0056f62
Content-Type: application/json
Authorization: bearer token_logged
```

