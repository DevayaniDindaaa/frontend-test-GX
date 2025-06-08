<script setup lang="ts">

definePageMeta({
    layout: "dashboard"
});

</script>

<template>
    <div class="flex flex-col">
        <main>
            <Section1 class="container lg:py-20 py-10 lg:max-w-[1140px] mx-auto lg:px-0 px-5" />
            <Section2 class="container lg:py-[6.24rem] py-10 lg:max-w-[1140px] mx-auto lg:px-0 px-5" />
            <div class="relative bg-syn-blue-900 overflow-hidden">
                <img src="/img/vector-section-3.webp" alt="vector-3"
                    class="hidden lg:block absolute top-0 right-0 w-[380px] pointer-events-none select-none" />

                <Section3
                    class="container bg-syn-blue-900 lg:py-[6.24rem] py-10 lg:max-w-[1140px] mx-auto lg:px-0 px-5" />
            </div>
            <div class="bg-syn-blue-500">
                <Section4
                    class="container bg-syn-blue-500 lg:py-[6.24rem] py-10 lg:max-w-[1140px] mx-auto lg:px-0 px-5" />
            </div>
            <Section5 class="container lg:py-[6.24rem] py-10 lg:max-w-[1140px] mx-auto lg:px-0 px-5" />
            <div class="bg-syn-blue-500">
                <Section6
                    class="container bg-syn-blue-500 lg:py-[7.25rem] py-10 lg:max-w-[1140px] mx-auto lg:px-0 px-5" />
            </div>
        </main>
    </div>
</template>
