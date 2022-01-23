<template>

  <div>
    <div v-if="isLoading"><Loading /></div>
    <div v-else class="container flex flex-col sm:flex-row justify-around max-w-full">
    <div class="pt-20">
      <h1 class="text-3xl font-bold text-center border-b-4 border-green-400">Track Parcel</h1>
      <h3 class="text-2xl font-medium text-left pt-20">{{order.code}}</h3>
    </div>
    <div class="pt-40">
      <div class="pb-5">
        <h1 class="text-4xl text-black font-bold text-left pb-6">Payment Status</h1>
        <h2 class="text-3xl text-green-600 font-bold pb-10">{{order.payment_status}}</h2>
      </div>
      <div> 
         <h1 class="text-4xl text-black font-bold text-left pb-6">Order Status</h1>
        <h2 class="text-3xl text-green-600 font-bold">{{order.status}}</h2>
      </div>
    </div>
    <div class="h-screen w-1/3 bg-gray-200">
      <h1 class="text-3xl font-bold text-center pb-20">Order Info</h1>
      <p class="text-xl font-medium text-left pl-4">Customer Name</p>
      <p class="text-xl font-bold text-left font-bold pl-6 pb-3">{{order.customerName}}</p>
      <p class="text-xl font-medium text-left pl-4">Customer Phone</p>
      <p class="text-xl font-bold text-left font-bold pl-6 pb-3">0{{order.customerPhone}}</p>
      <p class="text-xl font-medium text-left pl-4">Customer address</p>
      <p class="text-xl font-bold text-left font-bold pl-6 pb-3">{{order.customerAddress}} </p>
      <p class="text-xl font-medium text-left pl-4">Collection Money</p>
      <p class="text-3xl text-green-600 font-bold text-left font-bold pl-6 pb-3">{{order.productPrice}}</p>
      <p class="text-xl font-medium text-left pl-4">Delivery charge</p>
      <p class="text-3xl font-bold text-red-600 text-left font-bold pl-6 pb-3">{{order.delivery_fee}}</p>
    </div>
  </div>
  </div>
</template>

<script>
import Loading from "~/components/common/loading.vue";
export default {
  layout: "dashboard",
  data(){
    return {
      order:[],
      isLoading:true,
    }
  },
  components: {
    Loading,
  },
  mounted() {
    this.getOrders();
  },

   methods: {
    async getOrders() {
      const res = await this.$axios.$get("/api/orderss/code/"+this.$route.params.id);
      this.order = res;
      this.isLoading=false
      console.log(this.order);
    },

   }
};
</script>