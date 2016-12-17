import * as express from 'express';
const app = express();
app.use('/', express.static(__dirname + '/view'));

app.listen(3000, () => {
    console.log(3000);
});