require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8022;
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const db = require('./models')
const routes = require("./routes");

// middleware
app.use(morgan('tiny'))

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// can i combine below if statement with the above trust proxy one?
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes)
// rewrite
// app.use(express.static('client/build'))
// app.use('/api', api);
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log('Server listening on: http://localhost:' + PORT);
    })
})

