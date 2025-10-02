<template>
  <section id="projects" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Dự án của tôi
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Một số dự án nổi bật mà tôi đã thực hiện từ GitHub
        </p>
      </div>

      <!-- Language Filter -->
      <div class="flex justify-center mb-12">
        <div class="flex flex-wrap gap-4 bg-gray-100 p-2 rounded-lg">
          <button 
            v-for="language in languages"
            :key="language"
            @click="activeLanguage = language"
            :class="[
              'px-6 py-2 rounded-md font-medium transition-colors',
              activeLanguage === language 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:bg-gray-200'
            ]"
          >
            {{ language }}
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="n in 6" 
          :key="n"
          class="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
        >
          <div class="h-48 bg-gray-300"></div>
          <div class="p-6">
            <div class="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div class="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div class="h-4 bg-gray-300 rounded w-full mb-4"></div>
            <div class="flex gap-2">
              <div class="h-6 bg-gray-300 rounded w-16"></div>
              <div class="h-6 bg-gray-300 rounded w-16"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <svg class="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3 class="text-lg font-medium text-red-800 mb-2">Không thể tải dự án</h3>
          <p class="text-red-600 mb-4">{{ error }}</p>
          <button 
            @click="fetchGitHubProjects" 
            class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Thử lại
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-purple-500">
            <div class="absolute inset-0 flex items-center justify-center">
              <svg class="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                {{ project.language }}
              </span>
              <div class="flex items-center space-x-2">
                <!-- Stars and Forks -->
                <div class="flex items-center space-x-3 text-gray-500 text-sm">
                  <div v-if="project.stars > 0" class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span>{{ project.stars }}</span>
                  </div>
                  <div v-if="project.forks > 0" class="flex items-center space-x-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ project.forks }}</span>
                  </div>
                </div>
                
                <!-- Action Links -->
                <div class="flex space-x-2">
                  <a 
                    v-if="project.demo"
                    :href="project.demo" 
                    target="_blank"
                    class="text-gray-400 hover:text-blue-600 transition-colors"
                    title="Xem demo"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                  <a 
                    v-if="project.github"
                    :href="project.github" 
                    target="_blank"
                    class="text-gray-400 hover:text-gray-600 transition-colors"
                    title="Xem source code"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- GitHub Profile Link -->
      <div v-if="!isLoading && !error && filteredProjects.length > 0" class="text-center mt-12">
        <a 
          :href="`https://github.com/${GITHUB_USERNAME}`"
          target="_blank"
          class="inline-flex items-center space-x-2 bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>Xem thêm trên GitHub</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { portfolioConfig } from '../config/portfolio.js'

const activeLanguage = ref('Tất cả')
const projects = ref([])
const isLoading = ref(true)
const error = ref(null)

// GitHub configuration từ environment variables
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'giangvtph53035'
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ''

const languages = ref(['Tất cả'])

// Hàm để chuẩn hóa tên ngôn ngữ
const normalizeLanguage = (language) => {
  if (!language) return 'Other'
  
  const lang = language.toLowerCase()
  
  // Map một số ngôn ngữ có tên khác nhau
  const languageMap = {
    'javascript': 'JavaScript',
    'typescript': 'TypeScript', 
    'php': 'PHP',
    'python': 'Python',
    'java': 'Java',
    'c#': 'C#',
    'c++': 'C++',
    'go': 'Go',
    'rust': 'Rust',
    'kotlin': 'Kotlin',
    'swift': 'Swift',
    'dart': 'Dart',
    'ruby': 'Ruby',
    'css': 'CSS',
    'html': 'HTML',
    'vue': 'Vue',
    'scss': 'SCSS',
    'sass': 'Sass',
    'shell': 'Shell',
    'dockerfile': 'Docker',
    'makefile': 'Makefile'
  }
  
  return languageMap[lang] || language
}

// Hàm để lấy công nghệ từ repository
const getTechnologies = (repo) => {
  const techs = []
  
  if (repo.language) {
    techs.push(repo.language)
  }
  
  // Thêm các công nghệ dựa trên topics
  if (repo.topics) {
    const techTopics = repo.topics.filter(topic => 
      ['vue', 'vuejs', 'react', 'angular', 'nodejs', 'express', 'fastapi', 'django', 'flask',
       'mongodb', 'mysql', 'postgresql', 'sqlite', 'redis', 'tailwindcss', 'bootstrap', 
       'sass', 'scss', 'typescript', 'javascript', 'php', 'laravel', 'symfony',
       'firebase', 'docker', 'aws', 'vercel', 'netlify', 'nextjs', 'nuxtjs', 'vite',
       'webpack', 'rollup', 'jest', 'cypress', 'eslint', 'prettier', 'html', 'css'].includes(topic.toLowerCase())
    )
    techs.push(...techTopics)
  }
  
  return techs.slice(0, 4) // Giới hạn 4 công nghệ
}

// Fetch repositories from GitHub API
const fetchGitHubProjects = async () => {
  try {
    isLoading.value = true
    error.value = null
    
    // Cấu hình headers với token nếu có
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
    
    // Lọc và chuyển đổi dữ liệu
    const filteredRepos = repos
      .filter(repo => 
        !repo.fork && 
        !repo.archived && 
        repo.language !== null && // Chỉ lấy repo có ngôn ngữ lập trình
        repo.language !== '' &&
        !['HTML', 'CSS', 'SCSS', 'Sass'].includes(repo.language) // Loại bỏ markup/styling languages
      )
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sắp xếp theo ngày cập nhật
      .slice(0, 15) // Lấy 15 repo gần nhất
    
    projects.value = filteredRepos.map(repo => ({
      id: repo.id,
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || 'Dự án được phát triển bởi ' + GITHUB_USERNAME,
      technologies: getTechnologies(repo),
      github: repo.html_url,
      demo: repo.homepage || null,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: normalizeLanguage(repo.language),
      updated_at: repo.updated_at
    }))
    
    // Cập nhật languages dựa trên dự án thực tế
    const uniqueLanguages = ['Tất cả', ...new Set(projects.value.map(p => p.language).filter(lang => lang !== 'Other'))]
    languages.value = uniqueLanguages.sort((a, b) => {
      if (a === 'Tất cả') return -1
      if (b === 'Tất cả') return 1
      return a.localeCompare(b)
    })
    
  } catch (err) {
    error.value = err.message
    console.error('Error fetching GitHub projects:', err)
    
    // Fallback với dữ liệu mẫu nếu có lỗi
    projects.value = [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'Website portfolio cá nhân được xây dựng với Vue.js và Tailwind CSS',
        language: 'JavaScript',
        technologies: ['Vue.js', 'Tailwind CSS', 'Vite'],
        github: `https://github.com/${GITHUB_USERNAME}`,
        demo: null,
        stars: 0,
        forks: 0
      }
    ]
    
    languages.value = ['Tất cả', 'JavaScript']
  } finally {
    isLoading.value = false
  }
}

const filteredProjects = computed(() => {
  if (activeLanguage.value === 'Tất cả') {
    return projects.value
  }
  return projects.value.filter(project => project.language === activeLanguage.value)
})

onMounted(() => {
  fetchGitHubProjects()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>