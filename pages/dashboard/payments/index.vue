<template>
  <div>
    
    <div  class="container">
    <div class="text-left text-3xl text-black pl-6 pt-4">Payments Info</div>
    <div v-if="isLoading"><Loading /></div>
    <div v-else class="flex flex-col pt-4">
      <div class="overflow-x-auto max-w-8xl sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Creation Date
                  </th>
                  <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Code
                  </th>
                  <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Total Cash Collection
                  </th>
                  <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Delivery Charge
                  </th>
                  <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    COD Charge
                  </th>
                   <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Amount Unpaid
                  </th>
                  <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Amount Paid
                  </th>
                  <th
                    scope="col"
                    class="
                      text-xl
                      md:text-2xl
                      font-bold
                      text-black
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Payment Status
                  </th>
                </tr>
              </thead>

              <tbody v-for="item in pageOfItems" :key="item.id">
                <tr class="border-b">
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    {{ item.formatted_date }}
                  </td>
                  
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                   
                      {{ item.code }}
                   
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    {{ item.total }}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    {{ item.delivery_fee }} 
                    
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    0
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    {{item.total - item.delivery_fee}}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    {{item.tip}}
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    {{item.payment_status}}
                  </td>
                </tr>
              </tbody>
              <div class="w-4/5">
                <Jwpagination
                  :pageSize="10"
                  :items="orders"
                  @changePage="onChangePage"
                ></Jwpagination>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Loading from "~/components/common/loading.vue";
export default {
  data() {
    return {
      isLoading:true,
      orders: [],
      pageOfItems: [],
    };
  },
     components: {
    Loading,
  },
  layout: "dashboard",

  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      this.isLoading=true;
      const res = await this.$axios.$get("/api/orders");
      this.orders = res.data;
      this.isLoading=false;
      console.log(this.orders);
    },

    onChangePage(pageOfItems) {
      console.log(pageOfItems);
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>
