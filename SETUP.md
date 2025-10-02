# 🚀 Hướng dẫn sử dụng Portfolio

## Chạy dự án

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
```
Portfolio sẽ chạy tại: http://localhost:5173

### 3. Build cho production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 📝 Tùy chỉnh thông tin cá nhân

### 1. Cập nhật file config chính
Mở file `src/config/portfolio.js` và cập nhật các thông tin:

```javascript
// Thông tin cá nhân
personal: {
  name: "Tên của bạn",
  title: "Full Stack Developer", 
  email: "your.email@example.com",
  phone: "+84 123 456 789",
  // ... các thông tin khác
}
```

### 2. Thay đổi logo và branding
- Trong `src/components/Header.vue`, tìm và thay đổi:
```vue
<div class="text-2xl font-bold text-gray-800">
  <span class="text-blue-600">Your</span>Logo
</div>
```

### 3. Cập nhật ảnh profile
- Thêm ảnh của bạn vào thư mục `public/images/`
- Trong `src/components/Hero.vue`, thay thế placeholder bằng ảnh thật:
```vue
<!-- Thay thế phần placeholder -->
<img src="/images/your-photo.jpg" alt="Profile" class="w-full h-full object-cover rounded-full">
```

### 4. Tùy chỉnh kỹ năng
Trong `src/config/portfolio.js`, cập nhật phần skills:
```javascript
skills: {
  categories: {
    frontend: {
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Vue.js", "React"]
    },
    // ... thêm các skills của bạn
  }
}
```

### 5. Thêm dự án của bạn
Cập nhật mảng `projects` trong config:
```javascript
projects: [
  {
    id: 1,
    title: "Tên dự án",
    description: "Mô tả dự án",
    category: "Web App",
    technologies: ["Vue.js", "Node.js"],
    demo: "https://your-demo.com",
    github: "https://github.com/yourusername/project"
  }
]
```

### 6. Cập nhật thông tin liên hệ
- Email, số điện thoại trong `src/components/Contact.vue`
- Social links trong `src/components/Footer.vue`

## 🎨 Tùy chỉnh giao diện

### 1. Thay đổi màu sắc chủ đạo
Trong `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color', // Thay đổi màu chính
        600: '#your-darker-color',
      }
    }
  }
}
```

### 2. Thay đổi font chữ
Trong `src/style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'YourFont', system-ui, sans-serif;
}
```

### 3. Tùy chỉnh animations
Các animations được định nghĩa trong `src/style.css`. Bạn có thể:
- Thay đổi duration
- Thêm animation mới
- Tùy chỉnh easing functions

## 📱 Responsive Design

Portfolio đã được tối ưu cho:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Các tính năng có sẵn

### ✅ Đã hoàn thành:
- [x] Header với navigation responsive
- [x] Hero section với animations
- [x] About section với thống kê
- [x] Skills section với progress bars
- [x] Projects showcase với filter
- [x] Contact form với validation
- [x] Footer với social links
- [x] Loading screen
- [x] Scroll progress indicator
- [x] Back to top button
- [x] Smooth scrolling
- [x] Section navigation
- [x] Mobile menu

### 🔄 Có thể thêm:
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Blog section
- [ ] Testimonials
- [ ] Services section
- [ ] Resume/CV download
- [ ] Contact form backend
- [ ] Google Analytics
- [ ] SEO optimization
- [ ] PWA features

## 📊 Performance Tips

1. **Optimize images**: Sử dụng WebP format
2. **Lazy loading**: Thêm loading="lazy" cho images
3. **Minimize bundles**: Remove unused dependencies
4. **Enable gzip**: Configure server compression
5. **Use CDN**: Host static assets on CDN

## 🚀 Deploy

### Netlify
1. Build project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## ❓ Troubleshooting

### Lỗi thường gặp:

1. **Port already in use**:
   - Thay đổi port: `npm run dev -- --port 3000`

2. **Build errors**:
   - Clear cache: `rm -rf node_modules && npm install`
   - Check for unused imports

3. **CSS không load**:
   - Kiểm tra Tailwind config
   - Restart dev server

4. **Images không hiển thị**:
   - Đảm bảo images ở trong thư mục `public`
   - Sử dụng absolute paths: `/images/photo.jpg`

## 📞 Hỗ trợ

Nếu gặp vấn đề, hãy:
1. Kiểm tra console để xem lỗi
2. Đọc documentation của Vue 3 và Vite
3. Tạo issue trên GitHub repository

---

💡 **Lưu ý**: Nhớ cập nhật tất cả placeholder texts và links thành thông tin thật của bạn!