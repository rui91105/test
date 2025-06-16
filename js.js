// ====== 導覽列切換顯示內容 ======

// 取得導覽列按鈕與各區塊
const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const navProject = document.getElementById('nav-project');
const navExperience = document.getElementById('nav-experience');
const aboutSection = document.getElementById('about-section');
const projectSection = document.getElementById('project-section');
const experienceSection = document.getElementById('experience-section');
const welcomeText = document.getElementById('welcome-text');
const navLinks = [navHome, navAbout, navProject, navExperience];

// 隱藏所有內容區塊
function hideAllSections() {
    aboutSection.classList.remove('active');
    projectSection.classList.remove('active');
    experienceSection.classList.remove('active');
    welcomeText.style.display = 'none';
}

// 點擊首頁
navHome.onclick = function() {
    navLinks.forEach(link => link.classList.remove('active'));
    navHome.classList.add('active');
    hideAllSections();
    welcomeText.style.display = 'block';
};

// 點擊我的介紹
navAbout.onclick = function() {
    navLinks.forEach(link => link.classList.remove('active'));
    navAbout.classList.add('active');
    hideAllSections();
    aboutSection.classList.add('active');
};

// 點擊專題作業
navProject.onclick = function() {
    navLinks.forEach(link => link.classList.remove('active'));
    navProject.classList.add('active');
    hideAllSections();
    projectSection.classList.add('active');
};

// 點擊我的經歷
navExperience.onclick = function() {
    navLinks.forEach(link => link.classList.remove('active'));
    navExperience.classList.add('active');
    hideAllSections();
    experienceSection.classList.add('active');
};

// ====== 自走車影片彈窗 ======

// 取得自走車連結與影片彈窗相關元素
const carLink = document.getElementById('car-link');
const videoModal = document.getElementById('video-modal');
const closeVideo = document.getElementById('close-video');
const carVideo = document.getElementById('car-video');

// 點擊自走車連結，開啟影片彈窗並播放
if (carLink) {
    carLink.onclick = function(e) {
        e.preventDefault();
        videoModal.style.display = 'flex';
        carVideo.src = "car.mp4";
        carVideo.currentTime = 0;
        carVideo.play();
    };
}

// 點擊關閉按鈕，關閉影片彈窗並暫停影片
if (closeVideo) {
    closeVideo.onclick = function() {
        videoModal.style.display = 'none';
        carVideo.pause();
        carVideo.src = ""; // 關閉時清空影片來源
    };
}

// 點擊黑色背景也可關閉影片彈窗
if (videoModal) {
    videoModal.onclick = function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            carVideo.pause();
            carVideo.src = ""; // 關閉時清空影片來源
        }
    };
}

// ====== 機器圖片彈窗 ======

// 取得機器連結與圖片彈窗相關元素
const machineLink = document.getElementById('machine-link');
const imageModal = document.getElementById('image-modal');
const closeImage = document.getElementById('close-image');

// 點擊機器連結，開啟圖片彈窗
if (machineLink) {
    machineLink.onclick = function(e) {
        e.preventDefault();
        imageModal.style.display = 'flex';
    };
}

// 點擊關閉按鈕，關閉圖片彈窗
if (closeImage) {
    closeImage.onclick = function() {
        imageModal.style.display = 'none';
    };
}

// 點擊黑色背景也可關閉圖片彈窗
if (imageModal) {
    imageModal.onclick = function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    };
}