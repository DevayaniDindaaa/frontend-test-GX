<script setup lang="ts">
import { ref } from 'vue'

import ArrowUpRight from "../assets/svg/arrow-up-right.svg?component";
import WhatsappFill from "../assets/svg/whatsapp-fill.svg?component";

const form = ref({
    name: '',
    email: '',
    message: ''
})

</script>

<template>
    <div class="flex flex-col items-center justify-center text-center gap-10">
        <h2 class="uppercase text-syn-bue-800 lg:w-[60%] mx-auto">
            it’s time for a <span class="text-syn-blue-500">Hassle-free</span> customer support
        </h2>
        <div class="body-large-normal text-syn-blue-300 lg:w-[60%] mx-auto">
            The future of CX is here. We get you job done with a seamless interaction
            using advanced Integration, self-learning AI and wide range of customizations
            make it more human and relevant.
        </div>
        <button type="button"
            class="flex w-fit justify-center body-large-semibold items-center rounded-full px-8 py-4 focus:outline-none text-syn-blue-500 whitespace-nowrap bg-white border border-syn-blue-500"
            @click="">
            Register beta trial
        </button>
        <div class="flex flex-col items-center justify-center text-center gap-2 mt-[30px]">
            <div class="flex flex-col lg:grid grid-cols-[2fr,3fr] gap-10 p-2 items-center">
                <div
                    class="w-full h-full bg-slightly-white-800 border border-slightly-white-700 rounded-3xl py-[50px] px-[55px]">
                    <div class="flex flex-col gap-7 justify-between h-full">
                        <div class="flex flex-col gap-4 text-left">
                            <h3 class="text-black">AI SMART ASSISTANT</h3>
                            <p class="text-syn-blue-300 body-medium-normal">mengintegrasikan kecerdasan buatan GPT dan
                                Gemini
                                untuk memudahkan perusahaan dalam berkomunikasi dengan pelanggan</p>
                        </div>
                        <img class="flex h-fit lg:w-3/4 mx-auto" src="/img/img-section-21.webp" alt="img-21" />
                    </div>
                </div>
                <div
                    class="w-full h-full bg-slightly-white-800 border border-slightly-white-700 rounded-3xl py-[50px] px-[55px]">
                    <div class="flex flex-col gap-7 justify-between h-full">
                        <div class="flex flex-col gap-4 text-left">
                            <h3 class="text-black">ACCURATE CUSTOMER SUPPORT BASED ON REAL DATA</h3>
                            <p class="text-syn-blue-300 body-medium-normal">fokus pada personalisasi, SynChat
                                memungkinkan
                                pengguna mendapatkan informasi relevan secara cepat dan akurat</p>
                        </div>
                        <img class="flex h-fit lg:w-3/4 mx-auto" src="/img/img-section-22.webp" alt="img-22" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:grid grid-cols-[3fr,2fr] gap-10 p-2 items-center">
                <div
                    class="w-full h-full bg-slightly-white-800 border border-slightly-white-700 rounded-3xl py-[50px] px-[55px]">
                    <div class="flex flex-col gap-7 justify-between h-full">
                        <div class="flex flex-col gap-4 text-left">
                            <h3 class="text-black">Personalized Branding Solutions</h3>
                            <p class="text-syn-blue-300 body-medium-normal">SynChat menawarkan kemampuan custom branding
                                dan
                                personalisasi bahasa, serta pemetaan product knowledge sesuai kebutuhan perusahaan</p>
                        </div>
                        <img class="flex h-fit lg:w-3/4 mx-auto" src="/img/img-section-23.webp" alt="img-23" />
                    </div>
                </div>
                <div
                    class="w-full h-full bg-slightly-white-800 border border-slightly-white-700 rounded-3xl py-[50px] px-[55px]">
                    <div class="flex flex-col gap-7 justify-between h-full">
                        <div class="flex flex-col gap-4 text-left">
                            <h3 class="text-black">OmniChannel Chatbot Integration</h3>
                            <p class="text-syn-blue-300 body-medium-normal">Integrasi dengan media sosial memastikan
                                bahwa
                                komunikasi tetap lancar dan terhubung di berbagai platform.</p>
                        </div>
                        <img class="flex h-fit w-fit mx-auto" src="/img/img-section-24.webp" alt="img-24" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>