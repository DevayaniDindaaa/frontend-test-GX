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
    <div class="flex flex-col items-center justify-center text-center">
        <h2 class="uppercase text-syn-bue-800 lg:w-[60%] mx-auto">
            Get <span class="text-syn-blue-500">more solutions</span> for your business needs
        </h2>
        <div class="flex flex-col lg:grid grid-cols-2 gap-5 lg:mt-20 mt-10">
            <div class="flex flex-col lg:w-[80%] gap-[30px]">
                <div class="body-large-normal text-syn-blue-300 text-justify">
                    Still have any questions about AI chatbot? Get in touch with our dedicated team and explore how
                    we
                    can support your works
                </div>
                <div class="flex flex-col items-start">
                    <div class="text-syn-blue-800 body-large-extrabold">
                        Location
                    </div>
                    <div class="flex flex-row items-end gap-2">
                        <div class="text-syn-blue-500 body-large-medium text-left underline">Contoso Ltd. <br />215
                            E
                            Tasman Dr, Po Box 65502</div>
                        <ArrowUpRight />
                    </div>
                    <div class="text-syn-blue-800 body-large-extrabold mt-5">
                        Phone <span class="text-syn-blue-500 body-large-medium">+62-81 3456-7890 (Voice Call)</span>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-5 items-center">
                    <button type="button"
                        class="flex w-fit justify-center body-large-semibold items-center rounded-full px-8 py-4 focus:outline-none text-syn-blue-500 whitespace-nowrap bg-white border border-syn-blue-500"
                        @click="">
                        customersupport@synchat.com
                    </button>
                    <button type="button"
                        class="flex w-fit justify-center body-large-semibold items-center rounded-full p-4 focus:outline-none text-syn-blue-500 whitespace-nowrap bg-white border border-syn-blue-500"
                        @click="">
                        <WhatsappFill />
                    </button>
                </div>
            </div>
            <form class="flex flex-col lg:w-[90%] gap-[30px] text-left justify-self-end lg:mt-0 mt-5">
                <div>
                    <label for="name" class="block body-large-medium text-syn-bue-800">Your Name</label>
                    <input id="name" type="text" v-model="form.name"
                        class="mt-1 w-full rounded-lg border border-slightly-white-700 bg-slightly-white-800 p-2 focus:outline-none focus:ring-2 focus:ring-syn-blue-500 text-syn-blue-300" />
                </div>

                <div>
                    <label for="email" class="block body-large-medium text-syn-bue-800">Email</label>
                    <input id="email" type="email" v-model="form.email"
                        class="mt-1 w-full rounded-lg border border-slightly-white-700 bg-slightly-white-800 p-2 focus:outline-none focus:ring-2 focus:ring-syn-blue-500 text-syn-blue-300" />
                </div>

                <div>
                    <label for="message" class="block body-large-medium text-syn-bue-800">What can we help?</label>
                    <textarea id="message" rows="5" v-model="form.message"
                        class="mt-1 w-full rounded-lg border border-slightly-white-700 bg-slightly-white-800 p-2 focus:outline-none focus:ring-2 focus:ring-syn-blue-500 text-syn-blue-300"></textarea>
                </div>

                <div class="flex lg:justify-end justify-center">
                    <button type="submit"
                        class="w-fit rounded-full bg-syn-blue-500 px-8 py-2 text-white body-large-semibold hover:bg-syn-blue-800">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>