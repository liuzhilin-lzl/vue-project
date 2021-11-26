const express = require("express");
const app = express();

app.set('trust proxy', true);
app.get("/api/get_pubip", (req, res) => {
	const { ip } = req;
	res.send({ code: 0, data: { ip }, msg: "success" });
})
app.listen(3002);

作者：wangfpp
链接：https://juejin.cn/post/6972913930226106399
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。