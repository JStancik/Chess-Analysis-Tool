

baseApiCall = "https://api.chess.com/pub/player/"
callData = "checkmated56"


async function getChessData(callData) {
	let res = await fetch(baseApiCall+callData)
	let json = await res.json()
	console.log(json)
	return await json
}

console.log(getChessData(callData))