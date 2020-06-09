# MyPlants: A Houseplant Organizing Tool

## Hi there! Welcome to my plant organizer application, MyPlants!

### Website Description
MyPlants is a simple, easy to navigate browser based application that helps you organize your houseplants and keep track of their data.


### User Stories
#### Site Features -
1. Viewing your collection of plants
2. Viewing information about a specific plant on its own page
3. Adding a plant
4. Deleting a plant
5. Editing an existing plant

When you navigate to [MyPlants](https://my-glorious-plants.herokuapp.com/myplants) you are greeted by a page that displays 'my collection of plants' and a navigation link that says 'plant some seeds'.

When you click on 'plant some seeds', you are taken to a page that allows you to add a new plant to your collection. You can include a name, image url, the days of the week that you intend to water them, a description of the plant, and the year/month that the plant was planted.

After completing the form and clicking 'save new plant' at the bottom of this page, you are redirected to your collection of plants and the plant has been added.

If you click on the image of the plant on the 'my collection of plants' page, you are taken to a page that displays all of the information about this particular plant. There are also links at the bottom of this page to update that plant's information or go back to the collection of plants page. There is a button on the top right portion of the page (bottom if you are using the site on a mobile device) that will remove the plant when you click on it and it will bring you back to your collection of plants.


### Functionality
The dependencies and routes can be found in the server.js file and express functions are used to implement each route that send and receive information between the index.ejs (myplants page), show.ejs (page displaying an individual plant), edit.ejs (page that allows you to edit a plant that has already been added), and new.ejs (page that allows you to add a new plant to your page) files.

app.use(express.static('public')); is used to access the main.css file in the public folder for the styling of this site.

The plants.js in the models folder has a schema that uses mongoose to describe and read the data that is added from the form on the new.ejs page.

There is also seed data in the seed.js file that can be used as starter data to showcase how the application can be used.


### Onward and upward!
Improvements that I would like to make to this app:
1. sign up/log in functionality.
2. update the data/schema/form so that the days of the week that you water each plant are in a check-box form instead of a text-box.
2. adding my second improvement should make it a little easier to organize the plants on a 'need to water' page that will only show the plants you need to water that day based on the days you have selected to water them.
