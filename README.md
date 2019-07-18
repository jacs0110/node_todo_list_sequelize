## To-do list



This is a web appliaction built by Node.js, Express.js, MySQL and basic CRUD and user login functions. You can also visit this app at [https://jacs-todo-list-sql.herokuapp.com/](https://jacs-todo-list-sql.herokuapp.com/)


### Features
1. User can user email or facebook to register on this app
2. User can create, see, update, and delete a to-do
3. User can see all to-dos in the index page

---
### Getting Started
#### Prerequisites/Environment
* "bcryptjs": "^2.4.3",
* "body-parser": "^1.19.0",
* "connect-flash": "^0.1.1",
* "dotenv": "^8.0.0",
* "express": "^4.17.1",
* "express-handlebars": "^3.1.0",
* "express-session": "^1.16.2",
* "heroku-cli": "^7.0.9",
* "method-override": "^3.0.0",
* "mysql2": "^1.6.5",
* "nodemon": "^1.19.1",
* "passport": "^0.4.0",
* "passport-facebook": "^3.0.0",
* "passport-local": "^1.0.0",
* "pg": "^7.11.0",
* "sequelize": "^5.10.1",
* "sequelize-cli": "^5.5.0",



#### Setup database
1. Install [MySQL](https://dev.mysql.com/downloads/mysql/) and setup the **password** for 'root' user


2. Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) and set it up with following cofigurations:

* Title: Local instance 3306
* Hostname: localhost 
* Port: 3306 
* Username: root 
* Password: [YOUR_PASSWORD] *(same as the one you set above)*

3. Create a new database via MySQL Workbench

Execute the following commands in Workbench 

```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```


#### Setup the app

1. Clone the project from Github
```
$ git clone https://github.com/jacs0110/node_todo_list_sequelize.git
```

2. Go to the project folder 
```
$ cd node_todo_list_sequelize
```

3. Install npm packages
```
$ npm install
```

4. Edit config.json
```
// /config/config.json

// ...
"password": [YOUR_PASSWORD],
"database": "todo_sequelize"
// ...
```

5. Create models
```
$ npx sequelize db:migrate
```

5. Create .env for facebook login feature
```
// .ent

FACEBOOK_ID=[YOUR_FACEBOOK_ID]
FACEBOOK_SECRET=[YOUR_FACEBOOK_SECRET]
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```
6. Run the server
```
$ npm run dev
```

---
### Authors
[Jacs](https://github.com/jacs0110)

*I'm now learning web development and want to become a software engineer in the future. Feel free to let me know if you have any feedback or questions about my project. Thanks!*
