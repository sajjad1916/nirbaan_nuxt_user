<template>
  <div>
    <Sidenav />

    <div class="mx-auto py-10 container text-2xl text-black font-bold">
      <h1>
        Welcome to <span class="text-3xl text-blue-400"> Nirbaan Express</span>
      </h1>
    </div>

    <div class="mx-auto container py-20">
      <h1 class="text-xl lg:text-3xl font-bold py-10 text-left">
        Order Summery
      </h1>
      <div
        class="
          grid
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-4
          py-8
        "
      >
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/cargo.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">
              {{ orders.length }}
            </h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Total Orders
            </h2>
          </div>
        </div>
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/package.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">
              {{ picked.length }}
            </h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Picked
            </h2>
          </div>
        </div>
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/shipped.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">
              {{ shiped.length }}
            </h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Shipment
            </h2>
          </div>
        </div>
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/delivered.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">
              {{ delivered.length }}
            </h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Delivered
            </h2>
          </div>
        </div>

        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/shopping-bag.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">{{failed.length}}</h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Failed Order
            </h2>
          </div>
        </div>
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/product-return.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">0</h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Returned Order
            </h2>
          </div>
        </div>
      </div>
      <hr class="border-dashed border-gray-900" />
      <h1 class="text-xl lg:text-3xl font-bold py-10 text-left pt-10">
        Order Summery
      </h1>
      <div
        class="
          grid
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-8
          py-10
        "
      >
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/money.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">
              {{ total }}
            </h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Collected Amount
            </h2>
          </div>
        </div>
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/paid.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">450</h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Paid Amount
            </h2>
          </div>
        </div>
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/pay.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">450</h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Pending Amount
            </h2>
          </div>
        </div>
        <div
          class="
            flex
            bg-gray-100
            justify-center
            w-80
            lg:border-r
            border-gray-300
            py-8
            mb-8
          "
        >
          <img src="/img/paid.png" class="h-14" alt="" />
          <div class="text-gray-800 pl-12 w-1/2">
            <h1 class="font-bold text-2xl lg:text-3xl tracking-1px">450</h1>
            <h2
              class="
                text-xl
                lg:text-xl
                font-medium
                mt-4
                leading-8
                tracking-wide
              "
            >
              Delivery Charge Paid
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import guest from "~/middleware/guest";
import Loading from "~/components/common/loading.vue";
import Sidenav from "~/components/dashboard/Sidenav.vue";
export default {
  auth: guest,
  // middleware:guest,
  data() {
    return {
      isMenuOpen: false,
      isLoading: true,
      orders: [],
      picked: [],
      shiped: [],
      delivered: [],
      total: 0,
      failed:[],
    };
  },
  components: {
    Loading,
    Sidenav,
  },

  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      try {
        this.isLoading = true;
        const res = await this.$axios.$get("/api/orders", {
          headers: {
            Authorization: `Bearer ${this.$auth.$storage.state.user.token}`,
          },
        });

        this.orders = res.data;
        console.log(this.orders)

        // picked orders
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status == "picked") {
            this.picked.push(res.data[i]);
          }
        }
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status == "shipped" ) {
            this.shiped.push(res.data[i]);
          }
        }
        for (let i = 0; i < res.data.length; i++) {
           if (res.data[i].status == "delivered") {
            this.delivered.push(res.data[i]);
            console.log(this.delivered);
          }
        }

        for (let i = 0; i < res.data.length; i++) {
         
          this.total = this.total + res.data[i].total;
          }
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status == "failed") {
            this.failed.push(res.data[i]);
            
          }
        }
        // for (let i = 0; i < res.data.length; i++) {}
        // for (let i = 0; i < res.data.length; i++) {}

        // console.log(res)
        // .then((res) => {
        //   this.orders = res.data.length;
        //   console.log(res);
        //   this.isLoading = fale;
        // })
        // .catch((err) => {
        //   console.log(err);
        //   this.isLoading = false;
        // });
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