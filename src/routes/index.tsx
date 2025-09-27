import { component$ } from '@builder.io/qwik';

export default component$(() => {
	return (
		<section class="mx-auto max-w-6xl px-4 py-10">
			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h1 class="text-3xl md:text-5xl font-bold leading-tight">
						Hi, I’m Carol.
					</h1>
					<h2 class="text-3xl md:text-5xl font-bold leading-tight">
						I draw worlds and make them move.
					</h2>
					<p class="mt-4 text-lg text-slate-700">
						2D animation • game art • concept art
					</p>
				</div>
				<img src="/assets/portraits/hero.jpg" class="rounded-3xl border border-slate-200" alt="Portrait" />
			</div>

			<h2 class="mt-12 mb-4 text-2xl font-semibold">Selected Projects</h2>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			</div>
		</section>
	);
});

export const head = {
	title: 'Carol Faustino — Portfolio',
	meta: [{ name: 'description', content: 'Selected animation & illustration works.' }],
};
