const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 
const connectDB = require('./db/connect');
const quizzesRouter = require('./routes/quizzes');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const bodyParser = require('body-parser');
const port = process.env.PORT || 8083;

const app = express();

app
.use(bodyParser.json())
.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true, 
}))
.use(passport.initialize())
.use(passport.session())
.use((req, res, next)=> {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Z-Key, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})
.use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
.use(cors({ origin: '*' }))
.use("/", require("./routes/index.js"));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
function(accessToken, refereshToken, profile, done){
  return done(null, profile);
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/', (req, res) => { res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : 'Logged Out')});

app.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/api-docs', session: false}),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  
});

app.use(express.json());

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

connectDB();

app.use('/quizzes', quizzesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
