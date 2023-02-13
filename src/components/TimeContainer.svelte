<script>
	export let time, nameTime;
</script>

<div class="bg-blue-400 rounded-md w-[70px] sm:p-5 sm:mx-3 lg:w-[100px]">
	<p class="text-2xl md:text-3xl font-semibold mb-1 sm:mb-2">{time ?? '00'}</p>
	<span class="text-sm md:text-1xl">{nameTime}</span>
</div>
