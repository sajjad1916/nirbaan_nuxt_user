<template>
  <div>
    <div v-if="this.isLoading"><Loading /></div>
    <div v-else class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2
          class="
            text-gray-800 text-2xl
            lg:text-3xl
            font-bold
            text-center
            mb-4
            md:mb-8
          "
        >
          Login
        </h2>

        <form
          class="max-w-lg border rounded-lg mx-auto"
          @submit.prevent="login"
        >
          <div class="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                for="phone"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >Phone</label
              >
              <input
                name="phone"
                v-model="form.phone"
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
                v-model="form.password"
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

            <button
              class="
                block
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
              "
              type="submit"
            >
              Login
            </button>
          </div>

          <div class="flex justify-center items-center bg-gray-100 p-4">
            <p class="text-gray-500 text-sm text-center">
              Don't have an account?
              <nuxt-link
                tag="a"
                to="/signup"
                class="
                  text-indigo-500
                  hover:text-indigo-600
                  active:text-indigo-700
                  transition
                  duration-100
                "
                >Register</nuxt-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "~/components/dashboard/sidebar.vue";
import guest from "~/middleware/guest";
import Loading from "~/components/common/loading.vue";
export default {
  components: { sidebar, Loading },
  middleware: guest,
  data: () => ({
    form: {
      phone: "",
      password: "",
    },
    isLoading: false,
    user: {},
  }),

  methods: {
    async login() {
      // if (!this.form.password || !this.form.phone) {
      //   alert("Please fill the form");
      //   return;
      // }
      // if (!this.phoneIsValid(this.form.phone)) {
      //   alert("Invalid Input");
      // }
      // try {
      //   this.isLoading = true;
      //   await this.$axios.$get("sanctum/csrf-cookie").then(()=>{
      //     this.$auth.loginWith("laravelSanctum", { data: this.form });
      //     this.$auth.$storage.setUniversal("user", res.data);
      //     this.$auth.$storage.setUniversal("loggedIn", true);
      //     console.log(this.$auth.user);
      //     this.$router.push("/dashboard");
      //   }).catch((err)=>{
      //     console.log(err)
      //   })
      // await this.$auth
      //   .loginWith("laravelSanctum", { data: this.form })
      //   .then((res) => {
      //     this.$auth.$storage.setUniversal("user", res.data);
      //
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // this.isLoading = false;
      // console.log(this.$auth.user);
      // this.$router.push('/api/user');
      // this.$router.push("/dashboard");
      // } catch {
      //   console.log("error occured");
      // }
      await this.$axios
        .$get("https://phplaravel-670314-2397630.cloudwaysapps.com/sanctum/csrf-cookie")
        .then(() => {
          this.$auth
            .loginWith("laravelSanctum", {
              data: {
                phone: "1963629753",
                password: "12345678",
              },
            })
            .then((res) => {
              console.log(this.$auth.$storage.state.user.token);
              this.$auth.$storage.setUniversal("user", res.data);
              this.$auth.$storage.setUniversal("loggedIn", true);
              this.$axios
                .$get("/api/user", {
                  headers: {
                    Authorization: `Bearer ${res.data.token}`,
                  },

                })
                .then((res) => {
                  console.log(res)
                  
                  this.$router.push("/dashboard");
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    phoneIsValid(phone) {
      const reg = new RegExp("^[0-9]+$");
      return reg.test(phone);
    },
  },
};
</script>

<style>
</style>