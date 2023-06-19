<template>
    <section class="bg-[#FEFEFE]">
            <div class="w-[100%] h-11 bg-[#46B2C8;]  px-2 flex items-center">
                <h1 class="text-white font-semibold text-base">Agents</h1>
            </div>
            <div class="w-[100%] h-12 flex flex-row items-center justify-between px-2">
                <h1 v-for="(agentName, index) in agentNames" :key="index" class="text-[#C4C4C4] font-medium text-sm border-b border-[#C4C4C4]  w-[33%] flex flex-row items-center gap-2"><img v-if="(agentName.img)" :src="agentName.img" alt="status"   class="w-3 h-3"><span  :class="{'text-[#023A59]': activeSlide == index}">{{ agentName.name }}</span> </h1>
            </div>
            <ul class="flex flex-col gap-6">
                <li v-for="(agent, index) in agents" :key="index" class="px-4 flex flex-row items-center gap-4 py-4 border-b-2">
                    <img :src=agent.profilePic alt="Profile Picture" class="w-[50px] h-[50px] rounded-full">
                    <div>
                        <h1 class="text-xs font-medium leading-4">{{ agent.name }}</h1>
                        <p  class="text-xs font-normal leading-4 text-[#ACB6BE]">{{ agent.number }}</p>
                        <p  class="text-xs font-normal leading-4 text-[#ACB6BE]">{{ agent.city }}</p>
                    </div>
                    <img :src=agent.arrow alt="right" class="w-3 h-4 ml-10">
                </li>
            </ul>
        </section>
</template>

<script>

        import emmanuel from '../assets/images/firstp.png';
        import solomon from '../assets/images/secondp.png';
        import adebayo from '../assets/images/thirdp.png';
        import adeoye from '../assets/images/fourthp.png';
        import olawale from '../assets/images/fifthp.png';
        import arrowRight from '../assets/images/right.png';
        import online from '../assets/images/online.png';
        import offline from '../assets/images/offline.png'

export default{
    name:'Agent',
    data(){
        return{
            activeSlide: 0,
                agentNames:[
                    {name: "All", img: ""},
                    {name: "Online", img: online},
                    {name: "Offline", img: offline}
                ],
            agents:[
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:emmanuel, arrow:arrowRight},
                    {name: "Abiodun Olawale Solomon", number: "08069786754", city: "Akure", profilePic:solomon, arrow:arrowRight},
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:adebayo, arrow:arrowRight},
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:adeoye, arrow:arrowRight},
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:olawale, arrow:arrowRight},
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:olawale, arrow:arrowRight},
                    {name: "Abiodun Olawale Solomon", number: "08069786754", city: "Akure", profilePic:adeoye, arrow:arrowRight},
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:adebayo, arrow:arrowRight},
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:solomon, arrow:arrowRight},
                    {name: "Adebayo Adeoye Emmanuel", number: "08069786754", city: "Akure", profilePic:emmanuel, arrow:arrowRight},
                ]
        }
    }
}

</script>