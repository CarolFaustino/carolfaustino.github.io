import { component$ } from '@builder.io/qwik';

// some page file
export default component$(() => {
	return (
		<>
			<section class="bg-blue-500 min-h-0 flex-1 flex items-center justify-center">
				<div>content 1</div>
			</section>
			<section class="bg-amber-300 min-h-0 flex-1 flex items-center justify-center">
				<div>content 2</div>
			</section>
		</>
	);
});
