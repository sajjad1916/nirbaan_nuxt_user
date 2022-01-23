<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else class="flex flex-col">
      <h1 class="text-3xl font-bold text-left pl-10 pt-10">
        Welcome to Nirbaan Express
      </h1>

      <h1 class="text-2xl font-bold text-center py-10">Order Summery</h1>

      <div class="flex">
        <div class="block md:inline-block w-2/4 md:w-1/4">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3">
                  <i class="fa fa-wallet fa-fw fa-inverse text-indigo-500"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="font-bold text-3xl text-center">
                  <h2>{{ this.orders || "0" }}</h2>
                  <span class="text-green-500"
                    ><i class="fas fa-caret-up"></i
                  ></span>
                </div>
                <h5 class="font-bold text-gray-500">Total Orders</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block w-1/4">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3 bg-gray-300">
                  <i class="fas fa-users fa-fw fa-inverse text-indigo-500"></i>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-3xl">
                  {{ this.pending || "0" }}
                  <span class="text-orange-500"
                    ><i class="fas fa-exchange-alt"></i
                  ></span>
                </h3>
                <h5 class="font-bold text-gray-500">Pending Orders</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block w-1/4">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3 bg-gray-300">
                  <i
                    class="fas fa-user-plus fa-fw fa-inverse text-indigo-500"
                  ></i>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-3xl">
                  {{ this.shiped }}
                  <span class="text-yellow-600"
                    ><i class="fas fa-caret-up"></i
                  ></span>
                </h3>
                <h5 class="font-bold text-gray-500">Shiped Orders</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="inline-block w-1/4">
          <div
            class="
              border-2 border-gray-400 border-dashed
              hover:border-transparent hover:bg-white hover:shadow-xl
              rounded
              p-6
              m-2
              md:mx-10 md:my-6
            "
          >
            <div class="flex flex-col items-center">
              <div class="flex-shrink pr-4">
                <div class="rounded-full p-3 bg-gray-300">
                  <i class="fas fa-server fa-fw fa-inverse text-indigo-500"></i>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-3xl">{{ this.delivered }}</h3>
                <!--  -->
                <h5 class="font-bold text-gray-500">Delivered Orders</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <h1 class="text-2xl font-bold text-center py-10">Payment Summery</h1>
   <div class="flex">
    <div class="inline-block w-1/4">
      <div
        class="
          border-2 border-gray-400 border-dashed
          hover:border-transparent hover:bg-white hover:shadow-xl
          rounded
          p-6
          m-2
          md:mx-10 md:my-6
        "
      >
        <div class="flex flex-col items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-3 bg-gray-300">
              <i class="fa fa-wallet fa-fw fa-inverse text-indigo-500"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-3xl">
              {{ this.orders || "0" }}
              <span class="text-green-500"
                ><i class="fas fa-caret-up"></i
              ></span>
            </h3>
            <h5 class="font-bold text-gray-500">Total Orders</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block w-1/4">
      <div
        class="
          border-2 border-gray-400 border-dashed
          hover:border-transparent hover:bg-white hover:shadow-xl
          rounded
          p-6
          m-2
          md:mx-10 md:my-6
        "
      >
        <div class="flex flex-col items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-3 bg-gray-300">
              <i class="fas fa-users fa-fw fa-inverse text-indigo-500"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-3xl">
              249
              <span class="text-orange-500"
                ><i class="fas fa-exchange-alt"></i
              ></span>
            </h3>
            <h5 class="font-bold text-gray-500">Total Users</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block w-1/4">
      <div
        class="
          border-2 border-gray-400 border-dashed
          hover:border-transparent hover:bg-white hover:shadow-xl
          rounded
          p-6
          m-2
          md:mx-10 md:my-6
        "
      >
        <div class="flex flex-col items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-3 bg-gray-300">
              <i class="fas fa-user-plus fa-fw fa-inverse text-indigo-500"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-3xl">
              2
              <span class="text-yellow-600"
                ><i class="fas fa-caret-up"></i
              ></span>
            </h3>
            <h5 class="font-bold text-gray-500">New Users</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block w-1/4">
      <div
        class="
          border-2 border-gray-400 border-dashed
          hover:border-transparent hover:bg-white hover:shadow-xl
          rounded
          p-6
          m-2
          md:mx-10 md:my-6
        "
      >
        <div class="flex flex-col items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-3 bg-gray-300">
              <i class="fas fa-server fa-fw fa-inverse text-indigo-500"></i>
            </div>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-3xl"> 00</h3>
        
            <h5 class="font-bold text-gray-500">Server Uptime</h5>
          </div>
        </div>
      </div>
    </div>
  </div>-->
    </div>
  </div>
</template>

<script>
import guest from "~/middleware/guest";
import Loading from "~/components/common/loading.vue";
export default {
  auth: guest,
  // middleware:guest,
  layout: "dashboard",
  data() {
    return {
      isLoading: true,
      orders: "",
      pending: "",
      shiped: "",
      delivered: "",
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
      try {
        this.isLoading = true;
        await this.$axios
          .$get("/api/orders",{
                headers: {
                  Authorization: `Bearer ${this.$auth.$storage.state.user.token}`,
                },})
          .then((res) => {
            this.orders = res.data.length;
            console.log(res);
            this.isLoading = fale;
          })
          .catch((err) => {
            console.log(err);
            this.isLoading = false;
          });
        console.log(this.$auth);
      } catch {}

      // const pending = await this.$axios.$get("/api/orderss/pending");
      // this.pending = pending.length;
      // const shipment = await this.$axios.$get("/api/orderss/shipment");
      // this.shiped = shipment.length;
      // const deliver = await this.$axios.$get("/api/orderss/delivered");
      // this.delivered = deliver.length;
      // this.isLoading = false;
    },
  },
};
</script>

<style>
</style>