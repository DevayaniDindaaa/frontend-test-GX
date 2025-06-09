<script setup lang="ts">
import Hexagon from "../assets/svg/hexagon.svg?component";
import Cost from "../assets/svg/cost.svg?component";
import Secure from "../assets/svg/secure.svg?component";
import Scalable from "../assets/svg/scalable.svg?component";
</script>

<template>
    <div class="flex flex-col items-center justify-center text-center">
        <h2 class="uppercase text-white">
            How can we support your work
        </h2>
        <div class="flex flex-col lg:grid grid-cols-3 gap-14 lg:mt-20 mt-10">
            <div class="flex flex-col items-center">
                <div class="relative flex items-center justify-center w-[97px] h-[105px] mb-7">
                    <div class="absolute inset-0">
                        <Hexagon />
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center w-full h-full">
                        <Cost />
                    </div>
                </div>
                <h3 class="uppercase text-white mb-2.5">
                    COST EFFECTIVE
                </h3>
                <p class="body-medium-normal text-slightly-white-900">
                    This paragraph mainly talk about our advanced and smarter AI that are
                </p>
            </div>

            <div class="flex flex-col items-center">
                <div class="relative flex items-center justify-center w-[97px] h-[105px] mb-7">
                    <div class="absolute inset-0">
                        <Hexagon />
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center w-full h-full">
                        <Secure />
                    </div>
                </div>
                <h3 class="uppercase text-white mb-2.5">
                    SECURE
                </h3>
                <p class="body-medium-normal text-slightly-white-900">
                    Establishing partnerships with local businesses and technology providers
                </p>
            </div>

            <div class="flex flex-col items-center">
                <div class="relative flex items-center justify-center w-[97px] h-[105px] mb-7">
                    <div class="absolute inset-0">
                        <Hexagon />
                    </div>
                    <div class="absolute inset-0 flex items-center justify-center w-full h-full">
                        <Scalable />
                    </div>
                </div>
                <h3 class="uppercase text-white mb-2.5">
                    SCALABLE
                </h3>
                <p class="body-medium-normal text-slightly-white-900">
                    We ensure the platform scalable to handle the growth of user businesses
                </p>
            </div>
        </div>
    </div>
</template>