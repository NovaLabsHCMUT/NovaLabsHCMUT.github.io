document.addEventListener('DOMContentLoaded', () => {
    // Logic xác định trang hiện tại và bôi đậm menu (active state)
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = 'bold';
        }
    });

    // Render dữ liệu động cho trang Project
    const projectListContainer = document.getElementById('project-list');
    
    if (projectListContainer) {
        const projects = [
            {
                name: "Hệ thống Cảm biến Alpha",
                description: "Triển khai thu thập dữ liệu quang học thời gian thực với độ trễ < 10ms.",
                status: "Đã hoàn thành"
            },
            {
                name: "Module Điều khiển Lõi",
                description: "Thiết kế mạch nhúng ứng dụng giao thức truyền thông SPI cấp công nghiệp.",
                status: "Đang phát triển"
            },
            {
                name: "Thuật toán Định tuyến Zero-Node",
                description: "Tối ưu hóa băng thông mạng nội bộ dựa trên phương pháp tính toán đồ thị.",
                status: "Thử nghiệm Beta"
            }
        ];

        let htmlContent = '';
        projects.forEach(project => {
            htmlContent += `
                <div class="card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <br>
                    <small><strong>Trạng thái:</strong> ${project.status}</small>
                </div>
            `;
        });
        
        projectListContainer.innerHTML = htmlContent;
    }
});