<script>
  import TimeContainer from './TimeContainer.svelte';

	import { cronometer } from '../store/read.store';

	let initCronometer = cronometer(12, 0, 0);
	let days, hour, minutes, seconds;

	$: if ($initCronometer) {
		days = $initCronometer[0];
		hour = $initCronometer[1];
		minutes = $initCronometer[2];
		seconds = $initCronometer[3];
	}
</script>

<h3 class="text-2xl">Nos vemos, no vayas a faltar 😃</h3>
<section class="flex justify-center items-center text-center my-5">
	<TimeContainer time={days} nameTime={'Días'} />
	<TimeContainer time={hour} nameTime={'Horas'} />
    <TimeContainer time={minutes} nameTime={'Minutos'} />
    <TimeContainer time={seconds} nameTime={'Segundos'} />
</section>
