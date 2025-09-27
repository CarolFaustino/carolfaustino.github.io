import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SiteFooter } from '~/components/site-footer';
import { SiteHeader } from '~/components/site-header';

export default component$(() => {
  return (
    // Full viewport, column layout
    <div class="h-[100svh] flex flex-col bg-slate-50 text-slate-900">
      {/* Header takes natural height */}
      <header class="sticky top-0 z-50">
        <SiteHeader />
      </header>

      {/* Only scrollable area; fills the rest automatically */}
      <main class="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth">
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
