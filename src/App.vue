<script setup>
import { ref, onMounted, nextTick } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const isAppLoaded = ref(false)

const handleLoaded = async () => {
  isAppLoaded.value = true
  
  // Wait for DOM update and add fade-in animation
  await nextTick()
  setTimeout(() => {
    const mainElement = document.querySelector('#main-content')
    if (mainElement) {
      mainElement.classList.add('animate-fade-in')
    }
  }, 150)
}

onMounted(() => {
  // Pre-load critical resources
  const link = document.createElement('link')
  link.rel = 'preconnect'
  link.href = 'https://api.github.com'
  document.head.appendChild(link)
})
</script>

<template>
  <!-- Loading Screen -->
  <LoadingScreen @loaded="handleLoaded" />
  
  <!-- Main App -->
  <div 
    v-show="isAppLoaded" 
    class="min-h-screen bg-gradient-to-br from-gray-50 to-white"
  >
    <!-- Header Navigation -->
    <Header />
    
    <!-- Main Content - Router View -->
    <main class="opacity-0 transition-all duration-1000 ease-out" id="main-content">
      <router-view v-slot="{ Component }">
        <transition 
          name="page" 
          mode="out-in"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 transform translate-y-8"
          enter-to-class="opacity-100 transform translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 transform translate-y-0"
          leave-to-class="opacity-0 transform -translate-y-4"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
.animate-fade-in {
  opacity: 1 !important;
}

/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(1.02);
}

/* Smooth scrolling */
* {
  scroll-behavior: smooth;
}

/* Improved section animations */
:deep(section) {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Add subtle shadow to main content */
main {
  position: relative;
  z-index: 1;
}

/* Improve focus states for accessibility */
:deep(button):focus,
:deep(a):focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>
