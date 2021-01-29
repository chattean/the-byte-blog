const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const helpers = require('./utils/helpers')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
// Setting up handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

//setting up login sessions
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// creating a Session instance
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {secure:false, maxAge:24*60*60*1000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT))
});
