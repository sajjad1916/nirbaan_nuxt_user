<template>
  <div class="bg-gray-100 font-family-karla flex">
    <mainSidebar />
    <div class="w-full flex flex-col h-screen overflow-y-scroll">
      <!-- Desktop Header -->
      <header class="w-full items-center bg-gray-200 py-2 px-6 hidden sm:flex">
        <div class="w-1/2"></div>
        <div class="relative w-1/2 flex justify-end">
          <button
            @click="isOpen = !isOpen"
            class="realtive z-10 w-12 h-12 overflow-hidden focus:outline-none"
          >
            Profile
          </button>
          <!--<button
            x-show="isOpen"
            @click="isOpen = false"
            class="h-full w-full fixed inset-0 cursor-default"
          ></button>-->
          <div
            :class="{ hide: !isOpen }"
            class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16"
          >
            <a href="#" class="block px-4 py-2 account-link hover:text-white"
              >Account</a
            >
            <a href="#" class="block px-4 py-2 account-link hover:text-white"
              >Support</a
            >
            <a href="#" class="block px-4 py-2 account-link hover:text-white"
              >Sign Out</a
            >
          </div>
        </div>
      </header>

      <!-- Mobile Header & Nav -->
      <header class="w-full bg-sidebar py-5 px-6 sm:hidden">
        <div class="flex items-center justify-between">
          <a
            href=""
            class="
              text-white text-3xl
              font-semibold
              uppercase
              hover:text-gray-300
            "
            >
            Admin
            </a
          >
          <button
            @click="isOpen = !isOpen"
            class="text-white text-3xl focus:outline-none"
          >
            <i x-show="!isOpen" class="fas fa-bars"></i>
            <i x-show="isOpen" class="fas fa-times"></i>
          </button>
        </div>

        <!-- Dropdown Nav -->
        <nav :class="isOpen ? 'flex' : 'hidden'" class="flex flex-col pt-4">
          <a
            href=""
            class="
              flex
              items-center
              active-nav-link
              text-white
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-tachometer-alt mr-3"></i>
            Dashboard
          </a>
          <a
            href=""
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-sticky-note mr-3"></i>
            Blank Page
          </a>
          <a
            href=""
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-table mr-3"></i>
            Tables
          </a>
          <a
            href=""
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-align-left mr-3"></i>
            Forms
          </a>
          <a
            href=""
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-tablet-alt mr-3"></i>
            Tabbed Content
          </a>
          <a
            href=""
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-calendar mr-3"></i>
            Calendar
          </a>
          <a
            href="#"
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-cogs mr-3"></i>
            Support
          </a>
          <a
            href="#"
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-user mr-3"></i>
            My Account
          </a>
          <nuxt-link
            to="/api/logout"
            tag="a"
            class="
              flex
              items-center
              text-white
              opacity-75
              hover:opacity-100
              py-2
              pl-4
              nav-item
            "
          >
            <i class="fas fa-sign-out-alt mr-3"></i>
            Sign Out
          </nuxt-link>
          <button
            class="
              w-full
              bg-white
              cta-btn
              font-semibold
              py-2
              mt-3
              rounded-lg
              shadow-lg
              hover:shadow-xl hover:bg-gray-300
              flex
              items-center
              justify-center
            "
          >
            <i class="fas fa-arrow-circle-up mr-3"></i>Logout
          </button>
        </nav>
      </header>
      <Nuxt />
    </div>
  </div>
</template>
<script>
import mainSidebar from "~/components/dashboard/sidebar.vue";
export default {
  middlewire:"auth",
  components: {
    mainSidebar,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");

.font-family-karla {
  font-family: karla;
}

.bg-sidebar {
  background: #3d68ff;
}

.cta-btn {
  color: #3d68ff;
}

.upgrade-btn {
  background: #1947ee;
}

.upgrade-btn:hover {
  background: #0038fd;
}

.active-nav-link {
  background: #1947ee;
}

.nav-item:hover {
  background: #1947ee;
}

.account-link:hover {
  background: #3d68ff;
}
.hide {
  display: none;
}
.show {
  display: initial;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;
}
.hover\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity)) !important;
}
</style>