# React Router

**Requires:** React 102

## Learning Objectives
* Leverage react-router to show different content based on the URL
* Understand how the Switch component affects which Routes render based on the URL
* Understand how Link components differ from HTML anchor tags
* Know when to use the different routing-related props
* Know how to extract and parse query parameters

## Online Course Content
[React - The Complete Guide (incl Hooks, React Router, Redux)](https://redventures.udemy.com/react-the-complete-guide-incl-redux/)

### Section 11 – Multi-Page-Feeling in a Single-Page-App: Routing
All portions of this section should be watched.

## Supplemental Material
* Passing props through Route components – https://tylermcginnis.com/react-router-pass-props-to-components/

## Project
For this project, you'll need to create an application that displays information regarding movies that are currently playing in movie theaters using The Movie Database's API. Even though it'll be a single-page application, it will *feel* like multiple pages due to the way `react-router` manages navigation using `Route` components.

The first step is to request an API key from The Movie Database by following the instructions outlined in their [Getting Started docs](https://developers.themoviedb.org/3/getting-started/introduction) and include it in a `.env` file.

After that, you'll need to create a `Home` route that displays all the movies that are currently playing, as well as a `MovieDetails` route. When a movie on the homepage is clicked, the movies details page requests information from a different API endpoint to provide more detailed information about the movie.

Lastly, you'll need to create a `MovieNotFound` route. This will handle situations where a user accesses a URL that you didn't plan for (or a URL that just doesn't exist), directing them to a 404 page instead.