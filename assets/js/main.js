document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active'); // 햄버거 아이콘을 X 아이콘으로 변경
        if (nav.classList.contains('active')) {
            nav.style.maxHeight = nav.scrollHeight + "px";
        } else {
            nav.style.maxHeight = "0px";
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active'); // 메뉴를 닫을 때 X 아이콘을 햄버거 아이콘으로 변경
                nav.style.maxHeight = "0px";
            }
        });
    });

    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // 200px 이상 스크롤하면 버튼 표시
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // 위로 스크롤 버튼 클릭 이벤트 리스너 추가
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
