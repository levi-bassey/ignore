<script>
  import Header from "$lib/components/Header.svelte";
  import "../app.css";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="relative flex flex-col h-screen font-spartan lg:flex-row">
  <Header />

  <main class="grow overflow-y-auto">
    <slot />
  </main>
</div>
