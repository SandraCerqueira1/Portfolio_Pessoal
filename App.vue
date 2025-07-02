<template>
  <div class="relative min-h-screen w-full flex flex-col items-center justify-start bg-[#646895]">
    
    <!-- Bloco preto com conteúdo -->
    <div class="w-full max-w-[1400px] mx-auto bg-[#0f1117] rounded-t-[40px] shadow-none p-8 sm:p-12 mt-[100px] z-10">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>

    <!-- Rodapé fora do conteúdo, mas com mesmo fundo preto e cantos -->
    <div class="w-full max-w-[1400px] mx-auto bg-[#0f1117] rounded-b-[40px]  overflow-hidden">
      <Footer />
    </div>

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contacts.vue";
import Footer from "./components/Footer.vue";


export default {
  components: {
    Navbar,
    Home,
    About,
    Projects,
    Contacts,
    Footer,
  },
};
</script>
