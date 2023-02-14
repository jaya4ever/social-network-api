# social-network-api
Social Network API
## Description
### This is Module 18 challenge which I named social-network-api. This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and Moment.js to format timestamps. The seed data is created using Insomnia.

### This is my GitHub Repo
[GitHub](https://github.com/jaya4ever/social-network-api)

### Here is the Video demonstartion:
[social-network-api.webm](https://user-images.githubusercontent.com/111536082/218639290-b90a0f84-0bb0-45d0-bc9f-94e51565c2c5.webm)

### Here is the Screenshot of when the command to invoke the application is entered, the Mongoose models are synced to the MongoDB database.
![social-network-api1](https://user-images.githubusercontent.com/111536082/218639948-1cdb3839-c71e-490f-8394-5799d8840458.jpeg)
![social-network-api2](https://user-images.githubusercontent.com/111536082/218640001-310e53c0-f472-4cb7-8eae-82e2f5a2e38d.jpeg)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```



## Usage 
### After installation do this following :
* To invoke the application, run npm start.
* When the server is started, the Mongoose models are synched to the MongoDB database.
* Open MongoDB and connect to the MongoDB URI mongodb://localhost:27017. On the list of databases, click on socialDB to see thoughts and users data.
* To create seed data and test the API routes, use Insomnia.


## Technologies Used 
* JavaScript
* Express.js
* Node.js
* MongoDB
* Mongoose
* Insomnia
* Moment.js

## Credits 
* Tutor Jose Lopez
* Instructor and TA's From Northwestern Boot Camp
* MongoDB Documentation 
* Insomania 

## License

  Copyright (c) 2023 [GitHub](https://github.com/jaya4ever)  **Note** This application is under the [MIT](https://MIT-license.org)