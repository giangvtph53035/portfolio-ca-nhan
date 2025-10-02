<template>
  <div 
    v-if="isLoading" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-white"
  >
    <div class="text-center">
      <!-- Loading Animation -->
      <div class="relative">
        <div class="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <div class="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-400 rounded-full animate-spin mx-auto" style="animation-delay: 0.2s;"></div>
      </div>
      
      <!-- Loading Text -->
      <div class="text-gray-600 font-medium">
        Đang tải Portfolio...
      </div>
      
      <!-- Progress Bar -->
      <div class="w-48 h-1 bg-gray-200 rounded-full mt-4 mx-auto overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
      
      <!-- Percentage -->
      <div class="text-sm text-gray-500 mt-2">
        {{ Math.round(progress) }}%
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    default: 2000
  }
})

const emit = defineEmits(['loaded'])

const isLoading = ref(true)
const progress = ref(0)

onMounted(() => {
  // Simulate loading progress
  const interval = setInterval(() => {
    progress.value += Math.random() * 30
    
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      
      setTimeout(() => {
        isLoading.value = false
        emit('loaded')
      }, 500)
    }
  }, props.duration / 20)
  
  // Ensure loading finishes within specified duration
  setTimeout(() => {
    if (isLoading.value) {
      progress.value = 100
      clearInterval(interval)
      
      setTimeout(() => {
        isLoading.value = false
        emit('loaded')
      }, 300)
    }
  }, props.duration)
})
</script>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>