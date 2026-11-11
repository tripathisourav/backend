import express from "express"
import { config } from 'dotenv'
import passport from "passport"
import { Strategy as GoogleStratergy } from "passport-google-oauth20";
import morgan from "morgan";

config();

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('hello World');
})

app.use(passport.initialize());

passport.use(new GoogleStratergy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}))

app.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', 
    { 
        session: false,
        failureRedirect: '/' 
    }),
    (req, res) => {
        console.log(req.user);
        res.send('You have successfully logged in with Google');
    }
);

app.listen(3000, () => {
    console.log('server is running on port 3000')
})