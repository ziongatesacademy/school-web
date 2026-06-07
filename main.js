AOS.init({ duration: 800, once: false, mirror: true, offset: 100 });

function animateProgressBars() {
    const progress1 = document.getElementById('progress1');
    const progress2 = document.getElementById('progress2');
    const progress3 = document.getElementById('progress3');
    if(progress1 && progress1.style.width === '0%') {
        progress1.style.width = '85%';
        progress2.style.width = '100%';
        progress3.style.width = '90%';
    }
}

const performanceSection = document.getElementById('admissions');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
if(performanceSection) observer.observe(performanceSection);

// Gallery Data with robust placeholders to avoid broken images
const galleryImages = [
    { src: "https://i.postimg.cc/yYxpnCYb/IMG_20260102_WA0008(1).jpg", category: "classroom", caption: "ECDE Classes", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/qBjZ8v0D/IMG_20260102_WA0005.jpg", category: "classroom", caption: "Interactive CBC Lesson", fallback: "https://placehold.co/600x400?text=Classroom" },
    { src: "https://i.postimg.cc/TY1NQvYN/IMG_20260102_WA0031.jpg", category: "classroom", caption: "Down-school Entrance", fallback: "https://placehold.co/600x400?text=Sports" },
    { src: "https://i.postimg.cc/65Pjmb8y/IMG_20260102_WA0079.jpg", category: "events", caption: "Graduation Ceremony", fallback: "https://placehold.co/600x400?text=Graduation" },
    { src: "https://i.postimg.cc/vH8MvWhP/2_20260103_150517_0001_Picsart_Ai_Image_Enhancer.png", category: "Intake", caption: "Ongoing intake", fallback: "https://placehold.co/600x400?text=Innovation" },
    { src: "https://i.postimg.cc/HsWHtQzP/IMG_20260102_WA0045.jpg", category: "classroom", caption: "Upper-school classes", fallback: "https://placehold.co/600x400?text=Football" },
    { src: "https://i.postimg.cc/3JLhfdbM/IMG_20260102_WA0081.jpg", category: "staffs", caption: "Teachers", fallback: "https://placehold.co/600x400?text=PrizeDay" },
    { src: "https://i.postimg.cc/tCrbvYvw/IMG_20260102_WA0090.jpg", category: "events", caption: "Graduation Ceremony", fallback: "https://placehold.co/600x400?text=Digital" },
    { src: "https://i.postimg.cc/ZKfmsCDZ/IMG_20260102_WA0093.jpg", category: "events", caption: "Graduation Ceremony", fallback: "https://placehold.co/600x400?text=Music" },
    { src: "https://i.postimg.cc/wTWz47bq/IMG_20260102_WA0101.jpg", category: "events", caption: "Prayer Day", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/MKsw3vrp/IMG_20260102_WA0105.jpg", category: "clubs", caption: "Scouts", fallback: "https://placehold.co/600x400?text=Concert"  },
    { src: "https://i.postimg.cc/Nj5c3BWf/IMG_20260102_WA0107.jpg", category: "events", caption: "Prayer Day", fallback: "https://placehold.co/600x400?text=Concert"  },
    { src: "https://i.postimg.cc/Dw8T9ntz/IMG_20260102_WA0119.jpg", category: "events", caption: "Graduation Ceremony", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/7ZfkFwpm/IMG_20260102_WA0121(1).jpg", category: "students", caption: "Lower class Pupils", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/W1Cvjxv6/IMG_20260103_WA0026(1).jpg", category: "students", caption: "Our 2026 Candidates", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/BvwX4ggb/019d733d_7423_4840_9989_60491f002f3e.jpg", category: "events", caption: "Graduation Ceremony", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/yYzW1WFZ/1290972e_2d10_4fbb_b460_735406790168.jpg", category: "events", caption: "Graduation Ceremony", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/nrKFjYvM/2f5791e4_5600_43cb_82c0_4850500fc1a8.jpg", category: "students", caption: "upper class Pupils", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/CxrFqKfG/5507ddc0_2f3f_46ff_ba1d_b5a5a251e695.jpg", category: "sports", caption: "Games Outreach", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/pLX5bWgy/7bfaeedd-b9c5-427d-9108-3f7c130b053f.jpg", category: "classroom", caption: "Computer Lab", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/RZKtLp56/Whats-App-Image-2026-06-07-at-11-18-12-AM.jpg ", category: "classroom", caption: "Grade 5 Classes", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/FH3SVC5H/Whats-App-Image-2026-06-07-at-11-18-24-AM.jpg", category: "classroom", caption: "Computer Room", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/dVrCjNP1/Whats-App-Image-2026-06-07-at-11-19-48-AM.jpg ", category: "clubs", caption: "Music Instruments", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/g28hHtF0/Whats-App-Image-2026-06-07-at-11-20-22-AM.jpg", category: "classroom", caption: "Music Class", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/7Yp778cL/Whats-App-Image-2026-06-07-at-11-21-41-AM.jpg", category: "clubs", caption: "Music Instruments", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/9QZ9Yg5z/Whats-App-Image-2026-06-07-at-11-21-41-AM-(1).jpg ", category: "clubs", caption: "Music Instruments", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/25YZcdrx/Whats-App-Image-2026-06-07-at-11-21-42-AM.jpg", category: "clubs", caption: "Musiic Intsruments", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/vZfnt2Fq/Whats-App-Image-2026-06-07-at-11-21-44-AM.jpg", category: "classroom", caption: "Guitars to learn", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/nhBmGSb7/Whats-App-Image-2026-06-07-at-11-21-45-AM.jpg", category: "clubs", caption: "Marimba for Music", fallback: "https://placehold.co/600x400?text=Concert" },
    { src: "https://i.postimg.cc/FKw4Z0qv/Whats-App-Image-2026-01-20-at-4-59-44-AM.jpg", category: "clubs", caption: "Our School in Regional Music Competition", fallback: "https://placehold.co/600x400?text=Concert" }
];

function renderGallery(filter = "all") {
    const grid = document.getElementById("dynamicGalleryGrid");
    if (!grid) return;
    const filtered = filter === "all" ? galleryImages : galleryImages.filter(img => img.category === filter);
    grid.innerHTML = filtered.map(img => `
        <div class="gallery-item" data-src="${img.src}" data-caption="${img.caption}">
            <img src="${img.src}" alt="${img.caption}" loading="lazy" onerror="this.src='${img.fallback}'">
        </div>
    `).join("");
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-src');
            const caption = item.getAttribute('data-caption');
            document.getElementById('lightboxImg').src = imgSrc;
            document.getElementById('lightboxCaption').innerText = caption;
            document.getElementById('lightbox').classList.add('active');
        });
    });
}

const tabContainer = document.getElementById('galleryTabs');
const categories = ["all", "events", "staffs", "classroom", "students", "clubs","sports"];
categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.innerText = cat === "all" ? "Gallery" : cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.classList.add('gallery-tab-btn');
    if (cat === "all") btn.classList.add('active-tab');
    btn.setAttribute('data-filter', cat);
    btn.addEventListener('click', () => {
        document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active-tab'));
        btn.classList.add('active-tab');
        renderGallery(cat);
    });
    tabContainer.appendChild(btn);
});
renderGallery("all");

// Lightbox close
const lightboxDiv = document.getElementById('lightbox');
document.querySelector('.close-lightbox')?.addEventListener('click', () => lightboxDiv.classList.remove('active'));
lightboxDiv?.addEventListener('click', (e) => { if (e.target === lightboxDiv) lightboxDiv.classList.remove('active'); });

// Mobile menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
mobileBtn?.addEventListener('click', () => mainNav.classList.toggle('active'));
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const hash = this.getAttribute('href');
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth <= 768) mainNav.classList.remove('active');
    });
});

// Newsletter
document.getElementById('newsBtn')?.addEventListener('click', () => {
    const email = document.getElementById('newsEmail')?.value;
    if(email && email.includes('@')) alert(`Thank you! ${email} subscribed to Zion Gates newsletter.`);
    else alert("Please enter a valid email address.");
});

document.getElementById('realDownloadBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert("📄 Download link: Performance Report will be shared directly by the admin. Contact school for detailed report or request via email.");
});
