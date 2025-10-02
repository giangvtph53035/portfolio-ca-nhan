<template>
  <div class="min-h-screen">
    <!-- Loading Screen được xử lý ở App.vue -->
    
    <!-- Hero Section -->
    <section id="hero">
      <Hero />
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Hero from '../components/Hero.vue'

onMounted(() => {
  // Add animation classes to sections when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  })
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})
</script>

<style scoped>
section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-in-out;
}

section.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animation delays */
section:nth-child(1) { transition-delay: 0.1s; }
section:nth-child(2) { transition-delay: 0.2s; }
section:nth-child(3) { transition-delay: 0.3s; }
</style>