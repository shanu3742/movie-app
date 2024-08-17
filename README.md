# Getting Started with Movie App

This project gitHub link [REPO](https://github.com/shanu3742/movie-app).

## To Run Project Step given Below

- clone repo [REPO](https://github.com/shanu3742/movie-app)
- cd boxe-office
- npm install
- npm start

## To Build the Movie App

- clone repo [REPO](https://github.com/shanu3742/movie-app)
- cd boxe-office
- npm install
- npm  run build

>project deploy at [URL](https://66c08579832d574bf2f489f5--dynamic-dolphin-bec04c.netlify.app/)


## DESIGN DECISIONS
- used **MVC** design pattern
- all logic and  global state are mangaed using redux toolkit
- Ui lavel state mange using react hooks 

- all low level component are define in **lib** folder

- all custom component are define in **component folder**
- all page level component define in **page folder**

- we implement **lazy loading** to decrease the load time of application

- all routes is define in **routes.js** file

- api folder is created to manage the network call across the application

- for theme we created theme where we define seprate theme for both light and dark and select the variable of it based on light or dark class

- we try to put all global level class in global.scss file 

- we used memo and useCallback together to achive performance and avoid unnecessary re-rendring



## need to improvement 

> css class name i try to follow one convenation but because of time i didn't follow in all componnet

> we can improve filter code also but for now i just created a simple filter with cutom filtering and if you want to use custom filter used Title as key and in value you can pass search text

> if there is no filter data , i didn't handle this senario


>we can split home page code code where we will move filter code in differnt component and used it in home but for now i created filter ui in home page only