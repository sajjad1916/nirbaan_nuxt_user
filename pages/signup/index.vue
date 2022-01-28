<template>
  <div>
    <Navbar />
    <div class="bg-white py-6 sm:py-6 lg:py-10">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2
            class="
              text-gray-800 text-2xl
              lg:text-3xl
              font-bold
              text-center
              mb-4
              md:mb-6
            "
          >
            Registration
          </h2>
        </div>
        <!-- text - end -->

        <!-- form - start -->
        <form
          class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto rounded-lg"
          @submit.prevent="signup"
        >
          <div>
            <label
              for="first-name"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Name</label
            >
            <input
              name="name"
              v-model="name"
              type="text"
              class="
                w-full
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
              for="email"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Email</label
            >
            <input
              name="email"
              v-model="email"
              type="email"
              class="
                w-full
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
              for="phone"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Phone</label
            >
            <input
              name="phone"
              v-model="phone"
              class="
                w-full
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
              for="password"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Password</label
            >
            <input
              name="password"
              type="password"
              v-model="password"
              class="
                w-full
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
              for="address"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Address</label
            >
            <input
              name="address"
              v-model="address"
              type="text"
              class="
                w-full
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
              for="pickuparea"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Pickup Area</label
            >
            
            <v-select 
            v-model="pickupArea"
            :options = "option"
              class="
                mb-2
                appearance-none
                w-full
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
              for="pickup-area"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >Account Type</label
            >
            <v-select
              v-model="accountType"
              :options= "accounts"
              class="
                appearance-none
                w-full
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
              for="subject"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Account Number</label
            >
            <input
              name="subject"
              v-model="accountNumber"
              class="
                w-full
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

          <div class="sm:col-span-2 flex justify-center items-center">
            <button
              class="
                block
                w-full
                bg-gray-800
                hover:bg-gray-700
                active:bg-gray-600
                focus-visible:ring
                ring-gray-300
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
                mt-2
              "
              type="submit"
            >
              Register
            </button>
          </div>

          <div
            class="
              sm:col-span-2
              flex
              justify-center
              items-center
              bg-gray-100
              p-4
            "
          >
            <p class="text-gray-500 text-sm text-center">
              Don't have an account?
              <nuxt-link
                tag="a"
                to="/login"
                class="
                  text-indigo-500
                  hover:text-indigo-600
                  active:text-indigo-700
                  transition
                  duration-100
                "
                >Login</nuxt-link
              >
            </p>
          </div>
        </form>
        <!-- form - end -->
      </div>
    </div>
  </div>
</template>

<script>
import guest from '~/middleware/guest';
import Navbar from '~/components/home/Navbar.vue'
export default {
  auth:false,
  middleware:guest,
  components:{Navbar},
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password:"",
      address: "",
      pickupArea: "",
      accountType: "",
      accountNumber: "",
      option: [],
      accounts:[
        "Bkash Personal",
        "Bkash Merchant",
        "Nagad Personal",
        "Nagad Merchant"
      ]
    };
  },
  mounted(){
    this.getDeliveryArea();
    
  },
  methods: {
   async signup() {
       if (!this.password || !this.phone || !this.name || !this.accountType || !this.accountNumber || !this.pickupArea) {
        alert("Please fill the form");
        return;
      }
      if (!this.phoneIsValid(this.phone)) {
        alert("Invalid Input");
      }
    try {
      await this.$axios.$get('sanctum/csrf-cookie')
        const res = await this.$axios.$post('/api/register', {
            name:this.name,
            phone: this.phone,
            email:this.email || '',
            userAddress:this.address,
            password: this.password,
            pickupHub: this.pickupArea,
            actype: this.accountType,
            acnumber:this.accountNumber
        }).then(()=>{
          this.$router.push('/login');
        })
        
         
        console.log(res);
      } catch (err) {
        console.log(err);
      }

    },
     phoneIsValid(phone) {
      const reg = new RegExp("^[0-9]+$");
      return reg.test(phone);
    },
   async getDeliveryArea(){
     const res = await this.$axios.$get(
          "/api/delivery"
        );
        console.log(res);
        
       for(let i=0;i<res.length;i++){
         this.option.push(res[i].name)
       }
    }
  },
};
</script>

<style>
</style>
