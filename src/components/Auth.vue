<template>
  <!--  Register Form-->
  <vee-form
    :validation-schema="schema"
    class="lg:pl-16 lg:pr-28 px-10 md:py-16 py-10"
    v-show="tab === 'register'"
  >
    <h3 class="max-w-sm lg:pr-36 text-3xl font-bold text-[#1E1E64]">
      Create your account
    </h3>
    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Name</label>
      <vee-field
        type="text"
        name="name"
        placeholder="Enter name"
        class="p-3 mt-0.5 border w-full rounded-md placeholder:text-sm outline-blue-500"
      />
      <ErrorMessage class="text-red-600 text-xs" name="name" />
    </div>
    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Email</label>
      <vee-field
        type="email"
        name="email"
        placeholder="Enter email"
        class="p-3 mt-0.5 border outline-blue-500 w-full rounded-md placeholder:text-sm"
      />
      <ErrorMessage name="email" class="text-red-600 text-xs" />
    </div>
    <div class="mt-5 mb-3">
      <label class="font-semibold text-sm text-[#1E1E64]">Password</label>
      <vee-field
        type="password"
        name="password"
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
  </vee-form>
  <!--  Login Form-->
  <vee-form
    class="lg:pl-16 lg:pr-28 px-10 md:py-16 py-10"
    v-show="tab === 'login'"
  >
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
  </vee-form>
</template>

<script>
import { mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";
export default {
  name: "Auth",
  data() {
    return {
      tab: "register",
      schema: {
        name: "required|min:3|max:100|alpha_spaces",
        email: "required|email",
        password: "required",
      },
    };
  },
  computed: {
    ...mapWritableState(useModalStore, ["isOpen"]),
  },
};
</script>

<style scoped></style>
