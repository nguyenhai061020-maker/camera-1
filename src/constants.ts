import { Product, Solution, Resource, FAQ } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Camera Ultra-Scan 4K High-Speed',
    description: 'High-performance machine vision camera for high-speed production lines.',
    resolution: '3840 x 2160 px',
    fps: '120 FPS',
    interface: 'GigE Vision',
    sensor: 'Sony Pregius',
    price: '$1,249.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC0ZUn-cDcQbQLXmSUhi5UwXu9-ZjalRHoOGcrbMNulc4gRgWhMpuvpbYIPRSgjUeL-GGXhasFBKt8WukrLMyrRVICu0rFlJDebzooZUTNAD6a-_uaC-axxC5PLTOH-d29n3d9aztP2xX3u-RiloXT2-Qn8IVy-oIdZ8fSAw1fpRhsBNMVqsxozsU68nKwDdJqn1Fp8PdswKh26Jt2vXtOaIl_08hAhk30h_N3bKDPxaSjR-BxQRL8GCdHn984YkmA-kqC5mhYPHk',
    category: 'QC',
    resCategory: '4K'
  },
  {
    id: '2',
    name: 'AI Vision Smart Sensor Series X',
    description: 'Integrated AI processing unit for intelligent object recognition.',
    resolution: '5.0 MP Global Shutter',
    fps: '60 FPS',
    interface: 'USB 3.1',
    sensor: 'AI Core v3',
    price: '$2,890.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm009jLI4z6jJOSarQfRy7thrZ2OFHlphNriAizuC4GFiPOXhwelRxE7aCoscIzyCJNv_F4TwqtI9td9VWCVYpUd5HxVsELSWbAcSQyIETLq8oK4qOtemecDkkYta30GzK7XEETtNiTJWBoymxL49iym2vIc-IoPCAgP9PpZZ5dVjE8dPSgE3fRrHiRgEZrkGFYzCLh4z-S6izf3BMrVMRNP1EzRXcyXmhsRmZnVMNxYffubjQakjiMTmBnU3IJ5kelLLWA6ohBpQ',
    category: 'AI',
    resCategory: 'VGA'
  },
  {
    id: '3',
    name: 'Robot-Eye Modular Camera Kit',
    description: 'IP67 rated camera kit designed for robotic arm integration.',
    resolution: '12 MP',
    fps: '90 FPS',
    interface: 'GigE Vision',
    sensor: 'Sony Pregius',
    price: '$3,450.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASLz8FMimR4pJt-M5UNr74T7CD0QZq-LlnHBuG9dYb_jufk2T_6g691N2VbEtoGRKOrIG-YWX6xmd4kOXcEknW1bpSGxzmeFn2AEFTfA70TntxyQNya184-iEvC6KXnBA7mTqVIqXZgTgWK8isRTgTkxFHtLIN2tEFEKAQRz84LOTgB6oHdHZVfKev4j170rD9MWaYwIvV57l2hZoiPpekfqsHBF99lIwlYTLyYGSRvYZQ9uMoku8_baoekoiXWaenUrqjt5X3zd8',
    category: 'AI',
    resCategory: '12MP'
  },
  {
    id: '4',
    name: 'Nexus-C HighFlow 65MP',
    description: 'Ultra-high resolution camera for microscopic inspection.',
    resolution: '65.0 MP',
    fps: '30 FPS',
    interface: 'CoaXPress',
    sensor: 'GMAX3265',
    price: '$5,120.00',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbJPvpaNRMHBL16b3hXfcOOZUf2ew_1ynil6jqg6zwZjQ-8hAspv0ox9PfVAxbN2UctZ1uwuVYLPh9yBBF_-Gt4MlnbmtJDe8fwFDQOmF_w1qdOx82xcT7TGgWo1CSpd7oX2OesvE2TKdhjltISLycZMBhdsTX6qivuRxjwJ5SJp7IDvHZE1T4VIJv1b0vsJmPezzM0IAQojnRCIp9TAPsGWcLEMWEiG8yXAx-X1aKeOmj2kNQikjBKGCLLMXQVDQBxnZbnHAIJxc',
    category: 'Lab',
    resCategory: '12MP'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'Dây chuyền sản xuất bo mạch (PCB)',
    subtitle: 'Electronics',
    description: 'Kiểm tra lỗi hàn, định vị linh kiện siêu nhỏ với độ chính xác micromet.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBtloU72ZLz_HQthzB7-8JYZZ7BHO-opGpAlP-pB9jgLfPeV44MYWiVHcf25-3CHivmmQJNNGMC7hJUX5wK-XWezxSwL8oActUv0aQqXSTyJO2F6bOS3cUUPCNfpRZHmDNkiy568--hl3SjS37avMz5IytNCTaxhjk-E6wldmJ9oPfTiJiLkOro21qpxoQRN70Z7vaHwahhxHB2r3OQSvWkZ4zamn4caSqlmtQFUcCQNzCP3MCG3Oz9kVgCowaNqDlr81XRxMTc1Y',
    tags: ['Defect Detection', '120 FPS']
  },
  {
    id: '2',
    title: 'Kho vận và đóng gói',
    subtitle: 'Logistics',
    description: 'Đọc mã vạch đa hướng, phân loại hàng hóa tốc độ cao.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuYs0Jlzjc4dUsX-B38T35C3w34Cv1NFbh-sYNmeyB8oHCzjvC-6MdvIjTvIAUer0F18IFblVtnfsaKmZBAIAt-4ma7SND4V5MU-ihDezg7sodCj6utP6FCLrWZrChpJLPaBzHjVrb604J3x-E7OUhcJKpw8Nx1VRPUM7yg61zuFaqSTKBfA9msmMksYpohLd0EPeUCyz8rz84jP-x6t6Wq2lkUPhKcYQJaAn04nIbqg4BmlnF_WqyP_BKmG5mtbjDmddugrV_J3U',
    tags: ['Barcode Scanning', 'Smart Logistics']
  },
  {
    id: '3',
    title: 'Hệ thống Robot tự hành (AGV)',
    subtitle: 'Robotics',
    description: 'Điều hướng thời gian thực và tránh vật cản thông minh cho robot kho bãi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACkgEZ8CSkkeG95ozyjVbXXCv-QbbnUHR2lnthXidyt8-Cp3PHR6UqApeVU_s7ANJi4RwTMWGB_2AEhBQ75XIOPyl5CZM6JS7FrnQmQwLgRSvC9eoCvCmfMMhRfyUfFp6XG3kA4HFmIHTvvGCbDS3AZKVNhCFZKLjCCm5_KlX28N6abcTmYwQY0EovHaCr3jBo4jHjcEPFsVVeSN0PoXb1Ma1cxggh8H93QPKt_ejGwzeVXOCM7LXE_wnIme1H9Gunm1gvKuBvUAI',
    tags: ['Lidar Fusion', 'Obstacle Avoidance']
  }
];

export const RESOURCES: Resource[] = [
  { id: '1', title: 'Optic-X1 Datasheet', type: 'PDF', size: '4.2 MB', icon: 'picture_as_pdf' },
  { id: '2', title: 'GigE Integration Manual', type: 'PDF', size: '12.8 MB', icon: 'settings_ethernet' },
  { id: '3', title: 'Optics Selection Guide', type: 'PDF', size: '3.5 MB', icon: 'lightbulb' },
  { id: '4', title: 'API Reference Docs', type: 'WEB', size: 'Online', icon: 'description' }
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Camera có hỗ trợ Power over Ethernet (PoE) không?',
    answer: 'Tất cả dòng camera GigE Vision của Industrial Precision đều hỗ trợ chuẩn IEEE 802.3af (PoE). Bạn có thể cấp nguồn trực tiếp qua cáp mạng từ switch hoặc injector PoE tương thích.'
  },
  {
    id: '2',
    question: 'Làm thế nào để tích hợp SDK vào dự án Python?',
    answer: 'Chúng tôi cung cấp thư viện Python Wrapper đi kèm trong SDK. Bạn có thể cài đặt thông qua pip và sử dụng các module được cung cấp để điều khiển camera.'
  },
  {
    id: '3',
    question: 'Độ dài tối đa của cáp USB 3.0 là bao nhiêu?',
    answer: 'Đối với chuẩn USB 3.0, độ dài cáp tối đa khuyến nghị là 3-5 mét để đảm bảo tốc độ truyền tải dữ liệu ổn định. Đối với khoảng cách xa hơn, chúng tôi khuyến nghị sử dụng cáp quang chủ động (AOC).'
  }
];
