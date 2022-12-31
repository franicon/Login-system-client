<template>
  <div class="bg-[#EAE6F6] min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col md:flex-row space-y-6 mx-5 bg-white rounded-2xl shadow-2xl shadow-[#8B8CB2]"
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
      <Auth />
    </div>
  </div>
</template>

<script>
import Auth from "@/components/Auth.vue";

export default {
  name: "Home",
  components: { Auth },
};
</script>

<style scoped></style>
