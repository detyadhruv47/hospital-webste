(function () {
    'use strict';

    const TOTAL_FRAMES = 210;
    const FRAME_DIR = './extracted_frames/';
    const FRAME_PREFIX = 'ezgif-frame-';
    const FRAME_EXT = '.jpg'; // Using jpg as per your extraction

    const images = [];
    let loadedCount = 0;

    let currentFrameIndex = 0;
    let targetFrameIndex = 0;

    const canvas = document.getElementById('sequence-canvas');
    const ctx = canvas.getContext('2d', { alpha: false });
    const scrollContainer = document.querySelector('.scroll-container');
    const overlays = document.querySelectorAll('.overlay-text');

    function formatFrameNumber(num) {
        return String(num).padStart(3, '0');
    }

    function preloadImages() {
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = `${FRAME_DIR}${FRAME_PREFIX}${formatFrameNumber(i)}${FRAME_EXT}`;
            img.onload = onImageLoad;
            img.onerror = onImageLoad;
            images.push(img);
        }
    }

    function onImageLoad() {
        loadedCount++;
        const percent = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        document.getElementById('loader-bar').style.width = `${percent}%`;
        document.getElementById('loader-percent').textContent = `${percent}%`;

        if (loadedCount >= TOTAL_FRAMES) {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
                init();
            }, 300);
        }
    }

    function init() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('scroll', onScroll, { passive: true });

        // Initial draw
        renderFrame(0);
        onScroll();

        // Start animation loop
        requestAnimationFrame(update);
    }

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        renderFrame(currentFrameIndex);
    }

    function renderFrame(index) {
        const img = images[Math.round(index)];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth, drawHeight;

        // "Cover" behavior
        if (imgAspect > canvasAspect) {
            drawHeight = canvas.height;
            drawWidth = canvas.height * imgAspect;
        } else {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgAspect;
        }

        const offsetX = (canvas.width - drawWidth) / 2;
        const offsetY = (canvas.height - drawHeight) / 2;

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }

    function onScroll() {
        // Calculate scroll relative only to the scroll-container
        const rect = scrollContainer.getBoundingClientRect();

        // Distance from top of viewport to top of container
        const containerTop = rect.top;
        const containerHeight = rect.height;

        // The scrollable distance is container height minus the window height (which is the sticky part)
        const maxScroll = containerHeight - window.innerHeight;
        const scrolled = -containerTop;

        let scrollFraction = 0;

        if (scrolled <= 0) {
            scrollFraction = 0; // Above container
        } else if (scrolled >= maxScroll) {
            scrollFraction = 1; // Below container
        } else {
            scrollFraction = scrolled / maxScroll; // Inside container
        }

        targetFrameIndex = scrollFraction * (TOTAL_FRAMES - 1);
        updateOverlays(scrollFraction);
    }

    function updateOverlays(fraction) {
        overlays.forEach(overlay => overlay.classList.remove('visible'));

        if (fraction > 0.1 && fraction < 0.3) {
            document.getElementById('text-1').classList.add('visible');
        } else if (fraction > 0.4 && fraction < 0.6) {
            document.getElementById('text-2').classList.add('visible');
        } else if (fraction > 0.7 && fraction < 0.9) {
            document.getElementById('text-3').classList.add('visible');
        }
    }

    function update() {
        // Smooth interpolation (lerp)
        const diff = targetFrameIndex - currentFrameIndex;
        if (Math.abs(diff) > 0.01) {
            currentFrameIndex += diff * 0.1;
            renderFrame(currentFrameIndex);
        }
        requestAnimationFrame(update);
    }

    // Start
    preloadImages();

})();
