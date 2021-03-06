var cuentaVeces = 0;
const price = document.getElementById("price");
const bonus = document.getElementById("bonus");
const getRemainTime = deadline => {
	let now = new Date(),
		remainTime = (new Date(deadline) - now + 1000) / 1000,
		remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
		remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
		remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
		remainDays = Math.floor(remainTime / (3600 * 24));

	return {
		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}
};

const countdown = (deadline, elem) => {
	const el = document.getElementById(elem);

	const timerUpdate = setInterval ( () =>{
		let time = getRemainTime(deadline);
		el.innerHTML = `	
        <h2 class="mg-12">${time.remainDays}<span id="day">days</span> : ${time.remainHours}<span id="hour">Hours</span> : ${time.remainMinutes}<span id="min">Mins</span> : ${time.remainSeconds}<span id="seg">Secs</span></h2>`
	if (time.remainTime <= 1) {
		cuentaVeces++;
		cambio();
		clearInterval(timerUpdate);
		el.innerHTML = `<h2 class="mg-12">Ended</h2>`;
	}

	}, 1000)
};
const cambio = () => {
	switch (cuentaVeces) {
		case 0:
			countdown("Jan 29 2022 7:00:00 GMT-0400", 'reloj');
			break;
		case 1:
			countdown("Feb 10 2022 7:00:00 GMT-0400", 'reloj');
			price.textContent = "1 BNB = 55,000 SPC";
			bonus.textContent = "5% (+ 2 BNB)";
			break;
		case 2:
			countdown("Jan 29 2022 7:00:00 GMT-0400", 'reloj');
			price.textContent = "1 BNB = 55,000 SPC";
			bonus.textContent = "3% (+ 2 BNB)";
			break
	}
}
if(cuentaVeces === 0) {
	countdown("Feb 15 2022 7:00:00 GMT-0400", 'reloj');
}
