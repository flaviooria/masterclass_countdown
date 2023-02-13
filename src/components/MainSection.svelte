<script>
  import Footer from './Footer.svelte';

	import Countdown from '../components/Countdown.svelte';
</script>

<main class="p-5 w-[90%] m-auto text-lg">

		<article>
			<p>
				Hola chicxs de DAW y DAM les invito a realizar el dessarrollo de una web usando unos de los
				grandes frameworks <a
					class="font-semibold"
					href="https://kit.svelte.dev/"
					target="_blank"
					rel="noreferrer">SvelteKit</a
				>
				y creando una RESTApi con
				<a
					class="font-semibold"
					href="https://fastapi.tiangolo.com/es/"
					target="_blank"
					rel="noreferrer">FastApi</a
				> , aún nos les diré el tema pero espero que les guste a todos y puedan aprender mucho.
			</p>
			<p>
				Les dejaré los requisitos que tienen que tener previamente instalado para poder realizar el
				proyecto.
			</p>
		</article>

		<article class="border-t-2 mt-3 border-blue-500">
			<h3 class="text-2xl mt-2">SvelteKit 💻</h3>
			<ul class="list-disc ml-10">
				<li>
					Tener instalado Node JS LTS y NPM <a
						class="underline"
						href="https://nodejs.org/es/download/">enlace de descarga</a
					>
				</li>
				<li>
					Extensiones en VSCode para utilizar: (Svelte for VS Code, Tailwind CSS IntelliSense)
				</li>
			</ul>
		</article>

		<article class="border-t-2 mt-3 border-blue-500">
			<h3 class="text-2xl mt-2">FastApi ⚡</h3>
			<ul class="list-disc ml-10">
				<li>
					Tener instalado Python +3.10.* <a
						class="underline"
						href="https://www.python.org/ftp/python/3.10.10/python-3.10.10-embed-amd64.zip"
						>enlace de descarga (Windows x64)</a
					>
				</li>
				<li>Guía de instalación de python <a class="underline" href="https://docs.python.org/es/3/using/windows.html">enlace</a></li>
				<li>Extensiones en VSCode para utilizar: (Python, Pylance, ThunderClient)</li>
			</ul>
		</article>

	</main>

