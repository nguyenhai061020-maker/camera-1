/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronDown, Download, ArrowRight, 
  Search, Mail, Phone, MapPin, Globe, Rss,
  PrecisionManufacturing, Speed, Memory, PhotoCamera,
  FilterList, RequestQuote, SmartToy, Package2,
  CheckCircle, Terminal, Build, History, Dashboard,
  ArrowForward, ExpandMore, InstallDesktop, SupportAgent,
  Send
} from 'lucide-react';
import { PRODUCTS, SOLUTIONS, RESOURCES, FAQS } from './constants';
import { Product } from './types';

// Helper for Lucide icons that match Material Symbols
const Icon = ({ name, className }: { name: string, className?: string }) => {
  return <span className={`material-symbols-outlined ${className}`} data-icon={name}>{name}</span>;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string[]>(['12MP']);
  const [activeAppFilter, setActiveAppFilter] = useState<string[]>(['QC']);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter(p => 
    (activeFilter.length === 0 || activeFilter.includes(p.resCategory)) &&
    (activeAppFilter.length === 0 || activeAppFilter.includes(p.category))
  );

  const toggleFilter = (cat: string, type: 'res' | 'app') => {
    if (type === 'res') {
      setActiveFilter(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    } else {
      setActiveAppFilter(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Icon name="precision_manufacturing" className="text-primary text-3xl" />
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase font-sans">
              Industrial Precision
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Sản phẩm', 'Giải pháp', 'Tài liệu', 'Liên hệ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 font-medium hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block bg-primary text-white px-6 py-2.5 rounded font-bold uppercase text-sm tracking-wide active:scale-95 transition-transform shadow-sm">
              Nhận báo giá
            </button>
            <button 
              className="md:hidden text-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "close" : "menu"} className="text-3xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {['Sản phẩm', 'Giải pháp', 'Tài liệu', 'Liên hệ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 bg-primary text-white py-4 rounded font-bold uppercase">
                Nhận báo giá
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="z-10"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded mb-6">
                B2B Industrial Vision
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Camera Công Nghiệp Cho <span className="text-primary-light italic">Tự Động Hóa Chính Xác</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Camera tốc độ cao, độ chính xác cao dành cho các hệ thống sản xuất và kiểm định phần cứng hàng đầu thế giới.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="tech-gradient text-white px-8 py-4 rounded font-bold uppercase tracking-wider active:scale-95 transition-all shadow-lg">
                  Nhận báo giá
                </button>
                <button className="border border-outline text-primary px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-slate-50 transition-all">
                  Xem sản phẩm
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
              <div className="relative bg-white p-4 rounded-xl shadow-2xl border border-slate-50">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmAWOe74s1VwmVepA_TfanEKiPl1j-YXdqG6JgvnTVNsEIw3M-ZpELk1iBLXncxRUA_9lIVIvMy6YVlVREJHbnevGWes6bhgaAmxnx1MHn7ePN-pRpFThMbZA_6tQhfNzMs0IQg_Z-U5Mryworrsgm9iEDUhuVKqWmORkqqoD2g8PjMLgWFIvNpjT0sO1pngh8IMZNiNIzrgURmjt4s5fg_ac6wbDOTXAYLpuSwUQggym_wbrBEwNyXBRRfoup2LXHafdgp8h9iJE" 
                  alt="Industrial Camera" 
                  className="w-full h-auto rounded-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Explorer */}
        <section id="sản phẩm" className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-10">
          <aside className="w-full md:w-72 flex-shrink-0">
            <div className="sticky top-28 bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Icon name="filter_list" className="text-primary" />
                Bộ lọc sản phẩm
              </h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Độ phân giải</label>
                  <div className="space-y-3">
                    {['4K', '12MP', 'VGA'].map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={activeFilter.includes(cat)}
                          onChange={() => toggleFilter(cat, 'res')}
                          className="rounded border-slate-300 text-primary focus:ring-primary" 
                        />
                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                          {cat === '4K' ? '4K (8.3 MP)' : cat === '12MP' ? '12 MP +' : 'VGA / Low-Res'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Ứng dụng</label>
                  <div className="space-y-3">
                    {['QC', 'AI', 'Lab'].map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={activeAppFilter.includes(cat)}
                          onChange={() => toggleFilter(cat, 'app')}
                          className="rounded border-slate-300 text-primary focus:ring-primary" 
                        />
                        <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                          {cat === 'QC' ? 'QC (Kiểm định)' : cat === 'AI' ? 'AI Vision / Robot' : 'Y tế / Lab'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <motion.div 
                  layout
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-50"
                >
                  <div className="aspect-square bg-slate-50 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {product.id === '1' && (
                      <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-tighter">Bán chạy</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-slate-900 line-clamp-2 min-h-[3rem] mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex flex-col gap-1 mb-6">
                      <span className="text-xs text-slate-500 flex items-center gap-2">
                        <Icon name="photo_camera" className="text-[14px]" /> {product.resolution}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-2">
                        <Icon name="speed" className="text-[14px]" /> {product.fps}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-white text-xs font-bold py-3 rounded-sm active:scale-95 transition-all">XEM CHI TIẾT</button>
                      <button className="px-3 border border-slate-200 text-primary rounded-sm hover:bg-slate-50 hover:border-primary transition-colors">
                        <Icon name="request_quote" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="giải pháp" className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Ứng Dụng Thực Tế</h2>
                <p className="text-slate-600 max-w-xl">Giải pháp thị giác máy tính của chúng tôi đang vận hành trong hàng ngàn nhà máy thông minh trên toàn cầu.</p>
              </div>
              <a href="#" className="text-primary font-bold flex items-center gap-2 group">
                Xem tất cả ứng dụng
                <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SOLUTIONS.map(solution => (
                <motion.div 
                  whileHover={{ y: -10 }}
                  key={solution.id}
                  className="relative group h-[400px] rounded-xl overflow-hidden shadow-lg border border-white"
                >
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 p-8">
                    <span className="text-[10px] font-bold text-primary-light bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-4 inline-block tracking-[0.2em] uppercase">
                      {solution.subtitle}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">{solution.title}</h3>
                    <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Resources */}
        <section id="tài liệu" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 tracking-tight">Trung Tâm Tài Liệu Kỹ Thuật</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
              <p className="text-slate-500">Tải xuống trọn bộ thông số, bộ phát triển phần mềm và hướng dẫn lắp đặt.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {RESOURCES.map(res => (
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  key={res.id}
                  className="p-8 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary transition-colors">
                    <Icon name={res.icon} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{res.title}</h4>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    Tài liệu chi tiết về {res.title.toLowerCase()} dành cho các kỹ sư tích hợp.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                    {res.type === 'WEB' ? 'Truy cập ngay' : `Tải ${res.type} (${res.size})`} 
                    <Icon name={res.type === 'WEB' ? "open_in_new" : "download"} className="text-sm" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Câu hỏi thường gặp</h2>
              <p className="text-slate-500">Giải đáp nhanh các thắc mắc kỹ thuật phổ biến.</p>
            </div>
            
            <div className="space-y-4">
              {FAQS.map(faq => (
                <div key={faq.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center group"
                  >
                    <span className="font-bold text-slate-800">{faq.question}</span>
                    <Icon 
                      name="expand_more" 
                      className={`text-primary transition-transform duration-300 ${expandedFaq === faq.id ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-6 text-slate-600 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="liên hệ" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black mb-6 tracking-tight uppercase">Gửi Yêu Cầu Dự Án</h2>
                <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                  Đội ngũ kỹ sư của chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc để tư vấn giải pháp camera phù hợp nhất cho hệ thống của bạn.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="location_on" className="text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Trụ sở chính</h5>
                      <p className="text-slate-500 text-sm">Khu Công Nghệ Cao, Quận 9, TP. Thủ Đức, Việt Nam</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="mail" className="text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Email hỗ trợ kỹ thuật</h5>
                      <p className="text-slate-500 text-sm">tech-support@industrialprecision.vn</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="call" className="text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Hotline dự án</h5>
                      <p className="text-slate-500 text-sm">+84 (028) 3930 1234</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Họ và tên</label>
                      <input 
                        type="text" 
                        placeholder="Nguyễn Văn A"
                        className="w-full bg-white border-none focus:ring-2 focus:ring-primary rounded-md py-3 text-sm shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email công ty</label>
                      <input 
                        type="email" 
                        placeholder="name@company.com"
                        className="w-full bg-white border-none focus:ring-2 focus:ring-primary rounded-md py-3 text-sm shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Lĩnh vực ứng dụng</label>
                    <select className="w-full bg-white border-none focus:ring-2 focus:ring-primary rounded-md py-3 text-sm shadow-sm">
                      <option>Tự động hóa PCB</option>
                      <option>Sản xuất Ô tô</option>
                      <option>F&B / Đóng gói</option>
                      <option>Dược phẩm</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Mô tả yêu cầu</label>
                    <textarea 
                      placeholder="Vui lòng cho biết quy mô dự án và các thông số kỹ thuật cần thiết..."
                      rows={4}
                      className="w-full bg-white border-none focus:ring-2 focus:ring-primary rounded-md py-3 text-sm shadow-sm"
                    ></textarea>
                  </div>
                  <button className="w-full bg-primary text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                    Gửi yêu cầu ngay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="precision_manufacturing" className="text-primary-light text-3xl" />
              <span className="text-lg font-bold uppercase tracking-tighter">Industrial Precision</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
              Đơn vị cung cấp giải pháp thị giác máy tính và camera công nghiệp hàng đầu cho các nhà máy sản xuất linh kiện điện tử và ô tô.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, Rss].map((IconComp, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all">
                  <Icon name={idx === 0 ? "public" : idx === 1 ? "alternate_email" : "rss_feed"} className="text-lg" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-primary-light">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Icon name="location_on" className="text-primary-light text-sm" />
                <span>Khu Công Nghệ Cao, Quận 9, TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="text-primary-light text-sm" />
                <span>contact@industrialprecision.vn</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="text-primary-light text-sm" />
                <span>+84 (028) 1234 5678</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-primary-light">Khám phá</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Về chúng tôi', 'Chính sách bảo mật', 'Điều khoản dịch vụ', 'Hỗ trợ kỹ thuật'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary-light hover:underline transition-all">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
            <p className="text-xs text-slate-500">
              © 2024 Industrial Precision & Clarity. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
