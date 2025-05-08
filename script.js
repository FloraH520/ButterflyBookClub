/**
 * 蝴蝶书会 - Butterfly Book Club
 * 网站交互脚本
 */

// 当前语言，默认为中文
let currentLang = 'zh';

// 更新页面上的所有文本内容
function updatePageLanguage() {
    // 更新文档标题和语言属性
    document.title = translations.site.title[currentLang];
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新Logo文本
    document.querySelector('.logo h1').textContent = translations.site.logo[currentLang];
    // 更新导航栏
    document.querySelector('nav ul li:nth-child(1) a').textContent = translations.nav.home[currentLang];
    document.querySelector('nav ul li:nth-child(2) a').textContent = translations.nav.about[currentLang];
    document.querySelector('nav ul li:nth-child(3) a').textContent = translations.nav.activities[currentLang];
    document.querySelector('nav ul li:nth-child(4) a').textContent = translations.nav.universities[currentLang];
    document.querySelector('nav ul li:nth-child(5) a').textContent = translations.nav.join[currentLang];
    document.querySelector('.lang-toggle').textContent = translations.nav.language[currentLang];
    
    // 更新主视觉区域
    document.querySelector('.hero-content h2').innerHTML = translations.hero.title[currentLang];
    document.querySelector('.hero-content p').innerHTML = translations.hero.description[currentLang];
    document.querySelector('.hero-buttons a.primary-btn').textContent = translations.hero.joinButton[currentLang];
    document.querySelector('.hero-buttons a.secondary-btn').textContent = translations.hero.learnMoreButton[currentLang];
    
    // 更新特色区域
    document.querySelector('#features .section-title').textContent = translations.features.title[currentLang];
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = translations.features.aiReading.title[currentLang];
    featureCards[0].querySelector('p').textContent = translations.features.aiReading.description[currentLang];
    
    featureCards[1].querySelector('h3').textContent = translations.features.crossCampus.title[currentLang];
    featureCards[1].querySelector('p').textContent = translations.features.crossCampus.description[currentLang];
    
    featureCards[2].querySelector('h3').textContent = translations.features.deepReading.title[currentLang];
    featureCards[2].querySelector('p').textContent = translations.features.deepReading.description[currentLang];
    
    featureCards[3].querySelector('h3').textContent = translations.features.thoughtCollision.title[currentLang];
    featureCards[3].querySelector('p').textContent = translations.features.thoughtCollision.description[currentLang];
    
    // 更新关于我们
    document.querySelector('#about .section-title').textContent = translations.about.title[currentLang];
    const aboutDescriptions = document.querySelectorAll('.about-description');
    aboutDescriptions[0].textContent = translations.about.description1[currentLang];
    aboutDescriptions[1].textContent = translations.about.description2[currentLang];
    
    document.querySelector('.vision h3').innerHTML = `<i class="fas fa-eye"></i> ${translations.about.vision.title[currentLang]}`;
    document.querySelector('.vision p').textContent = translations.about.vision.description[currentLang];
    
    document.querySelector('.mission h3').innerHTML = `<i class="fas fa-flag"></i> ${translations.about.mission.title[currentLang]}`;
    document.querySelector('.mission p').textContent = translations.about.mission.description[currentLang];
    
    // 更新活动展示
    document.querySelector('#activities .section-title').textContent = translations.activities.title[currentLang];
    
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards[0].querySelector('h3').textContent = translations.activities.themeReading.title[currentLang];
    activityCards[0].querySelector('.activity-date').innerHTML = `<i class="far fa-calendar-alt"></i> ${translations.activities.themeReading.date[currentLang]}`;
    activityCards[0].querySelector('p:not(.activity-date)').textContent = translations.activities.themeReading.description[currentLang];
    
    activityCards[1].querySelector('h3').textContent = translations.activities.authorDialogue.title[currentLang];
    activityCards[1].querySelector('.activity-date').innerHTML = `<i class="far fa-calendar-alt"></i> ${translations.activities.authorDialogue.date[currentLang]}`;
    activityCards[1].querySelector('p:not(.activity-date)').textContent = translations.activities.authorDialogue.description[currentLang];
    
    activityCards[2].querySelector('h3').textContent = translations.activities.crossCampusForum.title[currentLang];
    activityCards[2].querySelector('.activity-date').innerHTML = `<i class="far fa-calendar-alt"></i> ${translations.activities.crossCampusForum.date[currentLang]}`;
    activityCards[2].querySelector('p:not(.activity-date)').textContent = translations.activities.crossCampusForum.description[currentLang];
    
    document.querySelector('.view-more a').textContent = translations.activities.viewMore[currentLang];
    
    // 更新高校联盟
    document.querySelector('#universities .section-title').textContent = translations.universities.title[currentLang];
    document.querySelector('#universities .section-description').textContent = translations.universities.description[currentLang];
    
    const universityLogos = document.querySelectorAll('.university-logo');
    universityLogos[0].querySelector('p').textContent = translations.universities.universities.mit[currentLang];
    universityLogos[1].querySelector('p').textContent = translations.universities.universities.harvard[currentLang];
    universityLogos[2].querySelector('p').textContent = translations.universities.universities.tufts[currentLang];
    universityLogos[3].querySelector('p').textContent = translations.universities.universities.bu[currentLang];
    universityLogos[4].querySelector('p').textContent = translations.universities.universities.bc[currentLang];
    universityLogos[5].querySelector('p').textContent = translations.universities.universities.northeastern[currentLang];
    universityLogos[6].querySelector('p').textContent = translations.universities.universities.brandeis[currentLang];
    universityLogos[7].querySelector('p').textContent = translations.universities.universities.wellesley[currentLang];
    universityLogos[8].querySelector('p').textContent = translations.universities.universities.babson[currentLang];
    universityLogos[9].querySelector('p').textContent = translations.universities.universities.emerson[currentLang];
    
    document.querySelector('.join-alliance p').textContent = translations.universities.joinPrompt[currentLang];
    document.querySelector('.join-alliance a').textContent = translations.universities.joinButton[currentLang];
    
    // 更新加入我们
    document.querySelector('#join .section-title').textContent = translations.join.title[currentLang];
    document.querySelector('#join .join-description').textContent = translations.join.description[currentLang];
    
    const joinOptions = document.querySelectorAll('.join-option');
    joinOptions[0].querySelector('h3').textContent = translations.join.individual.title[currentLang];
    const individualBenefits = joinOptions[0].querySelectorAll('ul li');
    individualBenefits[0].textContent = translations.join.individual.benefits.benefit1[currentLang];
    individualBenefits[1].textContent = translations.join.individual.benefits.benefit2[currentLang];
    individualBenefits[2].textContent = translations.join.individual.benefits.benefit3[currentLang];
    individualBenefits[3].textContent = translations.join.individual.benefits.benefit4[currentLang];
    joinOptions[0].querySelector('a').textContent = translations.join.individual.joinButton[currentLang];
    
    joinOptions[1].querySelector('h3').textContent = translations.join.branch.title[currentLang];
    const branchBenefits = joinOptions[1].querySelectorAll('ul li');
    branchBenefits[0].textContent = translations.join.branch.benefits.benefit1[currentLang];
    branchBenefits[1].textContent = translations.join.branch.benefits.benefit2[currentLang];
    branchBenefits[2].textContent = translations.join.branch.benefits.benefit3[currentLang];
    branchBenefits[3].textContent = translations.join.branch.benefits.benefit4[currentLang];
    joinOptions[1].querySelector('a').textContent = translations.join.branch.applyButton[currentLang];
    
    // 更新联系表单
    document.querySelector('.contact-form h3').textContent = translations.contact.title[currentLang];
    document.querySelector('label[for="name"]').textContent = translations.contact.name[currentLang];
    document.querySelector('label[for="email"]').textContent = translations.contact.email[currentLang];
    document.querySelector('label[for="university"]').textContent = translations.contact.university[currentLang];
    document.querySelector('label[for="message"]').textContent = translations.contact.message[currentLang];
    document.querySelector('.contact-form button').textContent = translations.contact.submitButton[currentLang];
    
    // 更新页脚
    document.querySelector('.footer-logo p').textContent = translations.footer.slogan[currentLang];
    document.querySelector('.footer-links-column:nth-child(1) h3').textContent = translations.footer.quickLinks.title[currentLang];
    document.querySelector('.footer-links-column:nth-child(2) h3').textContent = translations.footer.contactInfo.title[currentLang];
    document.querySelector('.footer-links-column:nth-child(3) h3').textContent = translations.footer.followUs.title[currentLang];
    document.querySelector('.footer-bottom p').textContent = translations.footer.copyright[currentLang];
    
    // 更新页脚导航链接
    const footerLinks = document.querySelectorAll('.footer-links-column:nth-child(1) ul li a');
    footerLinks[0].textContent = translations.nav.home[currentLang];
    footerLinks[1].textContent = translations.nav.about[currentLang];
    footerLinks[2].textContent = translations.nav.activities[currentLang];
    footerLinks[3].textContent = translations.nav.universities[currentLang];
    footerLinks[4].textContent = translations.nav.join[currentLang];
}

// 切换语言
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updatePageLanguage();
    
    // 保存语言偏好到本地存储
    localStorage.setItem('butterflybookclub_lang', currentLang);
}

// 事件图片轮播功能
function initEventGallery() {
    const eventGallery = document.getElementById('eventGallery');
    if (!eventGallery) return;
    
    // 事件图片路径数组
    const eventImages = [
        'material/events/Harvard-event.jpg',
        'material/events/Harvard-event2.jpg'
    ];
    
    // 打乱图片顺序
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    const shuffledImages = shuffleArray([...eventImages]);
    
    // 创建并添加图片元素
    shuffledImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Event Image';
        img.className = index === 0 ? 'active' : '';
        eventGallery.appendChild(img);
    });
    
    // 设置图片轮播
    let currentIndex = 0;
    const images = eventGallery.querySelectorAll('img');
    
    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    
    // 每4秒切换一次图片
    setInterval(showNextImage, 4000);
}

document.addEventListener('DOMContentLoaded', function() {
    // 初始化事件图片轮播
    initEventGallery();
    
    // 检查本地存储中的语言偏好
    const savedLang = localStorage.getItem('butterflybookclub_lang');
    if (savedLang) {
        currentLang = savedLang;
    }
    
    // 创建语言切换按钮
    const navUl = document.querySelector('nav ul');
    const langToggleLi = document.createElement('li');
    const langToggleBtn = document.createElement('a');
    langToggleBtn.href = '#';
    langToggleBtn.className = 'lang-toggle';
    langToggleBtn.textContent = translations.nav.language[currentLang];
    langToggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleLanguage();
    });
    langToggleLi.appendChild(langToggleBtn);
    navUl.appendChild(langToggleLi);
    
    // 初始化页面语言
    updatePageLanguage();
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // 切换图标
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // 平滑滚动
    const navLinks = document.querySelectorAll('nav a, .footer-links a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 确保是锚点链接
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    // 关闭移动端菜单（如果打开）
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                    
                    // 平滑滚动到目标位置
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // 减去导航栏高度
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 滚动时导航栏样式变化
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 优化的滚动动画
    const animateOnScroll = function() {
        // 使用requestAnimationFrame来优化滚动性能
        requestAnimationFrame(() => {
            const elements = document.querySelectorAll('.feature-card, .activity-card, .university-logo, .join-option');
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                // 只处理尚未添加visible类的元素
                if (!element.classList.contains('visible')) {
                    const elementTop = element.getBoundingClientRect().top;
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('visible');
                    }
                }
            });
        });
    };
    
    // 初始检查
    animateOnScroll();
    
    // 使用节流函数优化滚动事件
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                animateOnScroll();
                scrollTimeout = null;
            }, 100); // 100ms的节流时间
        }
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const university = document.getElementById('university').value;
            const message = document.getElementById('message').value;
            
            // 在实际应用中，这里会发送数据到服务器
            // 这里仅做演示，显示提交成功消息
            
            // 创建成功消息元素
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>感谢您的留言，${name}！我们会尽快回复您。</p>
            `;
            
            // 清空表单
            contactForm.reset();
            
            // 添加成功消息
            contactForm.parentNode.appendChild(successMessage);
            
            // 5秒后移除成功消息
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }
    
    // 为CSS动画添加可见性类
    document.querySelectorAll('.feature-card, .activity-card, .university-logo, .join-option').forEach(el => {
        el.classList.add('animate-on-scroll');
    });
});

// 添加CSS样式以支持滚动动画
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        header.scrolled {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 10px 0;
        }
        
        @media (max-width: 768px) {
            nav.active {
                display: block;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                padding: 20px;
            }
            
            nav.active ul {
                flex-direction: column;
                gap: 15px;
            }
            
            .success-message {
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: white;
                padding: 15px;
                border-radius: 16px;
                margin-top: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            }
            
            .success-message i {
                font-size: 1.5rem;
                color: #5dade2;
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            }
        }
    `;
    document.head.appendChild(style);
});
