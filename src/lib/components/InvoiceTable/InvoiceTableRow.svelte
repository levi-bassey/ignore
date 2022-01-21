<script lang="ts">
  export let invoice: any;

  function formatDate(s: string): string {
    const dateObj = new Date(s);

    let date = dateObj.getDate().toString();
    date = date.length === 1 ? `0${date}` : date;
    const month = dateObj.toLocaleDateString("default", { month: "short" });
    const year = dateObj.getFullYear();

    return `${date} ${month} ${year}`;
  }

  function formatCurrency(num: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });

    return formatter.format(num);
  }
</script>

<tbody class="block rounded-lg px-6 py-4 bg-white">
  <tr class="grid grid-cols-2 gap-y-2 md:grid-cols-11 md:items-baseline">
    <td class="truncate md:col-span-2">
      <a class="font-bold" href="#"
        ><span class="text-indigo-200">#</span>{invoice.id}</a
      >
    </td>
    <td class="justify-self-end truncate md:col-span-3 md:justify-self-auto">
      <span class="text-light-blue-300"
        >Due {formatDate(invoice.paymentDue)}</span
      >
    </td>
    <td class="row-start-4 truncate md:col-span-3 md:row-auto">
      <span class="text-light-blue-300 font-medium">{invoice.clientName}</span>
    </td>
    <td
      class="row-start-5 truncate md:col-span-3 md:row-auto md:justify-self-end"
    >
      <span class="font-bold text-base">
        {formatCurrency(invoice.total)}
      </span>
    </td>
    <td
      class="justify-self-end self-center col-start-2 row-start-4 row-end-6 md:col-start-12 md:row-auto md:self-auto"
    >
      <div class="md:w-40 md:flex md:items-center">
        <div
          class:text-green={invoice.status === "paid"}
          class:bg-green={invoice.status === "paid"}
          class:text-orange={invoice.status === "pending"}
          class:bg-orange={invoice.status === "pending"}
          class="ml-auto flex items-center justify-center w-24 rounded-md bg-opacity-5 py-3 font-bold"
        >
          <span
            class:bg-green={invoice.status === "paid"}
            class:bg-orange={invoice.status === "pending"}
            class="w-2 h-2 rounded-full"
          />
          <span class="ml-2">{invoice.status}</span>
        </div>
        <svg
          class="hidden ml-5 w-2 h-2.5 stroke-indigo-200 stroke-2 md:block"
          viewBox="0 0 7 10"
          fill="none"
        >
          <path d="M1 1L5 5L1 9" />
        </svg>
      </div>
    </td>
  </tr>
</tbody>
