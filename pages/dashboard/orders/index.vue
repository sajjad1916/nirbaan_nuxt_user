<template>
  <div>
    <Sidenav />
    <div class="container mx-auto">
      <Loading v-if="isLoading" />
      <div class="text-center text-2xl pt-4">Orders Table</div>
      <div class="flex flex-col pt-4">
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
                    <!-- <th
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
                    Pickup Area
                  </th> -->
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
                      Merchant Name
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
                      Customer Details
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
                      Stautses
                    </th>
                    <!-- <th
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
                    Payment Info
                  </th> -->
                    <!-- <th
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
                    More Info
                  </th> -->
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
                    <!-- <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-xl
                      font-medium
                      text-black text-center
                    "
                  >
                    pending
                  </td> -->
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
                      <nuxt-link
                        :to="`/dashboard/orders/${item.code}`"
                        tag="a"
                        class="text-black text-blue-600"
                        >{{ item.code }}
                      </nuxt-link>
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
                      {{ item.user.name }}
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
                      {{ item.customerName }} <br />
                      {{ item.customerPhone }} <br />
                      {{ item.customerAddress }}
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
                      {{ item.payment_status }} <br />
                      {{ item.status }}
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
import Sidenav from "~/components/dashboard/Sidenav.vue";
export default {
  data() {
    return {
      isLoading: true,
      orders: [],
      pageOfItems: [],
    };
  },
  components: {
    Loading,
    Sidenav
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      this.isLoading = true;
       await this.$axios
        .$get("/api/orders", {
          headers: {
            Authorization: `Bearer ${this.$auth.$storage.state.user.token}`,
          },
        })
        .then((res) => {
          this.orders = res.data;
          console.log(this.orders);
          this.isLoading=false
        }).catch((err)=>{
          console.log(err);
        })
    },

    onChangePage(pageOfItems) {
      console.log(pageOfItems);
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style>
</style>