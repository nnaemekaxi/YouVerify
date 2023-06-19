<template>
            <section class="bg-[#FEFEFE]">
            <div class="w-[100%] h-11 bg-[#46B2C8;] px-4 flex items-center">
                <h1 class="text-white font-semibold text-base">Task</h1>
            </div>
            <div class="w-[100%] h-12 flex flex-row items-center justify-between px-2">
                <h1 v-for="(heading, index) in headings"  :key="index" class="text-[#C4C4C4] font-medium text-sm border-b border-[#023A59] w-[33%]"><span :class="{'text-[#023A59]': activeSlide == index}">{{ heading }}</span></h1>
            </div>
            <ul class="flex flex-col gap-5">
                <li v-for="(task, index) in tasks" class="flex flex-row items-center p-4 gap-8 border-b-2">
                    <section class="flex flex-col">
                        <img :src="task.add" alt="arrow"   class="w-[30px] h-[30px]">
                        <p class="text-[10px] font-medium">{{ task.assign}} <br> {{ task.agent }}</p>
                    </section>
                    <section class="flex flex-col gap-1">
                        <h3 class="text-xs font-medium leading-4">{{ task.name }}</h3>
                        <p class="text-xs font-normal leading-4">{{ task.address }}</p>
                        <p class="flex flex-row gap-2"><img :src=task.image alt="bank"   class="w-3 h-3"> <span class="text-xs font-normal leading-4">{{ task.bankName }}</span> </p>
                        <p class="text-xs font-medium text-[#3056D3] leading-4">{{ task.visibility }}</p>
                    </section>
                    <img src="../assets/images/right.png" alt="right"   class="w-3 h-4">
                </li> 
            </ul>
        </section>
</template>

<script>

        import bankImg from "../assets/images/bank.png";
        import addSign from '../assets/images/add.png';

export default {
        data(){
            return{
                activeSlide: 0,
                headings:["24 Unassigned", "12 Assigned", "30 Completed"],
                tasks:[
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},
                    {name: "Abiodun Olawale Solomon", address: "12b  Emmanuel Hign street, Sur...", visibility:"2 day ago", image:bankImg, add: addSign, bankName: "Sterling Bank PLC", assign: "Assign", agent: "Agent"},

                ],
                
            }
        }
    }

</script>