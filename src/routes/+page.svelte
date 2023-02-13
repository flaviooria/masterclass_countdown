<script>
  import Info from '../components/Info.svelte';

  import Image from '../components/Image.svelte';

  import MainSection from '../components/MainSection.svelte';

  import Footer from '../components/Footer.svelte';

</script>

<section class=" bg-gradient-to-t from-cyan-500 to-blue-500 h-full text-white">
	<header class="p-5 bg-cyan-100 text-cyan-700">
	</header>

	<section class="grid grid-cols-2 gap-3">
		<Image />
		<Info />
	</section>

	<MainSection />

	<Footer />

</section>
