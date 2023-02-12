# react-library

* A book tracker web application written in React
* For now, it is just run locally. To use it, run
```bash
npm run dev
```
* Vite will start a server on localhost, port 5173
* Navigate to http://localhost:5173/ in the browser

## Features implemented
* Add and remove books from bookshelf
* Nice aesthetic CSS styling
* Book have properties: title, author, pages
* Checkbox to mark read books, changes row color to green to show completed
* Can add tags to books

## Near term features to implement
* Only show books of a certain tag (by clicking tag), can go back to start
* Scroll book list up / down
* Store user's books in localStorage for persistance when running on localhost

## Long term features to implement
* Full RESTful CRUD functionality with node.js, express and MongoDB
* Sanitise user inputs
* User authentication via username and password, store securely
* Host on Heroku
* Book reccomendation engine
