// Arama fonksiyonu
function search() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  const resultsDiv = document.getElementById('search-results');
  const posts = [
    { title: "Gönderi Başlığı 1", content: "Gönderi içeriği 1" },
    { title: "Gönderi Başlığı 2", content: "Gönderi içeriği 2" },
    { title: "Gönderi Başlığı 3", content: "Gönderi içeriği 3" }
  ];

  const results = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm)
  );

  resultsDiv.innerHTML = ""; // Önceki sonuçları temizle
  if (results.length > 0) {
    results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.innerHTML = `<h3>${result.title}</h3><p>${result.content}</p>`;
      resultsDiv.appendChild(resultItem);
    });
  } else {
    resultsDiv.innerHTML = "<p>Sonuç bulunamadı.</p>";
  }
}
// Post detaylarını göstermek için fonksiyon
function showPostDetails(postId) {
  const postDetails = document.getElementById('post-details');
  const postTitle = document.getElementById('post-title');
  const postAuthor = document.getElementById('post-author');
  const postDate = document.getElementById('post-date');
  const postLikes = document.getElementById('post-likes');
  const postComments = document.getElementById('post-comments');

  // Makale verileri
  const posts = {
    post1: {
      title: "Köpek Bakımı İpuçları",
      author: "Ali Yılmaz",
      date: "12 Mayıs 2024",
      likes: 150,
      comments: 35,
      content: "Köpeklerin sağlıklı bir yaşam sürmesi için dikkat edilmesi gereken birkaç önemli nokta var..."
    },
    post2: {
      title: "Köpeklerde Eğitim Yöntemleri",
      author: "Seda Korkmaz",
      date: "15 Mayıs 2024",
      likes: 200,
      comments: 50,
      content: "Köpeklerin eğitimi, disiplin ve sabır gerektiren bir süreçtir. Bu yazıda köpek eğitimi hakkında ipuçları vereceğiz..."
    },
    post3: {
      title: "En İyi Köpek Irkları",
      author: "Mehmet Çelik",
      date: "18 Mayıs 2024",
      likes: 300,
      comments: 70,
      content: "Bazı köpek ırkları daha kolay eğitilebilirken, bazıları daha bağımsızdır. Hangi ırk sizin için uygun?"
    }
  };

  // Seçilen postun detaylarını güncelle
  postTitle.textContent = posts[postId].title;
  postAuthor.textContent = `Yayınlayan: ${posts[postId].author}`;
  postDate.textContent = `Tarih: ${posts[postId].date}`;
  postLikes.textContent = `Beğeniler: ${posts[postId].likes}`;
  postComments.textContent = `Yorumlar: ${posts[postId].comments}`;

  // Post detaylarını göster
  postDetails.style.display = 'block';
}

// Post detaylarını kapatmak için fonksiyon
function closePostDetails() {
  const postDetails = document.getElementById('post-details');
  postDetails.style.display = 'none';
}
// URL parametresinden ID'yi al
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

    const posts = {
      1: {
        title: "Köpek Bakımı İpuçları",
        author: "Ali Yılmaz",
        date: "12 Mayıs 2024",
        likes: 150,
        comments: 35,
        content: "Köpeklerin sağlıklı bir yaşam sürmesi için dikkat edilmesi gereken birkaç önemli nokta var...",
        image: "images/kopek1.jpg"
      },
      2: {
        title: "Köpeklerde Eğitim Yöntemleri",
        author: "Seda Korkmaz",
        date: "15 Mayıs 2024",
        likes: 200,
        comments: 50,
        content: "Köpeklerin eğitimi, disiplin ve sabır gerektiren bir süreçtir. Bu yazıda köpek eğitimi hakkında ipuçları vereceğiz...",
        image: "images/kopek2.jpg"
      },
      3: {
        title: "En İyi Köpek Irkları",
        author: "Mehmet Çelik",
        date: "18 Mayıs 2024",
        likes: 300,
        comments: 70,
        content: "Bazı köpek ırkları daha kolay eğitilebilirken, bazıları daha bağımsızdır. Hangi ırk sizin için uygun?",
        image: "images/kopek3.jpg"
      },
      4: {
        title: "Köpek Sağlığı: Dikkat Edilecekler",
        author: "Elif Demir",
        date: "20 Mayıs 2024",
        likes: 180,
        comments: 45,
        content: "Köpeklerin sağlıklı kalmasını sağlamak için doğru beslenme ve düzenli veteriner kontrolleri çok önemlidir...",
        image: "images/kopek4.jpg"
      },
      5: {
        title: "Köpeklerde Davranış Problemleri ve Çözümleri",
        author: "Aykut Kaya",
        date: "22 Mayıs 2024",
        likes: 220,
        comments: 40,
        content: "Köpeklerde yaygın görülen davranış problemleri ve bunlara karşı uygulanabilecek etkili çözümleri keşfedin...",
        image: "images/kopek5.jpg"
      },
      6: {
        title: "Köpeklerde Alerjiler ve Tedavi Yöntemleri",
        author: "Zeynep Yıldız",
        date: "25 Mayıs 2024",
        likes: 190,
        comments: 30,
        content: "Köpeklerde alerji belirtilerini tanımak ve tedavi seçeneklerini incelemek, onların sağlığı için kritik öneme sahiptir...",
        image: "images/kopek6.jpg"
      },
      7: {
        title: "Köpeklerin Eğitiminde Pozitif Pekiştirme",
        author: "Murat Erdem",
        date: "27 Mayıs 2024",
        likes: 250,
        comments: 60,
        content: "Pozitif pekiştirme yöntemleri ile köpeğinizin eğitimini daha eğlenceli ve etkili hale getirebilirsiniz...",
        image: "images/kopek7.jpg"
      },
      8: {
        title: "Köpekler İçin En İyi Yürüyüş Rotaları",
        author: "Burcu Özdemir",
        date: "30 Mayıs 2024",
        likes: 210,
        comments: 55,
        content: "Köpeğinizle birlikte gezip keşfedebileceğiniz en güzel yürüyüş rotalarını burada bulabilirsiniz...",
        image: "images/kopek8.jpg"
      },
      9: {
        title: "Köpekler İçin Sağlıklı Tarifler",
        author: "Ali Veli",
        date: "2 Haziran 2024",
        likes: 170,
        comments: 25,
        content: "Köpekler için hazırlayabileceğiniz sağlıklı ve lezzetli tarifler ile onları mutlu edebilirsiniz...",
        image: "images/kopek9.jpg"
      },
      10: {
        title: "Köpeklerin Sosyalizasyonu",
        author: "Fatma Aydın",
        date: "5 Haziran 2024",
        likes: 260,
        comments: 75,
        content: "Köpeklerin doğru şekilde sosyalleşmesi, onların hem fiziksel hem de psikolojik gelişimleri için çok önemlidir...",
        image: "images/kopek10.jpg"
      }
    };


// Post ID'ye göre detayları al
const post = posts[postId];

// Detayları sayfada göster
if (post) {
  document.getElementById('post-image').src = post.image;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-author').textContent = `Yayınlayan: ${post.author}`;
  document.getElementById('post-date').textContent = `Tarih: ${post.date}`;
  document.getElementById('post-likes').textContent = `Beğeniler: ${post.likes}`;
  document.getElementById('post-comments').textContent = `Yorumlar: ${post.comments}`;
  document.getElementById('post-content').textContent = post.content;
} else {
  // Eğer geçersiz bir ID varsa
  document.getElementById('post-detail').innerHTML = "<p>Bu yazı bulunamadı.</p>";
}
// Gönderi Verileri
const posts = [
  {
    id: 10,
    title: "Köpekler ve İnsanlar Arasındaki Bağ",
    date: "24 Kasım 2024",
    image: "fotolar/kopek1.jpeg",
    description: "Köpekler binlerce yıldır insanın en iyi dostu olmuştur."
  },
  {
    id: 9,
    title: "Köpek Bakım İpuçları",
    date: "23 Kasım 2024",
    image: "fotolar/kopek2.jpeg",
    description: "Köpeklerinize nasıl iyi bakacağınızı öğrenin."
  },
  {
    id: 8,
    title: "Köpek Eğitimi Kolaylaştı",
    date: "22 Kasım 2024",
    image: "fotolar/kopek3.jpeg",
    description: "Köpeğinizi etkili bir şekilde eğitmek için ipuçları."
  },
  {
    id: 7,
    title: "Köpek Sağlığı: Dikkat Edilecekler",
    date: "21 Kasım 2024",
    image: "fotolar/kopek4.jpeg",
    description: "Köpeğinizin sağlıklı kalmasına nasıl yardımcı olabilirsiniz?"
  },

];

// En Son Gönderiler
const recentPostsContainer = document.getElementById("recent-posts");
posts.slice(0, 3).forEach((post) => {
  recentPostsContainer.innerHTML += `
    <div class="post">
      <h3><a href="details.html?id=${post.id}">${post.title}</a></h3>
      <p>${post.date}</p>
    </div>
  `;
});

// En Popüler Gönderiler
const popularPostsContainer = document.getElementById("popular-posts");
posts.slice(0, 3).forEach((post) => {
  popularPostsContainer.innerHTML += `
    <div class="post">
      <a href="details.html?id=${post.id}">
        <img src="${post.image}" alt="${post.title}">
      </a>
      <p>${post.title}</p>
    </div>
  `;
});

