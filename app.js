const express = required('express');
const routes = require('./routes');

const app = express();

app.use("/", routes);


const port = 3089;

//escucha del servidor 
app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
});