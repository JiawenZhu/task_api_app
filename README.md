### cd to api folder and do command ***npm install***
### after pack being installed, then type command ***npm start*** --- this will start the local server

### cd to client folder and do command ***npm install***
### after pack being installed, then type command ***npm start*** --- this will start the client server

### libraries are being used here

### ReduxForm is from https://redux-form.com/8.3.0/examples/simple/

### ReduxForm is very powerful React Redux libraries for making easy Jason formatted forms. 
### Axios is used here instead of Fetch call
### https://github.com/axios/axios#creating-an-instance
`const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});`