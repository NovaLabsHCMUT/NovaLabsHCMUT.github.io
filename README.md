# NovaLabs Website — Hướng dẫn sử dụng
https://novalabshcmut.github.io/
## Cấu trúc thư mục

```
novalabs/
  index.html        Trang chủ
  about.html         Trang Giới thiệu
  projects.html      Trang Dự án
  services.html      Trang Dịch vụ
  contact.html       Trang Liên hệ
  .nojekyll          File trống, bắt buộc nếu deploy bằng GitHub Pages
  css/
    style.css        Toàn bộ style dùng chung cho cả 5 trang
  js/
    components.js    Header, Footer, nút Zalo nổi — dùng chung cho cả 5 trang
    slider.js        Logic slider (auto slider trang chủ + manual slider có nút < >)
  assets/
    logo.jpg                 Logo NovaLabs (hiển thị ở thanh menu)
    hcmut_background.jpeg   Ảnh nền banner trang chủ
  project/
    project_agv.jpg, project_agv1.jpg, project_agv2.jpg
    project_drone.jpg
    project_hexapod.jpg, project_hexapod2.jpg, project_hexapod3.jpg
    project_robotarm.jpg, project_robotarm2.jpg, project_robotarm3.jpg
    project_robotpneumatic.jpg, project_robotpneumatic2.jpg
    project_robottwin.jpg, project_robottwin2.jpg, project_robottwin3.jpg
  service/
    service_in3d_1.jpg ... service_in3d_4.jpg
    service_pcb1.jpg ... service_pcb5.jpg
    service_programming.jpg, service_programming2.jpg, service_programming3.jpg, service_programming4.jpg
```

## Cách sử dụng

1. Sao chép toàn bộ hình ảnh vào đúng 3 thư mục `assets/`, `project/`, `service/` với tên file chính xác như trên (phân biệt hoa/thường, đúng phần mở rộng).
2. Mở `index.html` bằng trình duyệt để xem thử (nhấp đúp hoặc kéo thả vào Chrome).
3. Khi cần sửa nội dung chữ, giá, địa chỉ... chỉ cần sửa trực tiếp trong file `.html` tương ứng — không ảnh hưởng đến các trang khác.
4. Khi cần sửa Header/Footer/nút Zalo nổi dùng chung cho TẤT CẢ các trang cùng lúc, chỉ cần sửa trong `js/components.js`.
5. Khi cần sửa màu sắc, khoảng cách, kiểu chữ... sửa trong `css/style.css`.
6. Số điện thoại/Zalo hiện đang được cấu hình trong `js/components.js` (biến `SITE_INFO`): Mr. Khoa 0989 727 191, Mr. Hùng 0375 255 155. Nếu đổi số, chỉ cần sửa tại đây.
7. Nếu chưa có ảnh thật, hệ thống tự tạo ảnh thay thế (logo, nền banner, khung ảnh dự án/dịch vụ) để trang không bị lỗi hiển thị. Khi có ảnh thật, chỉ cần thêm đúng tên file vào đúng thư mục — không cần sửa code.

## Triển khai lên internet (tùy chọn)

Có thể tải toàn bộ thư mục này lên bất kỳ dịch vụ lưu trữ tĩnh (static hosting) như Netlify, Vercel, GitHub Pages, hoặc Hostinger/cPanel — không cần build gì thêm vì đây là mã HTML/CSS/JS thuần.

Nếu dùng **GitHub Pages**: giữ nguyên file `.nojekyll` ở thư mục gốc của repository để trang hiển thị đúng `index.html`, tránh bị GitHub tự động xử lý qua Jekyll và hiển thị nhầm `README.md` làm trang chủ. Vào **Settings → Pages**, chọn nguồn là nhánh `main`, thư mục `/ (root)`.
