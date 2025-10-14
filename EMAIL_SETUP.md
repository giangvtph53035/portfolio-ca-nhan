# 📧 Hướng dẫn cấu hình Email cho Contact Form

## 🔧 Cách setup EmailJS

### Bước 1: Tạo tài khoản EmailJS
1. Truy cập [https://www.emailjs.com/](https://www.emailjs.com/)
2. Đăng ký tài khoản miễn phí
3. Verify email của bạn

### Bước 2: Tạo Email Service
1. Vào **Email Services** trong dashboard
2. Click **Add New Service**
3. Chọn **Gmail** (hoặc email provider khác)
4. Kết nối với Gmail account của bạn (`gvutruong871@gmail.com`)
5. Copy **Service ID** (ví dụ: `service_7o15cle`)

### Bước 3: Tạo Email Template
1. Vào **Email Templates** trong dashboard
2. Click **Create New Template**
3. Điền thông tin như sau:

**Template Settings (bên phải):**
- **To Email**: `gvutruong871@gmail.com` (hoặc để trống để dùng default)
- **From Name**: `{{from_name}}` 
- **From Email**: Để trống hoặc dùng default
- **Reply To**: `{{from_email}}`

**Content (bên trái):**
- **Subject**: `Contact Us: {{subject}}`
- **Content**: Paste nội dung sau vào phần content:

```
Xin chào Giang,

Bạn có tin nhắn mới từ portfolio website:

Tên người gửi: {{from_name}}
Email: {{from_email}}
Tiêu đề: {{subject}}

Nội dung tin nhắn:
{{message}}

---
Tin nhắn này được gửi tự động từ portfolio website.
Thời gian: {{time}}
```

4. Click **Save** 
5. Copy **Template ID** (hiển thị ở góc trên, ví dụ: `template_hh4w4ti`)

**Lưu ý**: Các biến như `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` sẽ được thay thế bằng dữ liệu từ form website của bạn.

### Bước 4: Lấy Public Key
1. Vào **Account** > **General**
2. Copy **Public Key** (ví dụ: `X1ZdSZfAJezogJHyj`)

### Bước 5: Cập nhật code
Sửa file `src/components/Contact.vue`, thay đổi 3 dòng sau:

```javascript
service_id: 'YOUR_SERVICE_ID', // Thay bằng Service ID từ bước 2
template_id: 'YOUR_TEMPLATE_ID', // Thay bằng Template ID từ bước 3  
user_id: 'YOUR_PUBLIC_KEY', // Thay bằng Public Key từ bước 4
```

### Bước 6: Test
1. Chạy website: `npm run dev`
2. Điền form contact và gửi thử
3. Kiểm tra email `gvutruong871@gmail.com`

## 🎯 Lưu ý quan trọng

- **Miễn phí**: EmailJS cho phép 200 emails/tháng miễn phí
- **Bảo mật**: Không cần backend server
- **Spam protection**: EmailJS có built-in spam protection
- **Tracking**: Có thể track email đã gửi trong dashboard

## 🔐 Bảo mật

Để tăng bảo mật, bạn có thể:
1. Sử dụng **Environment Variables** thay vì hardcode keys
2. Thêm **reCAPTCHA** để chống spam
3. Set **Email Templates** với restrictions

## 🚀 Cách setup Environment Variables

1. Tạo file `.env` trong root folder:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Cập nhật code để sử dụng env vars:
```javascript
service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
```

3. Thêm `.env` vào `.gitignore` để không commit keys lên GitHub

## ❓ Troubleshooting

### Lỗi CORS
- EmailJS đã handle CORS, không cần config thêm

### Email không nhận được
- Kiểm tra spam folder
- Verify Service đã connect đúng Gmail
- Check Template ID và Service ID

### Rate limiting
- Free plan: 200 emails/tháng
- Upgrade plan nếu cần gửi nhiều hơn

---

**Lưu ý**: Sau khi setup xong, nhớ xóa file này hoặc thêm vào `.gitignore` để không public thông tin nhạy cảm!