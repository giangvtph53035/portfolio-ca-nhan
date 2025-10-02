<template>
  <section id="skills" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Kỹ năng & Công nghệ
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Các công nghệ và công cụ mà tôi sử dụng để tạo ra những sản phẩm tuyệt vời
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Loading State -->
        <div v-if="isLoading" class="grid lg:grid-cols-3 gap-8 mb-12">
          <div v-for="n in 3" :key="n" class="bg-white rounded-lg p-6 shadow-sm animate-pulse">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-gray-300 rounded-lg mr-3"></div>
              <div class="h-6 bg-gray-300 rounded w-24"></div>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="i in 6" :key="i" class="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-12">
          <div class="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <h3 class="text-lg font-medium text-red-800 mb-2">Không thể tải kỹ năng</h3>
            <p class="text-red-600 mb-4">{{ error }}</p>
            <button 
              @click="fetchSkillsFromGitHub" 
              class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Thử lại
            </button>
          </div>
        </div>

        <!-- Skill Categories -->
        <div v-else class="grid lg:grid-cols-3 gap-8 mb-12">
          <!-- Frontend -->
          <div v-if="frontendSkills.length > 0" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Frontend</h3>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="skill in frontendSkills" 
                :key="skill.name"
                class="skill-item"
              >
                {{ skill.name }}
                <span v-if="skill.count > 0" class="text-xs text-gray-500">({{ skill.count }})</span>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div v-if="backendSkills.length > 0" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0v24h24V0H0zm8.2 4.2h7.6v2.3H8.2V4.2zm0 4.6h7.6v2.3H8.2V8.8zm0 4.6h5.4v2.3H8.2v-2.3z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Backend</h3>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="skill in backendSkills" 
                :key="skill.name"
                class="skill-item"
              >
                {{ skill.name }}
                <span v-if="skill.count > 0" class="text-xs text-gray-500">({{ skill.count }})</span>
              </div>
            </div>
          </div>

          <!-- Tools & Others -->
          <div v-if="toolsSkills.length > 0" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Tools & Others</h3>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div 
                v-for="skill in toolsSkills" 
                :key="skill.name"
                class="skill-item"
              >
                {{ skill.name }}
                <span v-if="skill.count > 0" class="text-xs text-gray-500">({{ skill.count }})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Skill Progress Bars -->
        <div v-if="!isLoading && !error && topSkills.length > 0" class="bg-white rounded-lg p-8 shadow-sm">
          <h3 class="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Mức độ thành thạo
          </h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div 
                v-for="(skill, index) in topSkills.slice(0, Math.ceil(topSkills.length / 2))" 
                :key="skill.name"
                class="skill-progress"
              >
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                  <span class="text-gray-500">{{ skill.proficiency }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    :class="skill.color"
                    class="h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.proficiency + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div 
                v-for="(skill, index) in topSkills.slice(Math.ceil(topSkills.length / 2))" 
                :key="skill.name"
                class="skill-progress"
              >
                <div class="flex justify-between mb-2">
                  <span class="text-gray-700 font-medium">{{ skill.name }}</span>
                  <span class="text-gray-500">{{ skill.proficiency }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    :class="skill.color"
                    class="h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.proficiency + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const skills = ref([])
const isLoading = ref(true)
const error = ref(null)

// GitHub configuration từ environment variables
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'giangvtph53035'
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ''

// Map ngôn ngữ thành categories và icons
const languageCategories = {
  // Frontend Languages & Frameworks
  'JavaScript': { category: 'Frontend', icon: 'frontend', color: 'bg-yellow-500', proficiency: 50 },
  'TypeScript': { category: 'Frontend', icon: 'frontend', color: 'bg-blue-500', proficiency: 50 },
  'Vue': { category: 'Frontend', icon: 'frontend', color: 'bg-green-500', proficiency: 50 },
  'HTML': { category: 'Frontend', icon: 'frontend', color: 'bg-orange-500', proficiency: 50 },
  'HTML5': { category: 'Frontend', icon: 'frontend', color: 'bg-orange-600', proficiency: 50 },
  'CSS': { category: 'Frontend', icon: 'frontend', color: 'bg-blue-400', proficiency: 50 },
  'CSS3': { category: 'Frontend', icon: 'frontend', color: 'bg-blue-600', proficiency: 50 },
  'SCSS': { category: 'Frontend', icon: 'frontend', color: 'bg-pink-500', proficiency: 50 },
  
  // Backend Languages & Frameworks  
  'PHP': { category: 'Backend', icon: 'backend', color: 'bg-purple-500', proficiency: 60 },
  'Python': { category: 'Backend', icon: 'backend', color: 'bg-yellow-600', proficiency: 50 },
  'Java': { category: 'Backend', icon: 'backend', color: 'bg-red-500', proficiency: 50 },
  'C#': { category: 'Backend', icon: 'backend', color: 'bg-purple-600', proficiency: 50 },
  'Go': { category: 'Backend', icon: 'backend', color: 'bg-cyan-500', proficiency: 50 },
  'Ruby': { category: 'Backend', icon: 'backend', color: 'bg-red-600', proficiency: 50 },
  
  // Tools & Others
  'Shell': { category: 'Tools', icon: 'tools', color: 'bg-gray-600', proficiency: 50 },
  'Dockerfile': { category: 'Tools', icon: 'tools', color: 'bg-blue-600', proficiency: 50 },
  'Makefile': { category: 'Tools', icon: 'tools', color: 'bg-gray-700', proficiency: 50 }
}

// Fetch repositories để lấy ngôn ngữ
const fetchSkillsFromGitHub = async () => {
  try {
    isLoading.value = true
    error.value = null
    
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App/1.0'
    }
    
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`
    }
    
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
      headers
    })
    
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status}`)
    }
    
    const repos = await response.json()
    
    // Đếm usage của mỗi ngôn ngữ
    const languageCount = {}
    const languageBytes = {}
    
    repos
      .filter(repo => 
        !repo.fork && 
        !repo.archived && 
        repo.language !== null
      )
      .forEach(repo => {
        const lang = repo.language
        languageCount[lang] = (languageCount[lang] || 0) + 1
        languageBytes[lang] = (languageBytes[lang] || 0) + (repo.size || 0)
      })
    
    // Tạo danh sách skills từ ngôn ngữ thực tế
    const detectedSkills = Object.entries(languageCount)
      .map(([language, count]) => ({
        name: language,
        count,
        bytes: languageBytes[language],
        ...languageCategories[language]
      }))
      .filter(skill => skill.category) // Chỉ lấy ngôn ngữ đã được map
      .sort((a, b) => b.count - a.count) // Sort theo số lượng repo
    
    // Thêm HTML5 và CSS3 luôn vào danh sách (vì đây là skills cơ bản của frontend developer)
    const finalSkills = [...detectedSkills]
    
    // Thêm HTML5
    finalSkills.push({
      name: 'HTML5',
      count: 0, // Không hiển thị count vì được dùng ở tất cả project
      bytes: 0,
      ...languageCategories['HTML5']
    })
    
    // Thêm CSS3
    finalSkills.push({
      name: 'CSS3',  
      count: 0, // Không hiển thị count vì được dùng ở tất cả project
      bytes: 0,
      ...languageCategories['CSS3']
    })
    
    skills.value = finalSkills
    
  } catch (err) {
    error.value = err.message
    console.error('Error fetching skills from GitHub:', err)
    
    // Fallback với một số skills cơ bản
    skills.value = [
      { name: 'JavaScript', category: 'Frontend', color: 'bg-yellow-500', proficiency: 90, count: 1 },
      { name: 'PHP', category: 'Backend', color: 'bg-purple-500', proficiency: 85, count: 1 }
    ]
  } finally {
    isLoading.value = false
  }
}

// Computed properties để group skills theo category
const frontendSkills = computed(() => 
  skills.value.filter(skill => skill.category === 'Frontend')
)

const backendSkills = computed(() => 
  skills.value.filter(skill => skill.category === 'Backend')
)

const toolsSkills = computed(() => 
  skills.value.filter(skill => skill.category === 'Tools')
)

// Top skills để hiển thị progress bars
const topSkills = computed(() => 
  skills.value
    .filter(skill => skill.proficiency >= 50)
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, 8)
)

onMounted(() => {
  fetchSkillsFromGitHub()
})
</script>

<style scoped>
.skill-item {
  background-color: #f9fafb;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  transition: background-color 0.2s ease;
}

.skill-item:hover {
  background-color: #f3f4f6;
}

.skill-progress:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}
</style>