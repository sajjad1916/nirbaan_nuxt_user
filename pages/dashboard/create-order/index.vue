<template>
  <div>
    <div v-if="isLoading"><Loading /></div>
    <div v-else class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="w-full px-4 md:px-8 mx-auto">
        <form @submit.prevent="PlaceOrder">
          <!-- text - start -->
          <div class="mb-10 md:mb-16">
            <label
              for="company"
              class="block text-gray-800 text-3xl font-bold mb-2"
              >Pickup Location</label
            >
            <input
              name="MerchantAddress"
              v-model="MerchantAddress"
              class="
                w-3/4
                bg-gray-50
                text-gray-800
                border
                focus:ring
                ring-indigo-300
                rounded
                outline-none
                transition
                duration-100
                px-3
                py-2
                mb-2
              "
            />

            <p class="block text-gray-800 text-base font-bold mb-2">
              Please enter your full address.
            </p>
          </div>
          <!-- text - end -->

          <div class="grid gap-5 mx-auto">
            <div>
              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Services</label
                >
                <v-select
                  v-model="PackageTypesId"
                  :options="PackageTypes"
                  :reduce="(option) => option.id"
                  label="description"
                  class="
                    appearance-none
                    w-9/12
                    bg-gray-100
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                  "
                >
                </v-select>
              </div>

              <div>
                <label
                  for="first-name"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Customer Name</label
                >
                <input
                  name="customerName"
                  v-model="CustomerName"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                  "
                />
              </div>

              <div>
                <label
                  for="last-name"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Customer Phone</label
                >
                <input
                  name="customerPhone"
                  v-model="CustomerPhone"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                  "
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Customer Address</label
                >
                <input
                  name="CustomerAddress"
                  v-model="CustomerAddress"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-10
                  "
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Delivery Area</label
                >
                <v-select
                  v-model="DeliveryHub"
                  :options="AreaOption"
                  class="
                    appearance-none
                    w-9/12
                    bg-gray-100
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                  "
                >
                </v-select>
              </div>
              <div>
                <label
                  for="first-name"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Merchant Name</label
                >
                <input
                  name="MerchantName"
                  v-model="MerchantName"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                  "
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Merchant Phone</label
                >
                <input
                  name="MerchantPhone"
                  v-model="MerchantPhone"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                  "
                />
              </div>
            </div>

            <div>
              <div class="sm:col-span-2">
                <label
                  for="ProductWeight"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Product Weight</label
                >
                <v-select
                  name="ProductWeight"
                  :reduce="(option) => option.deliveryFee"
                  :options="ProductWeights"
                  label="distanceAmount"
                  v-model="ProductWeight"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-2
                  "
                >
                </v-select>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="ProductPrice"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Product Price</label
                >
                <input
                  name="ProductPrice"
                  v-model="ProductPrice"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-2
                  "
                />
              </div>

              <div
                class="sm:col-span-2"
                v-if="this.PackageTypesId == 'Food Delivery'"
              >
                <label
                  for="company"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Approximate Distance</label
                >
                <v-select
                  v-model="DeliveryFee"
                  :reduce="(option) => option.deliveryFee"
                  label="distanceAmount"
                  :options="Distance"
                  class="
                    appearance-none
                    w-9/12
                    bg-gray-100
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-10
                  "
                >
                </v-select>
              </div>

              <div
                class="sm:col-span-2"
                v-else-if="this.PackageTypesId == 'Birthday Cake Delivery'"
              >
                <label
                  for="company"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Approximate Distance</label
                >
                <v-select
                  v-model="DeliveryFee"
                  :reduce="(option) => option.deliveryFee"
                  label="distanceAmount"
                  :options="BirthdayDistance"
                  class="
                    appearance-none
                    w-9/12
                    bg-gray-100
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-10
                  "
                >
                </v-select>
              </div>

              <div class="sm:col-span-2" v-else>
                <label
                  for="company"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Delivery Location</label
                >
                <v-select
                  v-model="DeliveryFee"
                  :reduce="(option) => option.deliveryFee"
                  label="distanceAmount"
                  :options="ParcelDelivery"
                  class="
                    appearance-none
                    w-9/12
                    bg-gray-100
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-10
                  "
                >
                </v-select>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="company"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Parcel Type</label
                >
                <v-select
                  :options="ParcelTypes"
                  class="
                    appearance-none
                    w-9/12
                    bg-gray-100
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-10
                  "
                >
                </v-select>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="ProductWeight"
                  class="block text-gray-800 text-sm sm:text-base mb-2"
                  >Payment Method</label
                >
                <v-select
                  name="PaymentMethodsId"
                  :reduce="(option) => option.id"
                  :options="PaymentMethods"
                  label="name"
                  v-model="PaymentMethodsId"
                  class="
                    w-3/4
                    bg-gray-50
                    text-gray-800
                    border
                    focus:ring
                    ring-indigo-300
                    rounded
                    outline-none
                    transition
                    duration-100
                    px-3
                    py-2
                    mb-2
                  "
                >
                </v-select>
              </div>

              <div class="sm:col-span-2 pt-2">
                <p class="text-xl font-bold pb-2">
                  Collection Money : {{ this.ProductPrice }}
                  <br />
                  Delivery Charge:
                  {{ this.DeliveryFee + this.ProductWeight }}
                </p>
                <p class="text-2xl font-bold">
                  Total:
                  {{
                    parseInt(this.ProductPrice || 0) -
                    parseInt(this.DeliveryFee + this.ProductWeight || 0)
                  }}
                </p>
              </div>
            </div>

            <div class="sm:col-span-2 flex justify-center items-center">
              <button
                class="
                  w-1/2
                  block
                  bg-indigo-500
                  hover:bg-indigo-600
                  active:bg-indigo-700
                  focus-visible:ring
                  ring-indigo-300
                  text-white text-sm
                  md:text-base
                  font-semibold
                  text-center
                  rounded-lg
                  outline-none
                  transition
                  duration-100
                  px-8
                  py-3
                "
              >
                Place Now
              </button>
            </div>

            <p class="text-gray-400 text-xs">
              By signing up to our newsletter you agree to our
              <a
                href="#"
                class="
                  hover:text-indigo-500
                  active:text-indigo-600
                  underline
                  transition
                  duration-100
                "
                >Privacy Policy</a
              >.
            </p>
          </div>
        </form>
        <!-- form - end -->
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "~/components/common/loading.vue";
export default {
  // middleware:'auth',
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      PackageTypesId: "",
      CustomerName: "",
      CustomerPhone: "",
      CustomerAddress: "",
      DeliveryHub: "",
      MerchantName: "",
      MerchantPhone: "",
      MerchantAddress: "",
      ProductWeight: "",
      ProductPrice: "",
      ParcelType: "",
      AreaOption: [],
      PackageTypes: [],
      ParcelTypes: ["Breakable", "Liquid"],
      PaymentMethods: [],
      PaymentMethodsId: "",
      ProductWeights: [
        {
          distanceAmount: "1KG",
          deliveryFee: 0,
        },
        {
          distanceAmount: "2KG",
          deliveryFee: 30,
        },
        {
          distanceAmount: "3KG",
          deliveryFee: 60,
        },
        {
          distanceAmount: "4KG",
          deliveryFee: 80,
        },
      ],
      Distance: [
        {
          distanceAmount: "1-6 KM",
          deliveryFee: 120,
        },
        {
          distanceAmount: "7-10 KM",
          deliveryFee: 150,
        },
        {
          distanceAmount: "11-15 KM",
          deliveryFee: 180,
        },
      ],
      BirthdayDistance: [
        {
          distanceAmount: "1-6 KM",
          deliveryFee: 150,
        },
        {
          distanceAmount: "7-10 KM",
          deliveryFee: 180,
        },
        {
          distanceAmount: "11-15 KM",
          deliveryFee: 200,
        },
      ],
      ParcelDelivery: [
        {
          distanceAmount: "Inside Dhaka",
          deliveryFee: 60,
        },
        {
          distanceAmount: "Outside Dhaka",
          deliveryFee: 130,
        },
      ],

      DeliveryFee: "",
    };
  },

  mounted() {
    this.getDeliveryArea();
    this.getPackageTypes();
    this.getPaymentTypes();
  },
  layout: "dashboard",

  methods: {
    async PlaceOrder() {
      if (
        !this.CustomerName ||
        !this.CustomerPhone ||
        !this.CustomerAddress ||
        !this.DeliveryHub ||
        !this.MerchantName ||
        !this.MerchantPhone ||
        !this.MerchantAddress ||
        !this.ProductWeight ||
        !this.ProductPrice
      ) {
        alert("Please fill the form");

        return;
      }

      try {
        this.isLoading = true;
        await this.$axios.$get("/sanctum/csrf-cookie");
        await this.$axios
          .$post(
            "/api/orders",
            {
              weight: this.ProductWeight,
              productPrice: this.ProductPrice,
              merchantAddress: this.MerchantAddress,
              customerName: this.CustomerName,
              customerPhone: this.CustomerPhone,
              customerAddress: this.CustomerAddress,
              productClass: this.ProductClass,
              deliveryHub: this.DeliveryHub,
              delivery_fee: this.DeliveryFee + this.ProductWeight,
              package_type_id: this.PackageTypesId,
              payment_method_id: this.PaymentMethodsId,
              total: this.ProductPrice,
            },
            {
              headers: {
                Authorization: `Bearer ${this.$auth.$storage.state.user.token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            this.$router.push("/dashboard/orders");
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        this.isLoading = false;
        console.log(err);
      }
    },
    async getDeliveryArea() {
      const res = await this.$axios.$get("/api/delivery");
      for (let i = 0; i < res.length; i++) {
        this.AreaOption.push(res[i].name);
      }
    },
    async getPackageTypes() {
      const res = await this.$axios.$get("/api/package/types");
      this.PackageTypes = res;
    },

    async getPaymentTypes() {
      const res = await this.$axios
        .$get("/api/payment/methods", {
          headers: {
            Authorization: `Bearer ${this.$auth.$storage.state.user.token}`,
          },
        })
        .then((res) => {
          this.PaymentMethods = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>