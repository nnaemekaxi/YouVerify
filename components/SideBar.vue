<template>
    <div class="bg-[#0F808C] min-h-screen w-[16%] h-[1194px] text-white">
        <section class="bg-[#1C697A] h-28 flex flex-col justify-center pl-6 leading-6">
            <p class="font-bold text-lg">Cheta And <br> Daughters Limited</p>
            <p class="font-normal text-base">RC123456789</p>
        </section>
        <section>
            <ul class="w-[100%] flex flex-col justify-center gap-6 mt-8 font-semibold text-lg leading-6">
                <NuxtLink to="#"> <li class=" pl-6 flex items-center bg-[#46B2C8]  h-11 border-l-4 border-white" ><img src="../assets/images/dashboard.png" alt="settings" class="h-4 w-4 mr-2"><span> Dashboard</span></li></NuxtLink>
                <NuxtLink to="#"> <li class=" pl-6 flex text-[#C2E2E9] items-center h-11"><img src="../assets/images/agents.png" alt="settings" class="h-4 w-4 mr-2"><span> Agents</span></li></NuxtLink>
                <NuxtLink to="#"> <li class=" pl-6 flex text-[#C2E2E9] items-center h-11"> <img src="../assets/images/task.png" alt="settings" class="h-4 w-4 mr-2"><span> Task</span></li></NuxtLink>
                <NuxtLink to="#"> <li class=" pl-6 flex text-[#C2E2E9] items-center h-11"><img src="../assets/images/teams.png" alt="settings" class="h-4 w-4 mr-2"><span> Teams</span></li></NuxtLink>
                <NuxtLink to="#"> <li class=" pl-6 flex text-[#C2E2E9] items-center h-11"><img src="../assets/images/users.png" alt="settings" class="h-4 w-4 mr-2"><span>Users</span></li></NuxtLink>
                <NuxtLink to="#"> <li class=" pl-6 flex text-[#C2E2E9] items-center h-11"> <img src="../assets/images/Setting.png" alt="settings" class="h-4 w-4 mr-2"> <span>Settings</span> </li></NuxtLink>
            </ul>
        </section>
    </div>
</template>