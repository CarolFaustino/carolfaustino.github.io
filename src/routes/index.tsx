import { component$ } from '@builder.io/qwik';

export default component$(() => {
	return (
		<>
			{/* Section 1 — intro, smaller height so next section peeks */}
			<section class="snap-start min-h-[60svh] flex items-center justify-center bg-blue-500">
				<div>content 1</div>
			</section>

			{/* Section 2 — Projects: header + items */}
			<section class="snap-start bg-white">
				<div class="flex flex-col">
					<header class="px-6 py-4 sticky top-0 z-20 bg-amber-200/40 backdrop-blur">
						<h2 class="text-2xl font-semibold">Projects</h2>
					</header>

					{/* Project — Bondim */}
					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] border-b border-slate-200">
						<div class="mx-auto max-w-6xl px-6 py-8">
							<div class="grid gap-6 lg:grid-cols-2 items-start">
								<figure class="rounded-xl overflow-hidden bg-slate-200 shadow">
									<img
										src="/images/projects/bondim-cover.jpg"
										alt="Bondim cover"
										class="w-full h-full object-cover aspect-[16/9]"
										loading="lazy"
									/>
									<figcaption class="px-4 py-2 text-center text-sm text-slate-700">
										Bondim
									</figcaption>
								</figure>
								<div class="rounded-xl bg-rose-50 border border-rose-200 p-6 shadow-sm flex flex-col">
									<h3 class="text-2xl font-semibold">Bondim</h3>
									<p class="mt-1 text-sm text-slate-600">UI Artist</p>
									<ul class="mt-4 list-disc pl-5 space-y-1 text-slate-800">
										<li>Contributed to the game's visual identity</li>
										<li>Created concept art for characters and environments</li>
										<li>Designed and produced sprites for in-game use</li>
									</ul>
									<a
										href="https://example.com/bondim"
										class="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-rose-400 px-4 text-white hover:bg-rose-500 transition"
									>
										Play now
									</a>
								</div>
							</div>
						</div>
					</article>

					{/* Project — No Passo da Favela */}
					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] border-b border-slate-200">
						<div class="mx-auto max-w-6xl px-6 py-8">
							<div class="grid gap-6 lg:grid-cols-2 items-start">
								<figure class="rounded-xl overflow-hidden bg-slate-200 shadow">
									<img
										src="/images/projects/no-passo-da-favela-cover.jpg"
										alt="No Passo da Favela cover"
										class="w-full h-full object-cover aspect-[16/9]"
										loading="lazy"
									/>
									<figcaption class="px-4 py-2 text-center text-sm text-slate-700">
										No Passo Da Favela
									</figcaption>
								</figure>
								<div class="rounded-xl bg-rose-50 border border-rose-200 p-6 shadow-sm flex flex-col">
									<h3 class="text-2xl font-semibold">No Passo Da Favela</h3>
									<p class="mt-1 text-sm text-slate-600">2D Animator, Game Designer</p>
									<ul class="mt-4 list-disc pl-5 space-y-1 text-slate-800">
										<li>Contributed to the visual identity of the GDD</li>
										<li>Created character animations and assisted in art production</li>
									</ul>
									<a
										href="https://example.com/no-passo"
										class="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-rose-400 px-4 text-white hover:bg-rose-500 transition"
									>
										Play now
									</a>
								</div>
							</div>
						</div>
					</article>

					{/* Project — .Com */}
					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] border-b border-slate-200">
						<div class="mx-auto max-w-6xl px-6 py-8">
							<div class="grid gap-6 lg:grid-cols-2 items-start">
								<figure class="rounded-xl overflow-hidden bg-slate-200 shadow">
									<img
										src="/images/projects/dotcom-cover.jpg"
										alt=".Com cover"
										class="w-full h-full object-cover aspect-[16/9]"
										loading="lazy"
									/>
									<figcaption class="px-4 py-2 text-center text-sm text-slate-700">
										.Com
									</figcaption>
								</figure>
								<div class="rounded-xl bg-rose-50 border border-rose-200 p-6 shadow-sm flex flex-col">
									<h3 class="text-2xl font-semibold">.Com</h3>
									<p class="mt-1 text-sm text-slate-600">UI Artist</p>
									<ul class="mt-4 list-disc pl-5 space-y-1 text-slate-800">
										<li>Contributed to the game's visual identity</li>
										<li>
											Visual Asset Development: Creation of chat bubbles, app icons,
											and scenarios, contributing to the user experience and in-game
											visualization
										</li>
									</ul>
									<a
										href="https://example.com/dotcom"
										class="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-rose-400 px-4 text-white hover:bg-rose-500 transition"
									>
										Play now
									</a>
								</div>
							</div>
						</div>
					</article>

					{/* Project — Pawcade Empire */}
					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] border-b border-slate-200">
						<div class="mx-auto max-w-6xl px-6 py-8">
							<div class="grid gap-6 lg:grid-cols-2 items-start">
								<figure class="rounded-xl overflow-hidden bg-slate-200 shadow">
									<img
										src="/images/projects/pawcade-empire-cover.jpg"
										alt="Pawcade Empire cover"
										class="w-full h-full object-cover aspect-[16/9]"
										loading="lazy"
									/>
									<figcaption class="px-4 py-2 text-center text-sm text-slate-700">
										Pawcade Empire
									</figcaption>
								</figure>
								<div class="rounded-xl bg-rose-50 border border-rose-200 p-6 shadow-sm flex flex-col">
									<h3 class="text-2xl font-semibold">Pawcade Empire</h3>
									<p class="mt-1 text-sm text-slate-600">Character Artist</p>
									<ul class="mt-4 list-disc pl-5 space-y-1 text-slate-800">
										<li>
											Contributed to the game’s visual identity: character design,
											environment design, and color palette
										</li>
										<li>Responsible for NPC and player 3D animations</li>
									</ul>
									<a
										href="https://example.com/pawcade"
										class="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-rose-400 px-4 text-white hover:bg-rose-500 transition"
									>
										Play now
									</a>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>

			{/* Section 3 — outro */}
			<section class="snap-start min-h-full flex items-center justify-center bg-emerald-300">
				<div>content 3</div>
			</section>
		</>
	);
});
