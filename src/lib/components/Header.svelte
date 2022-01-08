<script lang="ts">
  import DarkModeToggle from "./DarkModeToggle.svelte";
  import Logo from "./Logo.svelte";
</script>

<header class="bg-gray lg:rounded-r-2xl">
  <div
    class="flex divide-x divide-[#494e63] lg:flex-col lg:h-full lg:divide-x-0 lg:divide-y"
  >
    <div class="grow flex justify-between items-center lg:flex-col">
      <Logo />
      <DarkModeToggle />
    </div>
    <div
      class="flex items-center ml-6 px-6 sm:ml-8 sm:px-8 lg:flex-col lg:ml-0 lg:mt-6 lg:px-0 lg:py-6"
    >
      <div class="w-8 h-8 rounded-full bg-light-blue-400" />
    </div>
  </div>
</header>
