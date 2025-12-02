// 致青春 - 23数对一班 班级网站js文件

// 导航栏智能收起功能
let lastScrollTop = 0;
let isScrolling = false;
let scrollTimeout;
let hoverTimeout;
const navbar = document.querySelector('nav');
const body = document.body;

// 创建顶部悬停区域 - 高度为导航栏的一半
function createHoverZone() {
    const hoverZone = document.createElement('div');
    hoverZone.className = 'top-hover-zone';
    document.body.appendChild(hoverZone);
    return hoverZone;
}

// 显示导航栏
function showNavbar() {
    if (navbar) {
        navbar.classList.remove('nav-hidden');
        navbar.classList.add('nav-hover');
    }
}

// 隐藏导航栏
function hideNavbar() {
    if (navbar && !navbar.classList.contains('nav-hover')) {
        navbar.classList.add('nav-hidden');
    }
}

// 取消悬停状态
function cancelHoverState() {
    if (navbar) {
        navbar.classList.remove('nav-hover');
        
        // 如果不是向上滚动状态，延迟隐藏导航栏
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop >= lastScrollTop) {
            // 向下滚动或静止，延迟隐藏
            hoverTimeout = setTimeout(() => {
                if (navbar && !navbar.matches(':hover') && 
                    !document.querySelector('.top-hover-zone').matches(':hover')) {
                    hideNavbar();
                }
            }, 300); // 0.1秒延迟
        }
        // 向上滚动时保持显示，不设置超时
    }
}

// 更新导航栏背景透明度
function updateNavbarBackground() {
    if (!navbar) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// 获取当前时间并显示在指定元素中
function showCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
        timeDisplay.textContent = `- 现在是 ${dateTimeString} 我们在路上 -`;
    }
}

// 页面特定导航高亮
function setActiveNavByPage() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'main.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        // 如果当前页面与链接匹配，则高亮
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
        // 特殊处理：首页可能是 main.html 或 index.html
        else if ((currentPage === 'main.html' || currentPage === 'index.html') && 
                 (linkPage === 'main.html' || linkPage === 'index.html')) {
            link.classList.add('active');
        }
        // 特殊处理：关于我们页面
        else if (currentPage === 'about.html' && linkPage === 'about.html') {
            link.classList.add('active');
        }
    });
}

// 平滑滚动到锚点
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 初始化导航栏事件
function initNavbarEvents(hoverZone) {
    if (!navbar) return;
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        isScrolling = true;
        
        // 清除之前的超时
        clearTimeout(scrollTimeout);
        clearTimeout(hoverTimeout);
        
        // 更新导航栏背景透明度
        updateNavbarBackground();
        
        // 向下滚动且超过一定距离时隐藏导航栏
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.remove('nav-hover');
            hideNavbar();
        } 
        // 向上滚动时显示导航栏并保持
        else if (scrollTop < lastScrollTop) {
            showNavbar();
            navbar.classList.remove('nav-hover'); // 取消悬停状态，因为向上滚动要无条件保持
        }
        
        lastScrollTop = scrollTop;
        
        // 滚动结束后标记
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 100);
    });
    
    // 顶部悬停区域事件
    if (hoverZone) {
        hoverZone.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            showNavbar();
        });
        
        hoverZone.addEventListener('mouseleave', function() {
            cancelHoverState();
        });
    }
    
    // 导航栏自身悬停事件
    navbar.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
        showNavbar();
    });
    
    navbar.addEventListener('mouseleave', function() {
        cancelHoverState();
    });
}

// 高考倒计时功能
function initCountdown() {
    // 设置目标日期 (年, 月-1, 日, 时, 分, 秒)
    const targetDate = new Date(2026, 5, 7, 0, 0, 0);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            // 倒计时结束
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            
            // 可以添加倒计时结束后的处理
            document.querySelector('.countdown-title').textContent = "高考已结束";
            return;
        }
        
        // 计算天、时、分、秒
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // 更新显示
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
    
    // 初始调用
    updateCountdown();
    
    // 每秒更新一次
    setInterval(updateCountdown, 1000);
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 创建悬停区域
    const hoverZone = createHoverZone();
    
    // 初始化导航栏
    if (navbar) {
        showNavbar();
        updateNavbarBackground();
    }
    
    // 初始化导航栏事件
    initNavbarEvents(hoverZone);
    
    // 初始化平滑滚动
    initSmoothScroll();
    
    // 设置页面特定导航高亮
    setActiveNavByPage();
    
    // 初始显示时间
    showCurrentTime();
    setInterval(showCurrentTime, 1000);
    
    // 初始化高考倒计时
    initCountdown();
});