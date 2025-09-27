import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const SiteHeader = component$(() => {
	const nav = [
		//{ href: '/', label: 'Home' },
		{ href: '/projects/', label: 'Projects' },
		{ href: '/about/', label: 'About' },
		{ href: '/gallery/', label: 'Gallery' },
		//{ href: '/contact/', label: 'Contact' },
	];
	return (
		<header class="backdrop-blur bg-white/70 border-b border-slate-200">
			<div class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
				<Link href="/" class="font-semibold tracking-wide">Carol Faustino</Link>
				<nav class="flex gap-5">
					{nav.map(i => (
						<Link key={i.href} href={i.href} class="hover:underline">{i.label}</Link>
					))}
				</nav>
			</div>
		</header>
	);
});
