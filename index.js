const express = require('express');
const exphbs = require('express-handlebars');
const multer = require('multer');
const uuid = require('uuid').v4;

const app = express();
const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`)
});

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, `${uuid()}-${originalname}`);
    }
});

const upload = multer({ storage: storage });

app.post('/upload-files', upload.array('file'), (req, res) => {
    return res.status(200).send(req.file);
});

