# NovaLab Website

Website giới thiệu one-page cho NovaLab, gồm **About Us**, **Services**, **Selected Projects** và **Contact**. Dự án dùng HTML/CSS/JavaScript thuần, không cần cài package hay build.

## Chạy local

Mở trực tiếp `index.html`, hoặc chạy web server:

```bash
python3 -m http.server 8080
```

Sau đó truy cập `http://localhost:8080`.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ file trong thư mục này lên nhánh `main`.
3. Vào **Settings → Pages**.
4. Tại **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn nhánh `main`, thư mục `/ (root)`, rồi bấm **Save**.

## Tùy chỉnh trước khi xuất bản

- Thay email `hello@novalab.studio` trong `index.html`.
- Thay các liên kết mạng xã hội đang để `#`.
- Thay nội dung và số liệu demo bằng dữ liệu thật.
- Có thể đổi màu tại các biến trong `:root` ở đầu `styles.css`.
- Font Google sẽ tự động tải khi có Internet; fallback dùng font hệ thống.

## Cấu trúc

```text
novalab-website/
├── assets/
│   └── favicon.svg
├── index.html
├── styles.css
├── script.js
├── README.md
└── LICENSE
```

## Tính năng

- Responsive desktop, tablet, mobile.
- Menu mobile có hỗ trợ ARIA.
- Hiệu ứng xuất hiện khi cuộn.
- Hỗ trợ `prefers-reduced-motion`.
- Semantic HTML và keyboard focus rõ ràng.
- Sẵn sàng deploy GitHub Pages.

## License

MIT.
