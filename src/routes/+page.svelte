<script>
	import Header from '../components/Header.svelte';

	import Info from '../components/Info.svelte';

	import Image from '../components/Image.svelte';

	import MainSection from '../components/MainSection.svelte';

	import Footer from '../components/Footer.svelte';
</script>

<section class=" bg-gradient-to-t from-cyan-500 to-blue-500 h-full text-white">
	<Header />
	<section class="grid sm:grid-cols-2 gap-3">
		<Image />
		<Info />
	</section>
	<MainSection />
	<Footer />
</section>
