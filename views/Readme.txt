Uploads files to the directory named 'uploads' on local server.

All files will have unique name.

If unique name not needed then change index.js:27 to this: 'cb(null, `${uuid()}-${originalname}`);'


