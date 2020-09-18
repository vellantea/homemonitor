Hosting URL: https://home-monitor-f28b4.web.app
// URL is not working yet; the app works on the local host url with npm start

In order to run the app locally:
  - download contents
  - on command line, cd into project directory
  - make sure all necessary installations are working
  - on command line, npm start
  - window through local host will pop up on chrome and the app should be working

Vision:
- Web application
- Use firebase for backend
- Use react for front end
- Use python for simulating sensors
- User should be able to add their own sensors and name the location they are in
- User should be able to navigate pages intuitively
- Multiple people accessing it
- Multiple sources of temperature and humidity
- Multiple temperature or humidity sources associated with a user
- Simulates a sensor
- SSO (Single Sign On)

Accomplished:
- Web application uses firebase for backend and react for front end.
- User is able to navigate the app easily
- User is able to add their own sensors
- Login platform (not SSO)


Improvements:
- implement logout button (that works)
- SSO
- Multiple people accessing the app and having their own sensors associated with that user
- delete sensor option


Testing:
- User should be prompted with login page
  - if the user is already logged in, there is no need to login again
  - if user doesn't have a login and needs to sign, there is a link to the signup page on the login page
    as well as a button on the navigation bar to redirect to that page
  - login page will authenticate the user and make sure their are no errors as they login or sign up
- the user will not be able to access the homepage before logging in
- once logged in the user is redirected to their homepage where their sensors and locations are shown
- there is a separate page to add a new sensor
- there is no logout button 
- multiple people cannot access it and the sensors do not pertain to one user


There is much to improve upon and this is not a perfect application.
