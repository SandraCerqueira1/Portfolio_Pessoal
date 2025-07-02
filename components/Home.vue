<template>
  <section id="home" class="w-full max-w-[1200px] mx-auto py-24 flex flex-col items-start justify-center text-white px-4 sm:px-6 relative">

    <div class="max-w-[1200px] w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 flex-wrap">
      
      <!-- Nome e descrição -->
      <div class="flex-1 text-center md:text-left relative">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white whitespace-nowrap flex gap-1">
          <!-- Nome -->
          <span class="text-purple-400 animate-fadeInUp" style="animation-delay: 0s;">S</span>
          <span class="animate-fadeInUp" style="animation-delay: 0.1s;">a</span>
          <span class="animate-fadeInUp" style="animation-delay: 0.2s;">n</span>
          <span class="animate-fadeInUp" style="animation-delay: 0.3s;">d</span>
          <span class="animate-fadeInUp" style="animation-delay: 0.4s;">r</span>
          <span class="animate-fadeInUp" style="animation-delay: 0.5s;">a</span>

          <!-- Espaço entre nome e sobrenome -->
          <span>&nbsp;</span>

          <!-- Sobrenome -->
          <span class="animate-fadeInUp" style="animation-delay: 0.7s;">C</span>
          <span class="animate-fadeInUp" style="animation-delay: 0.8s;">e</span>
          <span class="animate-fadeInUp" style="animation-delay: 0.9s;">r</span>
          <span class="animate-fadeInUp" style="animation-delay: 1s;">q</span>
          <span class="animate-fadeInUp" style="animation-delay: 1.1s;">u</span>
          <span class="animate-fadeInUp" style="animation-delay: 1.2s;">e</span>
          <span class="animate-fadeInUp" style="animation-delay: 1.3s;">i</span>
          <span class="animate-fadeInUp" style="animation-delay: 1.4s;">r</span>
          <span class="animate-fadeInUp" style="animation-delay: 1.5s;">a</span>
        </h1>

        <p class="text-gray-400 text-lg sm:text-xl md:text-2xl mb-10 flex items-center">
  <span
    class="overflow-hidden whitespace-nowrap border-r-0 inline-block w-0 animate-typewriter"
  >
    Software Engineer
  </span>
  <span class="inline-block w-1 border-r-4 border-gray-400 animate-blinkCaret">&nbsp;</span>
</p>



        <!-- Seta com brilho real, desaparece em telas pequenas -->
        <img src="/assets/seta-home.png" alt="Seta decorativa" 
             class="absolute left-1/5 transform -translate-x-1/2 w-10 sm:w-12 md:w-16 filter drop-shadow-[0_0_25px_rgba(138,43,226,0.9)] animate-pulse hidden sm:block">
      </div>

      <!-- Imagem primeiro em telas pequenas, mas sempre à direita -->
      <div class="flex-1 flex justify-center md:justify-end">
        <div
  class="rounded-full overflow-hidden w-32 sm:w-44 md:w-52 lg:w-60 xl:w-72 h-32 sm:h-44 md:h-52 lg:h-60 xl:h-72 shadow-glow-purple animate-glowPulse"
>
  <img src="/assets/me.jpg" class="object-cover w-full h-full" />
</div>

      </div>

    </div>
  </section>
</template>




<script> 
export default { 
  name: 'Home', 
} 
</script>
