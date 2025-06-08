<script setup lang="ts">
import Logo from "../assets/svg/logo.svg?component";
</script>

<template>
    <div>
        <div class="min-h-screen flex flex-col lg:relative z-10">
            <header class="sticky top-0 inset-x-0 z-50 justify-between items-center lg:backdrop-blur-3xl bg-white">
                <div
                    class="flex py-5 h-[5rem] lg:h-[7rem] justify-between items-center lg:h-auto lg:mx-auto lg:max-w-[1140px] w-full lg:px-0 px-5">
                    <div class="flex flex-row items-center space-x-2">
                        <Logo class="h-[3rem] lg:h-[3.6rem] block w-auto fill-syn-blue-800" />
                        <div
                            class="px-3 py-1 rounded-full bg-gradient-to-r from-orange-gradient-1000 to-orange-gradient-500 text-black body-small-semibold">
                            Beta
                        </div>
                    </div>
                </div>
            </header>
            <slot />
        </div>
    </div>
    <div class="bg-syn-blue-900">
        <footer class="bg-syn-blue-900 lg:mx-auto lg:max-w-[1140px] lg:px-0 px-5">
            <div
                class="flex flex-col lg:flex-row lg:items-center items-start py-[30px] lg:justify-between gap-4 lg:gap-0">
                <Logo class="h-[2.8rem] block w-auto fill-white" />
                <div class="flex flex-col lg:flex-row text-white body-small-medium gap-2 lg:gap-0">
                    <div class="text-wrap">&#xA9;2024 SynChat All Rights Reserved</div>
                    <div class="hidden lg:block">&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                    <div class="underline cursor-pointer">Legal</div>
                    <div class="hidden lg:block">&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                    <div class="underline cursor-pointer">Privacy policy</div>
                </div>
            </div>
        </footer>
    </div>
</template>