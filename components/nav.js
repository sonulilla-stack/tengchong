/**
 * 腾冲旅游网站 - 导航栏组件
 * 在所有页面复用
 */
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.body.getAttribute('data-page') || 'index';
    
    const navHTML = `
        <nav class="main-nav">
            <div class="nav-container">
                <a href="index.html" class="nav-logo">
                    <img class="logo-img" src="images/logo.png" alt="魅力腾冲">
                    <span class="logo-text">魅力腾冲</span>
                </a>
                <button class="nav-toggle" id="navToggle" aria-label="菜单">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="index.html" class="${currentPage === 'index' ? 'active' : ''}">首页</a></li>
                    <li><a href="attractions.html" class="${currentPage === 'attractions' ? 'active' : ''}">景点介绍</a></li>
                    <li><a href="heritage.html" class="${currentPage === 'heritage' ? 'active' : ''}">文化遗产</a></li>
                    <li><a href="guide.html" class="${currentPage === 'guide' ? 'active' : ''}">旅游攻略</a></li>
                    <li><a href="transport.html" class="${currentPage === 'transport' ? 'active' : ''}">交通指南</a></li>
                    <li><a href="contact.html" class="${currentPage === 'contact' ? 'active' : ''}">联系我们</a></li>
                </ul>
            </div>
        </nav>
    `;
    
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;
        
        // 移动端菜单切换
        const toggle = document.getElementById('navToggle');
        const menu = document.getElementById('navMenu');
        if (toggle && menu) {
            toggle.addEventListener('click', function() {
                menu.classList.toggle('open');
                toggle.classList.toggle('active');
            });
            
            // 点击链接后关闭菜单
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('open');
                    toggle.classList.remove('active');
                });
            });
        }
    }
});
