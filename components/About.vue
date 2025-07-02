<template>
  <section
    id="about"
    class="w-full max-w-[1200px] mx-auto pt-24 pb-32 mt-44 flex flex-col items-start justify-start text-white px-4 sm:px-6 relative"
  >
    <div
      class="max-w-[1200px] w-full flex flex-row items-center justify-start px-4 sm:px-8 md:px-12 flex-wrap relative mb-48"
    >
      <!-- Título "About Me" -->
      <h2
        class="absolute left-[calc(20%-120px)] top-[-70px] text-[36px] font-normal font-opensans text-[#7EE787]"
      >
        About Me
      </h2>

      <!-- Texto abaixo do título -->
      <p
        class="absolute left-[calc(25%-100px)] top-[-10px] max-w-4xl text-base sm:text-lg text-gray-300 font-opensans"
      >
        Hi! I recently graduated in Software Engineering from the University of
        Minho (UM), and I’m excited to put my knowledge into practice to make a
        meaningful impact. My natural curiosity has always driven me, fueling
        my fascination with the power of technology. I believe in the incredible
        potential of combining knowledge to solve real-world problems and create
        innovative, practical solutions that benefit everyone. The process of
        learning and applying new ideas to generate positive change truly
        inspires and motivates me every day.
      </p>

      <!-- Seta completa -->
      <img
        src="/assets/seta-about.png"
        alt="Seta completa"
        class="absolute left-1/5 transform -translate-x-1/2 w-10 sm:w-12 md:w-16 filter drop-shadow-[0_0_25px_rgba(126,231,135,0.9)] animate-pulse hidden sm:block"
      />
    </div>

    <!-- Timeline no fim da seção -->
    <div class="w-full px-4 sm:px-8 md:px-12 mt-24">
      <div class="relative wrap overflow-visible max-w-[1200px] mx-auto">
        <!-- Linha vertical central -->
        <div class="border-2 absolute border-opacity-20 border-[#7EE787] h-full border left-1/2 top-0"></div>

        <!-- Eventos timeline -->
        <div
          v-for="(event, i) in events"
          :key="i"
          :class="[
            'mb-4 flex justify-between items-center w-full',  // margem menor
            i % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'
          ]"
        >
          <div class="order-1 w-5/12"></div>

          <div
            class="z-20 flex items-center order-1 bg-[#7EE787] shadow-xl w-8 h-8 rounded-full border-2 border-[#1c1c1e]"
          >
            <h1 class="mx-auto font-semibold text-base text-[#0f1117]">{{ i + 1 }}</h1>
          </div>

          <div
            class="order-1 bg-[#1c1c1e] rounded-lg shadow-[0_0_20px_4px_rgba(126,231,135,0.6)] w-5/12 px-4 py-2 border border-[#7EE787]"
          >
            <h3 class="mb-2 font-bold text-[#7EE787] text-lg">{{ event.title }}</h3>
            <p class="text-gray-300 leading-tight text-sm">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards e seta dentro do container preto -->
    <div class="mt-[220px] w-full flex flex-col items-start px-4 sm:px-8 md:px-12 relative z-10 pb-0">
      <!-- Card 1 -->
      <div
        class="relative z-10 bg-[#1c1c1e] text-gray-200 px-8 py-6 rounded-xl shadow-[0_0_20px_4px_rgba(99,102,241,0.5)] 
              w-full max-w-[600px] min-h-[300px] flex items-center mb-10 border-2 border-dotted border-indigo-500/75"
      >
        I'm especially interested in using technology to bridge gaps between
        people and ideas. Creating tools that are intuitive, accessible and
        impactful is what motivates me.
      </div>

      <!-- Nuvem decorativa -->
      <img
        src="/assets/nuvem.png"
        alt="Nuvem decorativa"
        class="hidden sm:block absolute top-[340px] left-10 w-20 sm:w-32 md:w-64 h-auto animate-pulseScale"
      />

      <!-- Card 2 -->
      <div
        class="relative z-20 bg-[#1c1c1e] text-gray-200 px-8 py-6 rounded-xl shadow-[0_0_20px_4px_rgba(22,163,74,0.5)] 
              w-full max-w-[600px] min-h-[300px] ml-0 sm:ml-96 mt-0 sm:-mt-[80px] flex items-center border border-dotted border-green-600"
      >
        I believe curiosity drives innovation. Every problem is an opportunity
        to think differently and build smarter, human-centered solutions.
      </div>

      <!-- Seta -->
      <img
        src="/assets/teste.png"
        alt="Seta completa"
        class="relative w-20 sm:w-28 md:w-36 h-40 sm:h-56 md:h-72 filter drop-shadow-[0_0_25px_rgba(126,231,135,0.9)] animate-pulse hidden sm:block mt-10"
        style="transform: translateX(-50%);"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      events: [
        {
          title: "Secundário em Ciências e Tecnologias",
          description: "Escola Secundária de Vila Verde, concluído em 2021.",
        },
        {
          title: "Trabalho no Hotel Quinta do Pico",
          description: "Experiência profissional em 2021.",
        },
        {
          title: "Part-time na Quinta da Resela",
          description: "Trabalhando desde 2022 até agora.",
        },
        {
          title: "Vigilante na empresa Rodominho",
          description: "Desde 2023 até hoje.",
        },
        {
          title: "Licenciatura em Engenharia Informática",
          description: "Universidade do Minho, concluída recentemente.",
        },
        {
          title: "Coder Dojo",
          description:
            "Ensino lógica de programação a crianças mais novas, ajudando a despertar o interesse pela programação.",
        },
      ],
    };
  },
};
</script>

<style>
.right-timeline {
  flex-direction: row;
}

.left-timeline {
  flex-direction: row-reverse;
}
</style>
