<script setup lang="ts">

definePageMeta({
    layout: "dashboard"
});

</script>

<template>
    <div class="flex flex-col">
        <main>
            <div class="bg-syn-blue-500">
                <Section4 class="container bg-syn-blue-500 lg:py-[6.24rem] py-10 lg:max-w-[1140px] lg:mx-auto lg:px-0 px-5" />
            </div>
            <Section5 class="container lg:py-[6.24rem] py-10 lg:max-w-[1140px] lg:mx-auto lg:px-0 px-5"/>
            <div class="bg-syn-blue-500">
                <Section6 class="container bg-syn-blue-500 lg:py-[7.25rem] py-10 lg:max-w-[1140px] lg:mx-auto lg:px-0 px-5" />
            </div>
        </main>
    </div>
</template>
