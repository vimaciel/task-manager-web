# Task Manager Web
by [Vinicius Furusho Maciel](https://www.linkedin.com/in/vimaciel)

Sometimes we are so busy with a lot of tasks to do. If you want to organize your activities, you can try to use this app for these moments. This app is small but it's all you need. You can create new tasks, update and delete them. After finishing the task, you can set it as completed. 

***Although I 've used npm in this documentation, feel free to use yarn instead***

## How to install
*You need node installed*

The first thing to do is clone task manager api and then  run it 
```sh
$ git clone https://github.com/vimaciel/task-manager-api.git
$ cd task-manager-api
$ npm install
$ node index.js
```
... and them run the client side
```sh
$ git clone https://github.com/vimaciel/task-manager-web.git
$ cd task-manager-web
$ npm install
$ npm start
```

## How to test
I tested only task saga, where it lives the business logic. In a later app version, I have plans to test other things too.

```sh
$ cd task-manager-web
$ npm test task
```
This repository is under MIT. Fell free to fork and use it for studying purposes.