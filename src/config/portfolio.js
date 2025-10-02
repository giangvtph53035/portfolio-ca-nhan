// Portfolio Configuration
// Cập nhật thông tin này để tùy chỉnh portfolio cho bản thân

export const portfolioConfig = {
  // Thông tin cá nhân
  personal: {
    name: "Vũ Trường Giang",
    title: "Full Stack Developer",
    email: "gvutruong871@gmail.com",
    phone: "+84 349 370 112",
    location: "Hà Nội, Việt Nam",
    bio: "Tôi tạo ra những trải nghiệm web tuyệt vời với mã nguồn sạch và thiết kế đẹp mắt. Chuyên về Vue.js, React, Node.js và nhiều công nghệ hiện đại khác.",
    
    // GitHub username để fetch projects (QUAN TRỌNG: Thay đổi username này)
    githubUsername: "giangvtph53035",
    
    // Social links
    social: {
      github: "https://github.com/giangvtph53035",
      linkedin: "https://www.linkedin.com/in/giang-v%C5%A9-2b3323387/",
      twitter: "#",
      youtube: "#"
    }
  },

  // Về tôi
  about: {
    story: [
      "Tôi là một Full Stack Developer với hơn 3 năm kinh nghiệm trong việc xây dựng các ứng dụng web hiện đại. Tôi đam mê tạo ra những sản phẩm không chỉ đẹp mắt mà còn có trải nghiệm người dùng tuyệt vời.",
      "Chuyên môn của tôi tập trung vào JavaScript ecosystem, đặc biệt là Vue.js, React, và Node.js. Tôi luôn cập nhật những công nghệ mới nhất và áp dụng best practices trong mọi dự án.",
      "Ngoài coding, tôi thích chia sẻ kiến thức qua blog cá nhân và tham gia các community tech trong nước."
    ],
    stats: {
      projects: "50+",
      experience: "3+",
      clients: "20+",
      awards: "5+"
    },
    interests: [
      "Đọc sách về công nghệ",
      "Chơi game và xem phim",
      "Du lịch và khám phá",
      "Học ngôn ngữ mới"
    ],
    principles: [
      "Code clean và dễ maintain",
      "User experience là ưu tiên hàng đầu",
      "Học hỏi và cải tiến liên tục",
      "Teamwork và communication tốt"
    ]
  },

  // Kỹ năng
  skills: {
    categories: {
      frontend: {
        name: "Frontend",
        icon: "frontend",
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Vue.js", "React", "Tailwind CSS", "SCSS"]
      },
      backend: {
        name: "Backend", 
        icon: "backend",
        skills: ["Node.js", "Express.js", "Python", "PHP", "Laravel", "MySQL", "MongoDB", "PostgreSQL"]
      },
      tools: {
        name: "Tools & Others",
        icon: "tools", 
        skills: ["Git", "Docker", "AWS", "Firebase", "Figma", "Photoshop", "Linux", "Agile"]
      }
    },
    proficiency: [
      { name: "JavaScript/TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Vue.js", level: 85, color: "bg-green-500" },
      { name: "React", level: 75, color: "bg-cyan-500" },
      { name: "Node.js", level: 80, color: "bg-green-600" },
      { name: "CSS/Tailwind", level: 88, color: "bg-pink-500" },
      { name: "Python", level: 70, color: "bg-yellow-500" },
      { name: "Database (SQL/NoSQL)", level: 75, color: "bg-purple-500" },
      { name: "DevOps & Cloud", level: 65, color: "bg-orange-500" }
    ]
  },

  // Dự án
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Nền tảng thương mại điện tử hoàn chỉnh với giỏ hàng, thanh toán và quản lý đơn hàng.",
      category: "E-commerce",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      github: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Ứng dụng quản lý task với real-time collaboration và notification system.",
      category: "Web App",
      technologies: ["React", "Express.js", "Socket.io", "PostgreSQL"],
      demo: "#",
      github: "#",
      featured: true
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Website nhà hàng responsive với booking system và menu management.",
      category: "Landing Page",
      technologies: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL"],
      demo: "#",
      github: "#",
      featured: false
    },
    {
      id: 4,
      title: "Food Delivery App",
      description: "Ứng dụng đặt đồ ăn mobile-first với GPS tracking và payment integration.",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Node.js", "Google Maps API"],
      demo: "#",
      github: "#",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Dashboard",
      description: "Dashboard quản lý portfolio cá nhân với analytics và content management.",
      category: "Web App",
      technologies: ["Vue.js", "Chart.js", "Express.js", "MongoDB"],
      demo: "#",
      github: "#",
      featured: false
    },
    {
      id: 6,
      title: "Fashion Store",
      description: "Cửa hàng thời trang online với AR try-on và size recommendation.",
      category: "E-commerce",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      demo: "#",
      github: "#",
      featured: true
    }
  ],

  // Categories cho projects
  projectCategories: [
    "Tất cả",
    "Web App", 
    "Mobile App",
    "E-commerce",
    "Landing Page"
  ],

  // Cấu hình site
  site: {
    title: "Portfolio - Full Stack Developer",
    description: "Portfolio cá nhân của một Full Stack Developer đam mê tạo ra những trải nghiệm web tuyệt vời.",
    keywords: "portfolio, full stack developer, vue.js, react, node.js, web development",
    url: "https://yourportfolio.com",
    author: "Tên của bạn",
    language: "vi-VN"
  },

  // Theme colors
  theme: {
    primary: "#2563eb",
    secondary: "#64748b", 
    accent: "#8b5cf6",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444"
  }
}

export default portfolioConfig