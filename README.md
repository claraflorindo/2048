# 2048

This is a JavaScript implementation of the popular game 2048. The game consists of a 4x4 grid of tiles, each of which contains a value of 0 or a power of 2. The player can slide tiles left, right, up, or down. When two tiles with the same value slide into each other, they merge into a single tile with the sum of the values.

## Getting Started

To run the game, simply open the index.html file in a web browser.

## Prerequisites

This game requires a web browser to run.

## Built With

JavaScript
HTML
CSS


## 2048.js Description
2048 is a popular game where you slide numbered tiles on a grid to combine them and create a tile with the number 2048. This implementation of the game is written in JavaScript and can be played in the browser.

### How to Play
To play the game, simply open the HTML file in a web browser. Use the arrow keys to slide the tiles in the desired direction. Tiles with the same number will combine into one tile with a value equal to the sum of the original tiles. The game ends when the player reaches the tile with the value of 2048 or when there are no more empty tiles on the board.

### Code Description
The board variable holds the state of the game and is initialized as a 4x4 grid of tiles with a value of 0. The score variable keeps track of the current score.

The setGame() function initializes the game board by creating a 4x4 grid of tiles with a value of 0. It creates a div element for each tile, assigns an id to it based on its position on the board, and adds the tile to the board container element in the HTML. It then calls setTwo() function twice to randomly set two tiles with the value of 2.

The updateTile(tile, num) function updates the style and content of a tile based on its value. If the value of the tile is greater than 0, it sets the inner text to the value and adds a class to the tile based on the value.

The code adds an event listener to the document for the keyup event. It listens for arrow key presses and calls the appropriate slide function.

The slide functions take a row or column of tiles as an argument and slides them in the desired direction. The slideLeft() and slideRight() functions slide the rows left and right, respectively. The slideUp() and slideDown() functions slide the columns up and down, respectively. If two tiles with the same value are adjacent to each other after the slide, they are combined into one tile with a value equal to the sum of the original tiles.

The setTwo() function randomly sets two tiles with the value of 2 on the board. It returns immediately if there are no more empty tiles on the board.


## base.html Description

This HTML file serves as a base template for other HTML files in the project. It includes the necessary head and body tags for an HTML document, and it imports the Bootstrap CSS and JavaScript files to provide styling and interactivity.

The header section of the HTML document contains a logo and a navigation menu with login, register, and logout buttons. If the user is not logged in, the login and register buttons are displayed. If the user is logged in, the logout button is displayed.

The main section of the HTML document is a block that can be overridden by other HTML files that inherit from this base template. The main section should contain the content that is specific to each page.

To use this base template, create a new HTML file that inherits from base.html by including the following line at the beginning of the file:

{% extends "base.html" %}

Then, define the content of the main section by creating a block with the name "main":

{% block main %}

  <!-- content specific to this page goes here -->
{% endblock %}

This will include the header and footer from base.html and allow you to define the content that is specific to each page.

## 401.html Description

This is a Jinja2 template for a custom 401 Unauthorized error page. The template extends the "base.html" template and overrides the "main" block.

The template includes a header with the website logo and a navigation bar with options to login, register or logout based on the user's session. The main content of the template displays an error message indicating that the username or password entered is incorrect. Additionally, there is a link to redirect the user back to the homepage.

This template can be used in a Flask application to display a custom 401 error page when a user fails to authenticate themselves with the server.

## 2048.html Description

This is a game page for 2048 with a fact about a cat lookup feature.

The page extends the "base.html" template and adds the following content to the main block:

A link to the "2048.css" stylesheet.
A script tag that references the "2048.js" JavaScript file.
A heading that says "2048".
A subheading that displays the current score, which is initially set to 0.
A div with an id of "board", which is where the game will be displayed.
A button that says "Get a fact about a cat". When clicked, this button will use JavaScript to look up and display a fact about a cat.
A label and input field for displaying the fact about a cat.
To play the game, use the arrow keys on the keyboard to move tiles on the board and try to create a tile with the number 2048. The current score will be displayed at the top of the page.

If the user clicks the "Get a fact about a cat" button, the page will display a fact about a cat in the input field.

The fact about the cat feature was implemented to use an API.

## index.html Description

This is the index page for the 2048 game website. It extends the base.html template and includes a simple welcome message for the users to encourage them to log in and start playing the game. The page is styled using the bootstrap framework and is contained within a container div. The main content of the page is in the block main, which is defined in the base.html template.

## login.html Description

This is the login page for the web application. The user needs to enter their credentials to access the app's features.

The page extends the "base.html" file and contains a login form with two input fields - username and password. Once the user fills in the form and clicks the "Sign in" button, the form's data is submitted to the "/login" route using the HTTP POST method.

The form is styled using the Bootstrap framework's form classes, making it responsive and visually appealing.

## register.html Description

The register.html file contains a registration form for a website. It extends the base.html template and has a main block containing the form. The form has fields for username, password, and a confirmation password field. There is also a register button to submit the form.

The form uses Bootstrap classes to style the elements and is centered on the page. The form also includes an alert div with an id of "alert" that is hidden by default but can be used to display error messages to the user.

To use the form, users can enter their desired username and password, and confirm the password in the second password field. When the user clicks the register button, the form will be submitted to the server using the HTTP POST method. If there are any errors in the registration process, the server will return an error message which can be displayed to the user using the alert div.

This form is typically used as a part of a larger registration process, which may involve additional steps such as email verification or providing personal information.

## 2048.css Description
The 2048.css file contains the CSS styling rules for the 2048 game. The following is a brief description of the contents of this file:

body: Applies the Arial font family to the body element and sets the text alignment to center.
hr: Sets the width of horizontal lines to 500 pixels.
#board: Defines the dimensions, background color, and border style for the game board.
.tile: Sets the dimensions, border style, font size, and font weight for each tile on the board.
.x2 through .x8192: Defines the background color and text color for each tile value. The colors range from light to dark as the tile values increase.



## server.py Description

This file contains a Flask server with some routes for a web application. The server is connected to a MySQL database using SQLAlchemy, and uses the Werkzeug library for password hashing.

The routes included in the server are:

/ : Renders the index.html page.
/login : Renders the loginbootstrap.html page.
/index : Renders the index.html page.
/register : Renders the registerbootstrap.html page.
/2048 : Renders the 2048.html page.
/register (POST) : Handles the registration form, inserting the new user into the database with a hashed password and redirecting to the 2048 page.
/login (POST) : Handles the login form, checking the entered password against the hashed password stored in the database, and redirecting to the 2048 page if the credentials are correct or rendering the 401.html page if they are not.
/logout : Removes the username from the session and redirects to the index page.
To run the server, you need to have Python 3 installed, as well as the required packages, which are flask, argon2, sqlalchemy, and werkzeug. To install them, run the following command in your terminal:

pip install flask argon2 sqlalchemy werkzeug

Then, run the following command to start the server:

python server.py

The server will be accessible at http://localhost:5000/. You can modify the host and port by changing the parameters passed to the app.run() method at the end of the file.


## Further improvements

- Include instructions on how to access the game on a mobile device.
- Add a "reset game" button so that users can start a new game without having to refresh the page.
- Allow users to customize the game settings, such as the size of the board and the starting tiles.
- Add sound effects and music to make the game more engaging.




