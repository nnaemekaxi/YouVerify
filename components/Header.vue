<template>
    <div class="bg-white border-b-4 w-[100%] h-20 pl-6 flex flex-row items-center gap-2">
        <NuxtLink to="/" class="w-[10%] h-11 big-tablet:w-[7%]"><img src="../assets/images/logo.png" alt="logo"></NuxtLink>
        <span class="ml-[3%] rounded-full shadow-md w-11 h-11 flex items-center justify-center font-bold text-[#0F808C]"><img src="../assets/images/left.png" alt="arrow"  class="w-3 h-3"></span>
        <section class="flex flex-row items-center w-[60%] h-[58px] bg-[#F1F1F1] px-3 gap-4 big-tablet:w-[50%]">
            <p>All</p>
            <span><img src="../assets/images/arrowdown.png" alt="arrowdown"  class="w-8 h-8"></span>
            <input type="text" placeholder="Search for anything here" class="bg-[#F1F1F1] w-[70%] focus:border-none">
            <span class="ml-[5%]"><img src="../assets/images/search.png" alt="search"  class="w-5 h-5"></span>
        </section>
        <section class="flex flex-row items-center justify-center gap-4 w-[30%] big-tablet:gap-1">
            <img src="../assets/images/Notification.png" alt="notification" class="w-6 h-6 tablet:w-3 tablet:h-3 small-tablet:none">
            <img src="../assets/images/firstp.png" alt="profilepix" class="w-10 h-10 tablet:w-5 tablet:h-5 small-tablet:none">
            <p class="text-[#023A59] text-lg font-medium tablet:text-sm small-tablet:none">Solomon</p>
            <img src="../assets/images/down.png" alt="arrow"  class="w-5 h-3 tablet:w-2 tablet:h-1">
        </section>
    </div>
</template>

<script>

export default{
    name:"Header",
    props:["header"]
}

</script>