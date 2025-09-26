import { component$ } from '@builder.io/qwik';

export const SiteFooter = component$(() => (
	<footer class="border-t border-slate-200">
		<div class="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
			© {new Date().getFullYear()} Carol Faustino — Animator & Illustrator
		</div>
	</footer>
));
