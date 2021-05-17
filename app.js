let express = require("express");
let path = require("path");

let app = express();
let port = 5050;

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`server listening on ${port} port`));
