import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <section class="snap-start min-h-full flex items-center justify-center bg-blue-500">
        <div>content 1</div>
      </section>

      <section class="snap-start min-h-full flex items-center justify-center bg-amber-300">
        <div>content 2</div>
      </section>

      <section class="snap-start min-h-full flex items-center justify-center bg-emerald-300">
        <div>content 3</div>
      </section>
    </>
  );
});

