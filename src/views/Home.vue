<template>
  <div class="bg-[#EAE6F6] min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col md:flex-row space-y-6 mx-5 bg-gray-100 rounded-2xl shadow-2xl shadow-[#8B8CB2]"
    >
      <!--left-->
      <div
        class="bg-[#1E1E64] text-white space-y-3 md:max-w-xs p-10 md:rounded-l-2xl"
      >
        <h3 class="text-2xl font-medium space-y-4">
          Implement auth user with ease
        </h3>
        <p class="text-sm text-[#8B8CB2]">
          Guide your customer on a fantastic journey within your web app
        </p>
      </div>
      <!--right-->
      <div class="lg:pl-16 lg:pr-28 px-10 md:py-16 py-10">
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
            class="p-3 mt-0.5 border outline-none w-full rounded-md placeholder:text-sm"
          />
        </div>
        <div class="mt-5 mb-3">
          <label class="font-semibold text-sm text-[#1E1E64]">Password</label>
          <input
            type="text"
            placeholder="Enter password"
            class="p-3 mt-0.5 border outline-none w-full rounded-md placeholder:text-sm"
          />
        </div>
        <button
          class="py-4 mt-1 w-full bg-[#1E1E64] text-white font-normal shadow-[#7C7C94] shadow-2xl hover:-translate-y-0.5 duration-200 transition rounded-md"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
