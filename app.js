require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const path = require('path')


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once('open', () => {
  console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
  console.error(`
  MongoDB connection error!!! 
  ${error}
`)
  process.exit(-1)
})


const indexRouter = require('./routes/index');
const parksRouter = require('./routes/parks');

const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'))
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/parks', parksRouter);

//\public

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
