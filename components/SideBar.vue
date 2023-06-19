<template>
    <div class="bg-[#0F808C] min-h-screen w-[16%] h-[1194px] text-white laptop:w-[10%]">
        <section class="bg-[#1C697A] h-28 flex flex-col justify-center pl-6 leading-6 laptop:hidden">
            <p class="font-bold text-lg">Cheta And <br> Daughters Limited</p>
            <p class="font-normal text-base">RC123456789</p>
        </section>
        <section class="laptop:mt-10">
            <ul class="w-[100%] flex flex-col justify-center gap-6 mt-8 font-semibold text-lg leading-6">
                <li  v-for="(link, index) in links"><NuxtLink :to="link.url" :key="index" class="pl-6 flex items-center  h-11" :class="{'bg-[#46B2C8]': activePage == index}" @click.prevent="activePage = index"> <img :src="link.image" :alt="link.alt" class="h-4 w-4 mr-2"><span> {{ link.text }}</span></NuxtLink></li>
                
            </ul>
        </section>
    </div>
</template>

<script>
        import dashboard from '~/assets/images/dashboard.png';
        import agents from '~/assets/images/agents.png';
        import task from '~/assets/images/task.png';
        import teams from '~/assets/images/teams.png';
        import users from '~/assets/images/users.png';
        import settings from '~/assets/images/settings.png';

    export default{
        name: 'NuxtSideBar',
        data(){
            return{
                activePage:0,
                links: [ 
                    {text: "Dashboard", url: "#", image: dashboard, alt: "dashboard"},
                    {text: "Agents", url: "#", image: agents, alt: "agents"},
                    {text: "Task", url: "#", image: task, alt: "task"},
                    {text: "Teams", url: "#", image: teams, alt: "teams"},
                    {text: "Users", url: "#", image: users, alt: "users"},
                    {text: "Settings", url: "#", image: settings, alt: "settings"}
                ]
            }
        }
    }
</script>