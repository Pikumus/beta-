<script setup></script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="relative flex justify-between items-center ali w-3/4 h-10 rounded-3xl bg-gray-200 overflow-hidden"
    >
      <input
        class="peer h-full w-3/4 bg-gray-200 text-lg text-black placeholder-gray-500 outline-none pl-10 rounded-3xl"
        type="text"
        placeholder="Найти в Ленте"
      />
      <svg
        class="absolute pl-2 m-1 items-center text-gray-500 peer-placeholder-shown:text-gray-500 peer-focus:text-black h-6 w-6 transition-colors duration-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss"></style>
