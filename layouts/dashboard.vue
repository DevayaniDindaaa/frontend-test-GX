<script setup lang="ts">
import Logo from "../assets/svg/logo.svg?component";
</script>

<template>
    <div>
        <div class="min-h-screen flex flex-col lg:relative z-10">
            <header
                class="flex py-5 h-[7rem] justify-between items-center lg:h-auto lg:mx-auto lg:max-w-[1140px] w-full lg:px-0 px-5">
                <div class="flex flex-row items-center space-x-2">
                    <Logo class="h-[3.6rem] block w-auto fill-syn-blue-800" />
                    <div
                        class="px-3 py-1 rounded-full bg-gradient-to-r from-orange-gradient-1000 to-orange-gradient-500 text-black body-tiny-semibold">
                        Beta
                    </div>
                </div>
            </header>
            <slot />
        </div>
    </div>
    <div class="bg-syn-blue-900">
        <footer class="bg-syn-blue-900 lg:mx-auto lg:max-w-[1140px]">
            <div class="flex flex-row items-center py-[30px] justify-between">
                <Logo class="h-[2.8rem] block w-auto fill-white" />
                <div>
                    <div class="body-tiny-medium text-white">&#xA9;SynChat All Rights
                        Reserved&nbsp;&nbsp;|&nbsp;&nbsp;<span
                            class="underline cursor-pointer">Legal</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span
                            class="underline cursor-pointer">Privacy policy</span></div>
                </div>
            </div>
        </footer>
    </div>
</template>