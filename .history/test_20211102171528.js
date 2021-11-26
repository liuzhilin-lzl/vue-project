const express = require("express");
const app = express();

app.set('trust proxy', true);
app.get("/api/get_pubip", (req, res) => {
	const { ip } = req;
	res.send({ code: 0, data: { ip }, msg: "success" });
})
app.listen(3002);