<template>
  <section
    id="contacts"
    class="w-full max-w-[1200px] mx-auto py-24 flex flex-col items-start justify-start text-white px-4 sm:px-6 relative"
  >
    <div
      class="max-w-[1200px] w-full flex flex-row items-center justify-start px-4 sm:px-8 md:px-12 flex-wrap"
    >
      <!-- Título -->
      <h2
        class="absolute left-[calc(20%-120px)] top-[-70px] text-[36px] font-normal font-opensans text-[#939AFF]"
      >
        Contacts
      </h2>

      <!-- Descrição -->
      <p
        class="absolute left-[calc(25%-100px)] top-[-20px] mt-10 max-w-4xl text-base sm:text-lg text-gray-300 font-opensans leading-relaxed"
      >
        Feel free to reach out for collaborations, questions, or just to connect.
        I'm always open to interesting conversations and opportunities!
      </p>

     <!-- Container flex row: infos + imagem -->
      <div class="w-full flex flex-row items-start mt-5 px-4 sm:px-8 md:px-12 z-10 gap-10 ml-20">

        
        <!-- Infos -->
        <div class="flex flex-col items-start gap-6 max-w-lg">
          <!-- GMail -->
          <p class="text-gray-300 font-opensans text-base sm:text-lg flex items-center gap-2">
            <img
              src="/assets/gmail.png"
              alt="Gmail"
              class="w-10 h-10"
            />
            sandrafabiana2003@gmail.com
          </p>
    
          <!-- LinkedIn -->
          <p class="text-gray-300 font-opensans text-base sm:text-lg flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/sandra-cerqueira-91ab85243/"
              target="_blank"
              class="flex items-center gap-2 hover:text-purple-400"
            >
              <img
                src="/assets/lkin-icon.png"
                alt="LinkedIn"
                class="w-10 h-10"
              />
              Sandra Cerqueira
            </a>
          </p>

          <!-- Git -->
          <p class="text-gray-300 font-opensans text-base sm:text-lg flex items-center gap-2">
            <a
              href="https://github.com/SandraCerqueira1"
              target="_blank"
              class="flex items-center gap-2 hover:text-purple-400"
            >
              <img
                src="/assets/github-logo.png"
                alt="GitHub"
                class="w-10 h-10"
              />
              SandraCerqueira1
            </a>
          </p>
        </div>

        <!-- Imagem à direita -->
        <div>
            <img
        src="/assets/contact-deco.png"
        alt="Imagem à direita"
        class="w-48 h-auto rounded-lg shadow-lg transform"
        style="transform: rotate(-35deg);"
        />


        </div>
      </div>
      <!-- Seta decorativa -->
      <img
        src="/assets/contact-seta.png"
        alt="Contact Icon"
        class="absolute left-1/5 transform -translate-x-1/2 w-12 sm:w-14 md:w-16 top-[-80px] filter drop-shadow-[0_0_25px_rgba(126,231,135,0.9)] animate-pulse hidden sm:block"
        />


    </div>

    
  </section>
</template>

<script>
export default {
  name: "Contacts",
};
</script>