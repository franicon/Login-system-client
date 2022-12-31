<template>
  <div
    class="lg:pl-16 lg:pr-28 px-10 md:py-16 py-10"
    v-show="tab === 'register'"
  >
    <h3 class="max-w-sm lg:pr-36 text-3xl font-bold text-[#1E1E64]">
      Create your account
    </h3>
    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Name</label>
      <input
        type="text"
        placeholder="Enter name"
        class="p-3 mt-0.5 border w-full rounded-md placeholder:text-sm outline-blue-500"
      />
    </div>
    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Email</label>
      <input
        type="text"
        placeholder="Enter email"
        class="p-3 mt-0.5 border outline-blue-500 w-full rounded-md placeholder:text-sm"
      />
    </div>
    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Password</label>
      <input
        type="text"
        placeholder="Enter password"
        class="p-3 mt-0.5 border outline-blue-500 transition duration-200 w-full rounded-md placeholder:text-sm"
      />
    </div>
    <button
      class="py-4 mt-1 w-full bg-[#1E1E64] text-white font-normal shadow-[#7C7C94] shadow-2xl hover:-translate-y-0.5 duration-200 transition rounded-md"
    >
      Sign Up
    </button>
    <div class="font-semibold text-sm mt-5 text-[#1E1E64]">
      <p>
        Already have an account?
        <span
          class="text-blue-700 cursor-pointer"
          @click.prevent="tab = 'login'"
          >Log in</span
        >
      </p>
    </div>
  </div>
  <div class="lg:pl-16 lg:pr-28 px-10 md:py-16 py-10" v-show="tab === 'login'">
    <h3 class="max-w-sm lg:pr-36 text-3xl font-bold text-[#1E1E64]">
      Good to see you.
    </h3>

    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Email</label>
      <input
        type="text"
        placeholder="Enter email"
        class="p-3 mt-0.5 border outline-blue-500 w-full rounded-md placeholder:text-sm"
      />
    </div>
    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Password</label>
      <input
        type="text"
        placeholder="Enter password"
        class="p-3 mt-0.5 border outline-blue-500 transition duration-200 w-full rounded-md placeholder:text-sm"
      />
    </div>
    <button
      class="py-4 mt-1 w-full bg-[#1E1E64] text-white font-normal shadow-[#7C7C94] shadow-2xl hover:-translate-y-0.5 duration-200 transition rounded-md"
    >
      Sign in
    </button>
    <div class="font-semibold text-sm mt-5 text-[#1E1E64]">
      <p>
        Don't have an account?
        <span
          class="text-blue-700 cursor-pointer"
          @click.prevent="tab = 'register'"
          >Sign up</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";
export default {
  name: "Auth",
  data() {
    return {
      tab: "register",
    };
  },
  computed: {
    ...mapWritableState(useModalStore, ["isOpen"]),
  },
};
</script>

<style scoped></style>
