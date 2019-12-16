# CampLinks - Share and prepare for your next trip!

## Introduction

This project is to build a campground information sharing app. Users can scan detailed description of campgrounds on the website, including photos, introduction articles, location(shown with Google map), users’ comments and overall rating score. In addition, users can post new campgrounds to the community or give their own comments and ratings to other campgrounds when you signed in your account.

## Live DEMO
https://camplinks-web2560-v2.glitch.me

## Technical Architecture

#### 1.1 Front End

- HTML5

- CSS

- Bootstrap

- Javascript

- Session

- EJS template

- Responsive Design

#### 1.2 Back End

- Express.js

- MongoDB Atlas/mongoose

- Passport

- REST API

- Session

#### 1.3 MVC Architecture

##### Model

Our application runs with collections in database. We use mongoose to connect the application with MongoDB atlas. Every model in the database represent respective schema in the database.

##### View

Using EJS template we are displaying our application and simultaneously transferring data to our database depending upon the functions. We also used bootstrap and CSS for our view architecture.

##### Controller

We have created multiple and specific routes for various pages in our application. Various control functionalities have been implemented in the entire project.

#### 1.4 Additional

- Google Map integreted, showing the geolocation of the campground in the Google map interface with a marker.

## Challenges

We would say that the entire project was quite a challenge for our team. It is complicated for us to design unique CSS style to fit our website's style rather than using too much bootstrap.

Since our application has various operations we had to use plenty of routes which was challenging, as the quantities of routes implemented increased, it made our work even more complicated and confusing.

## Future Work

We would like to add more functionality in website like following some authors, the "like" button, replying comments and so on.

For different types of campgrounds, there will be different campers. Hence, grouping campers with the similar choice will help campers make wonderful trips.

Finally, we are planning to have our own website to better serve campers all over the world.

## Conclusion

The course INFSCI 2560 is really a big fortune for us. The dense information and knowledge are beyond our expectation. We learn the architecture and developing cycle of web applications from shallow to deep which is extremely practical to our future career.

Now we have a clearer picture of both front-end and backend development. For the front-end, we gain the useful skills to design the interface with three amazing weapons - html, css and javascript. Besides, we have deeper understanding for the responsive design that is so significant in this age of interconnectedness. For the back-end, all of us feel very comfortable to learn the server development with express framework and MongoDB of which the gentle learning curve help us build the confidence step by step and be more interested in web development.

In addition, this final project provides us a great opportunity to experience the collaborative web development. In this project we meet many realistic problems like error handling, session management and limitations of bootstrap. These challenges bring us a lot of trouble but also huge excitement. To be a master of web development, we still have a long way to go. What we learned and applied in this semester is absolutely a perfect start.

## Documentation
#### How to run this app
- This app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

#### Administrator view
- Admin account:

    name: admin  

    password: web2560

- When Logged in as admin, user can edit and delete all content of any campground in this app. 

#### Additional Documents

