<script>
// =====================================================
// 1. PARALLAX HERO EFFECT
// =====================================================
document.addEventListener('mousemove', function(e)
  const layers = document.querySelectorAll('.layer');
  layers.forEach(layer = 
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  );
);

// =====================================================
// 2. SMOOTH SCROLL UNTUK MENU NAVBAR
// =====================================================
document.querySelectorAll('nav a').forEach(link = {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  })
});

// =====================================================
// 3. LIGHTBOX GALERI (versi sederhana & ringan)
// =====================================================
document.addEventListener('DOMContentLoaded', function()
  const images = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');

  images.forEach(img = {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lightbox.style.display = 'flex';
    })
  });

  document.getElementById('lb-close').addEventListener('click', () = {
    lightbox.style.display = 'none'
  });

  // klik luar untuk menutup
  lightbox.addEventListener('click', (e) =
    (e.target === lightbox)
      lightbox.style.display = 'none';
    
  );
);

// =====================================================
// 4. AUDIO AMBIENCE (Tombol Play / Pause)
// =====================================================
function toggleAudio() 
  const audio = document.getElementById('ambience');
  if(audio.paused){
    audio.play()
  } else 
    audio.pause();
  

</script>
