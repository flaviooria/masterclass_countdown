<script>
	import Countdown from './Countdown.svelte';
</script>

<article class="p-10">
	<h1 class="text-5xl">Masterclass SvelteKit FastApi</h1>
	<h2 class="text-2xl mt-3">Presentada: Flavio Oria</h2>
	<p class="text-1xl">Fecha: 17/02/2023 12:00</p>
	<div class="flex items-center my-3">
		<img src="/github.png" alt="logo_github" />
		<a class="ml-2" href="https://github.com/flaviooria" target="_blank" rel="noreferrer"
			>flaviooria</a
		>
	</div>
	<div class="flex items-center mb-3">
		<img src="/linkedin.png" alt="logo_linkedin" />
		<a class="ml-2" href="https://www.linkedin.com/in/flaviooria/" target="_blank" rel="noreferrer"
			>Flavio Oria</a
		>
	</div>
	<Countdown />
</article>
