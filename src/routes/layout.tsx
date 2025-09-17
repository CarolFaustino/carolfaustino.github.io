import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div id="layout">
      <header>My site header</header>
      <main>
        <Slot /> {/* child pages get rendered here */}
      </main>
      <footer>My site footer</footer>
    </div>
  );
});
