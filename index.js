const app=require('./app')




const port = 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})


/**
 * const http=require('http')
 * const app=require('./app.js)   export app fro app.js
 * const PORT =5000
 * const server=http.createServer(app)
 * server.listin(PORT,callbackfunction)
 */
