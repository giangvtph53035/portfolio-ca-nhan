<template>
  <header class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          <span class="text-blue-600">Port</span>folio
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/' }"
          >
            Trang chủ
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/about' }"
          >
            Về tôi
          </router-link>
          <router-link 
            to="/skills" 
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/skills' }"
          >
            Kỹ năng
          </router-link>
          <router-link 
            to="/projects" 
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/projects' }"
          >
            Dự án
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/contact' }"
          >
            Liên hệ
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              class="w-6 h-0.5 bg-gray-700 transition-all duration-300"
              :class="{ 'rotate-45 translate-y-1': isMobileMenuOpen }"
            ></span>
            <span 
              class="w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300"
              :class="{ 'opacity-0': isMobileMenuOpen }"
            ></span>
            <span 
              class="w-6 h-0.5 bg-gray-700 mt-1 transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-1': isMobileMenuOpen }"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        class="md:hidden mt-4 pb-4"
        :class="{ 'hidden': !isMobileMenuOpen }"
      >
        <div class="flex flex-col space-y-4">
          <router-link 
            to="/" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/' }"
          >
            Trang chủ
          </router-link>
          <router-link 
            to="/about" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/about' }"
          >
            Về tôi
          </router-link>
          <router-link 
            to="/skills" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/skills' }"
          >
            Kỹ năng
          </router-link>
          <router-link 
            to="/projects" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/projects' }"
          >
            Dự án
          </router-link>
          <router-link 
            to="/contact" 
            @click="closeMobileMenu"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === '/contact' }"
          >
            Liên hệ
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>