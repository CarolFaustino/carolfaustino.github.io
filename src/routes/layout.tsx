import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SiteFooter } from '~/components/site-footer';
import { SiteHeader } from '~/components/site-header';

export default component$(() => {
	return (
		<div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
			<SiteHeader />
			<main class="flex-1">
				<Slot />
			</main>
			<SiteFooter />
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
