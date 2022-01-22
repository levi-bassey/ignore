<script lang="ts">
  let isOpen = false;

  const close = () => (isOpen = false);

  function open(node: Element) {
    document.addEventListener("click", close);

    return {
      destroy: () => {
        document.removeEventListener("click", close);
      },
    };
  }
</script>

<div on:click|stopPropagation class="relative ml-auto">
  <button class="flex items-center" on:click={() => (isOpen = !isOpen)}>
    <span class="font-bold md:hidden">Filter</span>
    <span class="font-bold hidden md:block"> Filter by status </span>
    <svg
      class="ml-3 w-2.5 h-2 stroke-indigo-200 stroke-2 md:ml-4"
      class:rotate-180={isOpen}
      viewBox="0 0 10 7"
      fill="none"
    >
      <path d="M1 1L5.2279 5.2279L9.4558 1" />
    </svg>
  </button>

  {#if isOpen}
    <div
      use:open
      class="absolute top-8 right-1/2 translate-x-1/2 w-48 rounded-lg p-6 shadow-lg bg-white"
    >
      <ul class="space-y-4">
        <li>
          <label class="flex items-center">
            <input
              type="checkbox"
              name="status"
              class="border-none rounded-sm bg-light-blue-200 checked:text-indigo-200"
            />
            <span class="ml-3.5 font-bold">Pending</span>
          </label>
        </li>
        <li>
          <label class="flex items-center">
            <input
              type="checkbox"
              name="status"
              class="border-none rounded-sm bg-light-blue-200 checked:text-indigo-200"
            />
            <span class="ml-3.5 font-bold">Paid</span>
          </label>
        </li>
      </ul>
    </div>
  {/if}
</div>
