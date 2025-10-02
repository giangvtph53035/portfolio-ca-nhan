<template>
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Về tôi
          </h2>
          <p class="text-gray-600 text-lg">
            Tìm hiểu thêm về con người đằng sau những dòng code
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left: About Text -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-6">
              Câu chuyện của tôi
            </h3>
            <div class="space-y-4 text-gray-600">
              <p>
                Tôi là một thực tập sinh mới ra trường, đang tìm kiếm cơ hội để phát triển 
                sự nghiệp trong lĩnh vực phát triển web. Tôi đam mê tạo ra những sản phẩm 
                không chỉ đẹp mắt mà còn có trải nghiệm người dùng tuyệt vời.
              </p>
              <p>
                Tôi đã học và thực hành với các công nghệ như PHP, JavaScript, Vue.js, 
                và Java trong thời gian học tập và các dự án cá nhân. Tôi luôn cập nhật 
                những công nghệ mới nhất và cố gắng áp dụng best practices trong mọi dự án.
              </p>
              <p>
                Dù mới bắt đầu sự nghiệp, tôi có tinh thần học hỏi cao và sẵn sàng đối mặt 
                với thử thách để trở thành một developer giỏi.
              </p>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-6 mt-8">
              <div class="text-center p-4 bg-blue-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">
                  {{ isLoading ? '...' : projectCount }}
                </div>
                <div class="text-gray-600">Dự án trên GitHub</div>
              </div>
              <div class="text-center p-4 bg-green-50 rounded-lg">
                <div class="text-2xl font-bold text-green-600">Mới</div>
                <div class="text-gray-600">Ra trường</div>
              </div>
            </div>
          </div>

          <!-- Right: Additional Info -->
          <div>
            <div class="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-4">
                Sở thích cá nhân
              </h4>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span class="text-gray-600">Đọc sách về công nghệ</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span class="text-gray-600">Chơi game và xem phim</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span class="text-gray-600">Du lịch và khám phá</span>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span class="text-gray-600">Học ngôn ngữ mới</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-4">
                Mục tiêu và định hướng
              </h4>
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span class="text-gray-600">Học hỏi và tiếp thu kiến thức mới</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span class="text-gray-600">Thực hành code sạch và best practices</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span class="text-gray-600">Làm việc nhóm và giao tiếp hiệu quả</span>
                </div>
                <div class="flex items-start space-x-3">
                  <span class="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span class="text-gray-600">Tìm hiểu trải nghiệm người dùng</span>
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
import { ref, onMounted } from 'vue'

const projectCount = ref(0)
const isLoading = ref(true)

// GitHub configuration từ environment variables
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'giangvtph53035'
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ''

// Fetch số lượng repositories từ GitHub
const fetchProjectCount = async () => {
  try {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App/1.0'
    }
    
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`
    }
    
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
      headers
    })
    
    if (response.ok) {
      const repos = await response.json()
      // Đếm repositories không phải fork và không bị archive
      projectCount.value = repos.filter(repo => !repo.fork && !repo.archived).length
    } else {
      projectCount.value = '5+' // Fallback number
    }
  } catch (error) {
    console.error('Error fetching project count:', error)
    projectCount.value = '5+' // Fallback number
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProjectCount()
})
</script>