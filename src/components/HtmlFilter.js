// 抽离成可配置的匹配列表
const matchList = {
	'&lt;': '<',
	'&gt;': '>',
	'&amp;': '&',
	'&#34;': '"',
	'&quot;': '"',
	'&#39;': "'",
}
// 字符过滤器
const HtmlFilter = (text) => {
	let regStr = '(' + Object.keys(matchList).toString() + ')'
	// ↑ ------------【*提取匹配列表key值*】.【组数转字符串】      
	regStr = regStr.replace(/,/g, ')|(')
	// ↑ 通过匹配将其更新为正则的字符串类型
	const regExp = new RegExp(regStr, 'g')
	// ↑ ------- 字符串 转 正则 方法
	return text.replace(regExp, match => matchList[match])
	// ↑ ------ 替换方法 (正则, 当前key => 返回当前被匹配的key值)
}

export default HtmlFilter
