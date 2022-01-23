<template>
  <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
    <div class="p-6">
      <a
        href=""
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >User</a
      >
      <nuxt-link
        tag="button"
        to="/dashboard/create-order"
        class="
          w-full
          bg-white
          cta-btn
          font-semibold
          py-2
          mt-5
          rounded-br-lg rounded-bl-lg rounded-tr-lg
          shadow-lg
          hover:shadow-xl hover:bg-gray-300
          flex
          items-center
          justify-center
        "
      >
        <i class="fas fa-plus mr-3"></i> Create Order
      </nuxt-link>
    </div>
    <nav class="text-white text-base font-semibold pt-3">
      <nuxt-link
        to="/dashboard"
        tag="a"
        class="flex items-center text-white py-4 pl-6 nav-item"
      >
        <i class="fas fa-tachometer-alt mr-3"></i>
        Dashboard
      </nuxt-link>
      <nuxt-link
        tag="a"
        to="/dashboard/orders"
        class="
          flex
          items-center
          text-white
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-sticky-note mr-3"></i>
        Orders
      </nuxt-link>
      <nuxt-link
        to="/dashboard/create-order"
        class="
          flex
          items-center
          text-white
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-table mr-3"></i>
        Create Order
      </nuxt-link>
      <nuxt-link
        to="/dashboard/payments"
        class="
          flex
          items-center
          text-white
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-table mr-3"></i>
        Payments
      </nuxt-link>
    </nav>
    <a
      href="#"
      class="
        absolute
        w-full
        upgrade-btn
        bottom-0
        active-nav-link
        text-white
        flex
        items-center
        justify-center
        py-4
      "
    >
      Logout
    </a>
  </aside>
</template>

<script>
export default {
  components: true
};
</script>

<style>
.nuxt-link-exact-active {
  background: #1947ee;
}
</style>