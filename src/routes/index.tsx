import { component$ } from '@builder.io/qwik';

export default component$(() => {
	return (
		<>
			{/* Section 1 — stays full screen */}
			<section class="snap-start min-h-full flex items-center justify-center bg-blue-500">
				<div>content 1</div>
			</section>

			{/* Section 2 — Projects: 4 items, each 1/3 of the available height */}
			<section class="snap-start bg-white">
				<div class="flex flex-col">
					{/* Optional: title/header row for the section (auto height) */}
					<header class="px-6 py-4 sticky top-0 z-20 bg-amber-200/40 backdrop-blur">
						<h2 class="text-2xl font-semibold">Projects</h2>
					</header>

					{/* Items: each takes (100svh - header) / 3 */}
					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] flex items-center justify-center border-b border-slate-200">
						<div class="max-w-4xl px-6">
							<h3 class="text-xl font-medium">Project 1</h3>
							<p class="opacity-80">Short blurb about the project.</p>
						</div>
					</article>

					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] flex items-center justify-center border-b border-slate-200">
						<div class="max-w-4xl px-6">
							<h3 class="text-xl font-medium">Project 2</h3>
							<p class="opacity-80">Short blurb about the project.</p>
						</div>
					</article>

					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] flex items-center justify-center border-b border-slate-200">
						<div class="max-w-4xl px-6">
							<h3 class="text-xl font-medium">Project 3</h3>
							<p class="opacity-80">Short blurb about the project.</p>
						</div>
					</article>

					<article class="snap-start min-h-[calc((100svh-var(--header-h))/3)] flex items-center justify-center">
						<div class="max-w-4xl px-6">
							<h3 class="text-xl font-medium">Project 4</h3>
							<p class="opacity-80">Short blurb about the project.</p>
						</div>
					</article>
				</div>
			</section>

			{/* Section 3 — stays full screen */}
			<section class="snap-start min-h-full flex items-center justify-center bg-emerald-300">
				<div>content 3</div>
			</section>


			{/* (Optional) Footer as a snapped “last screen” */}
			{/* <section class="snap-start min-h-[100svh] flex items-center justify-center bg-white">
				<SiteFooter />
			</section> */}
		</>
	);
});
