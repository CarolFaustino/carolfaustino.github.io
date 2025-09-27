import { component$, Slot, useVisibleTask$ } from '@builder.io/qwik';
import { SiteHeader } from '~/components/site-header';

export default component$(() => {
	// Measure header height once visible, and on resize
	useVisibleTask$(() => {
		const root = document.documentElement;
		const header = document.getElementById('site-header');
		const apply = () => {
			if (header) root.style.setProperty('--header-h', `${header.offsetHeight}px`);
		};
		apply();
		const ro = new ResizeObserver(apply);
		if (header) ro.observe(header);
		window.addEventListener('resize', apply, { passive: true });
		return () => {
			ro.disconnect();
			window.removeEventListener('resize', apply);
		};
	});

	return (
		<div class="h-[100svh] flex flex-col bg-slate-50 text-slate-900 relative">
			{/* Fixed, transparent/glassy header overlay */}
			<div id="site-header" class="fixed inset-x-0 top-0 z-50">
				<SiteHeader />
			</div>

			{/* Scroll container; padding top equals real header height */}
			<main class="flex-1 overflow-y-auto scroll-smooth pt-[var(--header-h)] scroll-pt-[var(--header-h)]">
				<Slot />
			</main>
		</div>
	);
});

export const head = {
	title: 'Carol Faustino — Animator & Illustrator',
	meta: [
		{ name: 'description', content: 'Portfolio, reels, and contact.' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
	],
};
