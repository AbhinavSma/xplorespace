document.getElementById("continue").addEventListener("click", function() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("main-header").classList.remove("hidden");
    document.querySelector("main").classList.remove("hidden");
    document.querySelector("footer").classList.remove("hidden");
    document.getElementById("bg-music").play();
});

// Smooth scrolling effect for navigation
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// Fetch latest space news dynamically
async function fetchSpaceNews() {
    const newsContainer = document.getElementById("news-container");
    try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=5");
        const articles = await response.json();
        newsContainer.innerHTML = articles.map(article => `
            <div class="news-item">
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `).join("");
    } catch (error) {
        newsContainer.innerHTML = "<p>Failed to load news.</p>";
    }
}

fetchSpaceNews();