/**
 * 腾冲旅游网站 - 轮播图功能
 */
class Carousel {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.items = this.container.querySelectorAll('.carousel-item');
        this.dots = this.container.querySelectorAll('.carousel-dot');
        this.prevBtn = this.container.querySelector('.carousel-arrow.prev');
        this.nextBtn = this.container.querySelector('.carousel-arrow.next');
        
        this.currentIndex = 0;
        this.autoPlay = options.autoPlay !== false;
        this.interval = options.interval || 5000;
        this.timer = null;

        this.init();
    }

    init() {
        if (this.items.length === 0) return;

        this.showSlide(0);

        // 自动播放
        if (this.autoPlay) {
            this.startAutoPlay();
        }

        // 点击切换
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // 鼠标悬停暂停
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => {
            if (this.autoPlay) this.startAutoPlay();
        });
    }

    showSlide(index) {
        this.currentIndex = (index + this.items.length) % this.items.length;
        
        this.items.forEach((item, i) => {
            item.classList.toggle('active', i === this.currentIndex);
        });
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }

    next() {
        this.showSlide(this.currentIndex + 1);
        if (this.autoPlay) {
            this.resetAutoPlay();
        }
    }

    prev() {
        this.showSlide(this.currentIndex - 1);
        if (this.autoPlay) {
            this.resetAutoPlay();
        }
    }

    goTo(index) {
        this.showSlide(index);
        if (this.autoPlay) {
            this.resetAutoPlay();
        }
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.timer = setInterval(() => this.next(), this.interval);
    }

    stopAutoPlay() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}
