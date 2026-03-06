/**
 * 腾冲旅游网站 - 主脚本
 * 滚动动画、通用交互
 */

document.addEventListener('DOMContentLoaded', function() {
    // 滚动显示动画
    initRevealAnimation();
    
    // 导航栏滚动效果
    initNavScroll();

    // 首页宣传片：本地视频选择播放
    initPromoVideo();
});

/**
 * 滚动时元素淡入显示
 */
function initRevealAnimation() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * 导航栏滚动时背景变化
 */
function initNavScroll() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 20px rgba(45, 90, 61, 0.2)';
        } else {
            nav.style.boxShadow = '0 4px 20px rgba(45, 90, 61, 0.15)';
        }
    });
}

/**
 * 首页宣传片：选择本地视频并播放
 */
function initPromoVideo() {
    const fileInput = document.getElementById('promoVideoFile');
    const video = document.getElementById('promoVideo');
    if (!fileInput || !video) return;

    let objectUrl = null;

    fileInput.addEventListener('change', () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) return;

        if (objectUrl) URL.revokeObjectURL(objectUrl);
        objectUrl = URL.createObjectURL(file);

        video.src = objectUrl;
        video.load();
        video.play().catch(() => {});
    });

    window.addEventListener('beforeunload', () => {
        if (objectUrl) URL.revokeObjectURL(objectUrl);
    });
}
