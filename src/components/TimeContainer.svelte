<script>
	export let time, nameTime;
</script>

<div class="bg-blue-400 p-5 rounded-md w-[100px] mx-3">
	<p class="text-3xl font-semibold mb-2">{time ?? '00'}</p>
	<span class="text-1xl">{nameTime}</span>
</div>
