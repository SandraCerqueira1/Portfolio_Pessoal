<template>
  <section
  id="projects"
  class="w-full max-w-[1200px] mx-auto py-24 mt-28 flex flex-col items-start justify-start text-white px-4 sm:px-6 relative"
>

    <div
      class="max-w-[1200px] w-full flex flex-row items-center justify-start px-4 sm:px-8 md:px-12 flex-wrap"
    >
      <!-- Título -->
      <h2
        class="absolute left-[calc(20%-120px)] top-[-70px] text-[36px] font-normal font-opensans text-[#FFA28B]"
      >
        Projects
      </h2>

      <!-- Descrição -->
      <p
        class="absolute left-[calc(25%-100px)] mt-10 top-[-10px] max-w-4xl text-base sm:text-lg text-gray-300 font-opensans leading-relaxed"
        >
        These are some of the projects I’ve developed throughout my journey —
        from the very first steps to the most recent challenges,
        each one marks a phase in my evolution as a developer.
    </p>
      <!-- Seta -->
      <img
        src="/assets/projects-icon.png"
        alt="Projects Icon"
        class="absolute left-1/5 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 top-[-80px] filter drop-shadow-[0_0_25px_rgba(126,231,135,0.9)] animate-pulse hidden sm:block"
        />
    </div>



    
    <!-- Grid dos projetos -->
    <div class="mt-[96px] w-full flex flex-col items-start px-4 sm:px-8 md:px-12 relative z-10 ml-4 sm:ml-6 md:ml-12">

      <div class="grid grid-cols-1 sm:grid-cols-2  gap-8 w-full">
        <!-- Projeto 1 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2 flex items-center gap-2">Pascall Compiler</h3>
          <p class="text-gray-300 mb-4">A lightweight Pascal compiler built in Python, featuring full lexical, syntactic, and semantic analysis. It generates low-level code designed to run on a provided virtual machine.</p>
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-3 py-1 rounded-md w-fit mb-4 shadow">
            <img src="/assets/python-logo.png" alt="Python Logo" class="w-5 h-5" />
            <span class="text-sm  font-semibold">Python</span>
          </div>

          <a
            href="https://github.com/SandraCerqueira1/PL2025/tree/main/Projeto_Compilador"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white block"
          >
            View Project →
          </a>

        </div>

        <!-- Projeto 2 -->

        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <!-- Título -->
         <h3 class="text-xl font-semibold text-[#7EE787]">ADI</h3>
          
          <!-- Descrição -->
          <p class="text-gray-300 mb-4">
            Applied <strong>Machine Learning</strong> techniques using <strong>KNIME</strong> to solve classification and regression problems on real datasets. Worked on medical diagnosis (Hepatitis C stages) and real estate price prediction, using algorithms like <em>Decision Trees</em>, <em>Random Forest</em>, and <em>Gradient Boosted Trees</em>, along with data preprocessing, outlier handling, and model evaluation.
          </p>

          <!-- Badge do KNIME -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60  px-3 py-1 rounded-md w-fit mb-4 shadow-md">
            <img src="/assets/a.png" alt="KNIME Logo" class="w-5 h-5" />
            <span class="text-sm font-semibold">KNIME</span>
          </div>

          <!-- Botão -->
          <a
            href="https://github.com/SandraCerqueira1/Aprendizagem-e-decisao-inteligentes"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white block"
          >
            View Project →
          </a>
        </div>


        <!-- Projeto 3 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">SPotifUM</h3>
          <p class="text-gray-300 mb-4">Java console-based music streaming app using OOP and MVC architecture. Features persistent storage, text interface, subscription plans, and personalized playlists with recommendation algorithms.</p>

        <!-- Badges das tecnologias -->
        <div class="flex flex-wrap gap-3 mb-4">
          <!-- Badge Java -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/java-icon.png" alt="Java Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">Java</span>
          </div>

          <!-- Badge Visual Paradigm -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/visual-paradigm-icon.png" alt="Visual Paradigm Logo" class="w-5 h-5 object-contain max-w-[20px] max-h-[20px]" />
            <span class="text-sm font-semibold">Visual Paradigm</span>
          </div>

          <!-- Badge UML -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/UML-Icon.png" alt="UML Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">UML</span>
          </div>
        </div>

          <a
            href="https://github.com/SandraCerqueira1/SPOTIFUM"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>

        <!-- Projeto 4 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">DSS</h3>
          <p class="text-gray-300 mb-4">Backend system for managing service stations, developed in Java with a console interface. Built using object-oriented principles and a layered architecture with DAO integration, it supports service scheduling, vehicle checkups, and client notifications, with data persisted via MariaDB.</p>
          <div class="flex flex-wrap gap-3 mb-4">
            <!-- Badge Java -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/java-icon.png" alt="Java Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">Java</span>
            </div>

            <!-- Badge Visual Paradigm -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/visual-paradigm-icon.png" alt="Visual Paradigm Logo" class="w-5 h-5 object-contain max-w-[20px] max-h-[20px]" />
              <span class="text-sm font-semibold">Visual Paradigm</span>
            </div>

            <!-- Badge UML -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/UML-Icon.png" alt="UML Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">UML</span>
            </div>

            <!-- Badge Mariadb -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/mariadb-icon.png" alt="mariadb Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">MariaDB</span>
            </div>

            <!-- Badge SQL -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/sql-icon.png" alt="mariadb Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">SQL</span>
            </div>

          </div>


          <a
            href="https://github.com/SandraCerqueira1/Desenvolvimento-de-Sistemas-de-Software"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>


        <!-- Projeto 5 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">Mechanic Management Service</h3>
          <!-- Imagem com clique para abrir modal -->
          <img
            src="/assets/ipm.png"
            alt="Mechanic App Preview"
            class="w-full h-auto rounded-lg mb-4 shadow-md object-cover border-2 border-[#7EE787]/80 cursor-pointer hover:brightness-110 transition"
            @click="showImage = true"
          />

          <!-- Modal -->
          <div
            v-if="showImage"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          >
            <!-- Botão fechar com margem confortável -->
            <button
              @click="showImage = false"
              class="absolute top-10 right-10 text-white bg-[#7EE787] hover:bg-[#66db72] font-bold px-4 py-2 rounded-full shadow-md z-50"
            >
              ✕
            </button>

            <!-- Imagem grande -->
            <img
              src="/assets/ipm.png"
              alt="Full-size App Preview"
              class="w-full max-w-4xl max-h-[80vh] object-contain rounded-xl shadow-lg border border-[#7EE787]/80"
            />
          </div>


          <p class="text-gray-300 mb-4">User interface prototype for a service station system, developed with Vue.js and Figma. Designed to assist mechanics in managing service tasks (e.g. service lookup, execution, and reporting), the app supports login, task tracking, and detailed service visualization. The UI design followed Human–Computer Interaction (HCI) guidelines, prioritizing usability, accessibility, and user-centered workflows, while addressing the needs of different technician profiles.</p>
          <div class="flex flex-wrap gap-3 mb-4">
            <!-- Badge vue -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/Vue.js.png" alt="Vue Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">Vue.js</span>
            </div>

            <!-- Badge Figma -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/figma-icon.png" alt="Figma Logo" class="w-5 h-5 object-contain max-w-[20px] max-h-[20px]" />
              <span class="text-sm font-semibold">Figma</span>
            </div>

            <!-- Badge UML -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/pinia-icon.png" alt="Pinia Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">Pinia</span>
            </div>

            <!-- Badge Mariadb -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/html-icon.png" alt="HTML Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">HTML</span>
            </div>

            <!-- Badge SQL -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/CSS3.png" alt="CSS Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">CSS</span>
            </div>

          </div>


          <a
            href="https://github.com/SandraCerqueira1/Interface-Pessoa-Maquina"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>

        <!-- Projeto 6 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">Auction Website</h3>
          <!-- Imagem da app -->
                      <img
            src="/assets/leigolandia.png"
            alt="leigolandia App Preview"
            class="w-full h-auto rounded-lg mb-4 shadow-md object-cover border-2 border-[#7EE787]/80 cursor-pointer hover:brightness-110 transition"
            @click="showImage = true"
          />

          <!-- Modal -->
          <div
            v-if="showImage"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          >
            <!-- Botão fechar com margem confortável -->
            <button
              @click="showImage = false"
              class="absolute top-10 right-10 text-white bg-[#7EE787] hover:bg-[#66db72] font-bold px-4 py-2 rounded-full shadow-md z-50"
            >
              ✕
            </button>

            <!-- Imagem grande -->
            <img
              src="/assets/leigolandia.png"
              alt="Full-size App Preview"
              class="w-full max-w-4xl max-h-[80vh] object-contain rounded-xl shadow-lg border border-[#7EE787]/80"
            />
          </div>
          <p class="text-gray-300 mb-4">Web-based auction platform for LEGO sets, developed to help modernize a local physical store. Built with .NET Blazor and Razor Pages, the app offers auction creation, live bidding, user profiles and statistics, and admin controls. The project followed a full software engineering lifecycle, including UML modeling, Gantt planning, database design, mockups, and implementation using C#, SQL Server, and Visual Studio.</p>
          <div class="flex flex-wrap gap-3 mb-4">
            <!-- Badge C# -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/Csharp-icon.png" alt="C# icon" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">C#</span>
          </div>

          <!-- Badge .NET Blazor -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/blazor-icon.png" alt=".NET Blazor Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">.NET Blazor</span>
          </div>

          <!-- Badge SQL Server -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/sqlServer-icon.png" alt="SQL Server Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">SQL Server</span>
          </div>

          <!-- Badge Visual Studio -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/vs-icon.png" alt="Visual Studio Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">Visual Studio</span>
          </div>

          <!-- Badge Azure DevOps -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/devops-icon.png" alt="Azure DevOps Logo" class="w-5 h-5 object-contain max-w-[20px] max-h-[20px]" />
            <span class="text-sm font-semibold">Azure DevOps</span>
          </div>

          <!-- Badge UML -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/UML-Icon.png" alt="UML Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">UML</span>
          </div>

          <!-- Badge Visual Paradigm -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/visual-paradigm-icon.png" alt="Visual Paradigm Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">Visual Paradigm</span>
          </div>

          <!-- Badge Figma -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/figma-icon.png" alt="Figma Logo" class="w-5 h-5 object-contain max-w-[20px] max-h-[20px]" />
            <span class="text-sm font-semibold">Figma</span>
          </div>

          </div>
          <a
            href="https://github.com/SandraCerqueira1/Laboratorios-de-Informatica-iv"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>

        <!-- Projeto 7 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">Shared Data Server</h3>
          <p class="text-gray-300 mb-4">
            Java-based client-server system for concurrent in-memory key-value storage. Each client is handled by a dedicated thread, with synchronization managed via <strong>ReentrantLock</strong>, <strong>ReentrantReadWriteLock</strong>, and <strong>Condition</strong> variables. Supports blocking operations like <em>GetWhen</em> and atomic multi-key commands, optimized for high-load performance.
          </p>
          
          <!-- Badges das tecnologias -->
        <div class="flex flex-wrap gap-3 mb-4">
          <!-- Badge Java -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/java-icon.png" alt="Java Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">Java</span>
          </div>
        </div>
          <a
            href="https://github.com/SandraCerqueira1/Sistemas_Distribuidos"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>

        
        <!-- Projeto 8 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">Encryoted message service</h3>
          <p class="text-gray-300 mb-4">Secure client-server message relay system developed in Python, designed to ensure authenticated and confidential communication between users. Implements RSA signatures, AES-GCM encryption, X.509 certificate validation, and Diffie-Hellman key exchange (Station-to-Station protocol). Includes user-friendly commands for message exchange and queue retrieval, with digital receipts and server-side logging to enhance usability and transparency.</p>

          <div class="flex flex-wrap gap-3 mb-4">
            <!-- Badge Python -->
            <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
              <img src="/assets/python-logo.png" alt="Python Logo" class="w-5 h-5 object-contain" />
              <span class="text-sm font-semibold">Python</span>
            </div>
          </div>

          <a
            href="https://github.com/SandraCerqueira1/Seguranca-De-Sistemas-Informaticos/tree/main/TPs/TP1"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>

        <!-- Projeto 9 -->
          <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">3D Engine and Generator</h3>
          <p class="text-gray-300 mb-4">A powerful 3D engine and generator built with C++ and OpenGL, enabling real-time rendering, hierarchical scene modeling, and procedural content creation. Developed from scratch, it supports geometric transformations, animation with Catmull-Rom curves, and surface modeling with Bézier patches, using XML-based scene configuration and VBO rendering for performance optimization.</p>

          <div class="flex flex-wrap gap-3 mb-4">
          <!-- Badge C++ -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/c++-icon.png" alt="C++ Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">C++</span>
          </div>

          <!-- Badge Opengl -->
          <div class="inline-flex items-center gap-2 bg-[#143a56]/60 px-4 py-1 rounded-md shadow-md whitespace-nowrap">
            <img src="/assets/opengl-icon.png" alt="OpenGL Logo" class="w-5 h-5 object-contain" />
            <span class="text-sm font-semibold">OpenGL</span>
          </div>

        </div>
          <a
            href="https://github.com/SandraCerqueira1/TrabalhoCG"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>
        
        <!-- Projeto 10 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">Delivery Search Algorithm</h3>
          <p class="text-gray-300 mb-4">Another cool project summary, with room for what it does and what you used.</p>
          <a
            href="#"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>

        <!-- Projeto 11 -->
        <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">Parser and data Management LI3</h3>
          <p class="text-gray-300 mb-4">Another cool project summary, with room for what it does and what you used.</p>
          <a
            href="#"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>

        <!-- Projeto 12 -->
         <div class="bg-[#1c1c1e] p-6 rounded-xl shadow-lg border border-[#7EE787]/40 hover:shadow-[0_0_20px_rgba(126,231,135,0.4)] transition">
          <h3 class="text-xl font-semibold text-[#7EE787] mb-2">Block Dude Game</h3>
          <p class="text-gray-300 mb-4">Another cool project summary, with room for what it does and what you used.</p>
          <a
            href="#"
            target="_blank"
            class="text-sm text-[#7EE787] underline hover:text-white"
          >
            View Project →
          </a>
        </div>
        

        

        <!-- Mais projetos aqui... -->
      </div>
    </div>

    <!-- GitHub call-to-action com seta à esquerda -->
<div class="w-full flex flex-row items-center justify-start gap-6 mt-2 px-4 sm:px-8 md:px-12">
  <!-- Seta decorativa -->
  <img
    src="/assets/final-seta-projects.png"
    alt="Decorative Arrow"
    class="w-10 sm:w-12 md:w-14 filter drop-shadow-[0_0_15px_rgba(126,231,135,0.6)] animate-pulse"
  />

  <!-- Texto + Botão -->
  <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 -mt-8">
    <p class="text-gray-300 text-base sm:text-lg font-opensans">
      If  you want to see more of what I’ve been working on? Visit my GitHub for more projects.
    </p>
    <a
      href="https://github.com/SandraCerqueira1"
      target="_blank"
      class="inline-block bg-[#FFA28B] text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-[#ff9874] transition"
    >
      Visit GitHub →
    </a>
  </div>
</div>



  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      showImage: false,
    };
  },
};

</script>
