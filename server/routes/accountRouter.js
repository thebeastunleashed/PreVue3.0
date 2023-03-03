const express = require('express');
const accountController = require('../controllers/accountController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const accountRouter = express.Router();

//signup route
accountRouter.post(
  '/createUser',
  accountController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    console.log('hello from createUser in accountRouter');
    return res.status(201).json(res.locals.id);
  }
);

accountRouter.post(
  '/login',
  accountController.login,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    console.log('hello from accountRouter');
    return res.status(201).json(res.locals.id);
  }
);

accountRouter.post(
  '/loginWithoutCookie',
  accountController.loginWithoutCookie,
  (req, res) => {
    console.log('hello from accountRouter');
    return res.status(201).json(res.locals.id);
  },

  accountRouter.post('/oauth', sessionController.oauthVerify, (req, res) => {
    console.log('in oauth router');
    return res.status(201);
  })
);

module.exports = accountRouter;
