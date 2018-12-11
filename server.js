var express	= require("express"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	app = express();

var portAPI = process.env.PORTAPI || '5000';
var hostServer = process.env.HOSTSERVER || '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.route("/customer/:name")
	.get(	
		function(req,res) {
			res.status(200).send({name : req.	params.name});
		}
	);

app.use("/", router);
	
app.listen(portAPI,hostServer, function () {
	console.log("escuchando en el puerto "+portAPI);
})