import { readable } from 'svelte/store';

export function cronometer(hour = 0, minutes = 0, seconds = 0) {
	let dateFinish = new Date('2023-02-17');
	// dateFinish.setFullYear();
	dateFinish.setHours(hour, minutes, seconds);
	return readable(null, function start(set) {
		let intervalCronometer = setInterval(() => {
			let dateDiff = getDateDiff(new Date(), dateFinish);
			let dateFormat = getDateFormat(
				(dateDiff.getDate() === new Date().getDate() ? 0 : dateDiff.getDate()),
				dateDiff.getHours(),
				dateDiff.getMinutes(),
				dateDiff.getSeconds()
			).split(':');
			set(dateFormat);
		}, 1000);
		return function stop() {
			clearInterval(intervalCronometer);
		};
	});
}

function getDateDiff(startDate, endDate) {
	const msInHour = 1000 * 60 * 60; // 3600000 milisegundos
	const msInMinute = 1000 * 60; // 60000 milisegundos
	const msInSecond = 1000; // 1s es igual 1000ms

	let diffMs = endDate - startDate; // milliseconds between now & Christmas
	let diffDays = Math.floor(diffMs / 1000 / 60 / 60 / 24); // days
	let diffHrs = Math.floor((diffMs % 86400000) / msInHour); // hours
	let diffMins = Math.round(((diffMs % 86400000) % msInHour) / msInMinute); // minutes
	let diffSec = Math.round(((diffMs % 86400000) % msInMinute) / msInSecond); // seconds

	let date = new Date();
	console.log('dias que faltan',diffDays);
	if (diffDays != 0) {
		date.setDate(parseInt(diffDays))
	}
	date.setHours(diffHrs);
	date.setMinutes(diffMins);
	date.setSeconds(diffSec);

	return date;
}

function getDateFormat(days, hour, min, sec) {
	days = days.toString().padStart(2, '0');
	hour = hour.toString().padStart(2, '0');
	min = min.toString().padStart(2, '0');
	sec = sec.toString().padStart(2, '0');

	return `${days}:${hour}:${min}:${sec}`;
}
