
function sample(numbers){
	return numbers[getRandomInt()];
}

function getRandomInt(limit) {
  return Math.floor(Math.random() * Math.floor((!!limit?limit:9)));
}

module.exports = {sample:sample,randomNumber:getRandomInt};