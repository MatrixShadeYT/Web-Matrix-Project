var data = {
  projects: [
    {
      name: "Template Website",
      icon: "/imgs/house_icon.png",
      link: "/projects/template.html",
      desc: "A template for a website project. This template has the Title, Description, Preview, and File Info sections.",
    },
    {
      name: "Chess",
      icon: "/imgs/chess_icon.png",
      link: "/projects/chess.html",
      desc: "My attempt at making chess. Definately not complete.",
    },
    {
      name: "Tic-Tac-Toe",
      icon: "/imgs/hashtag.png",
      link: "/projects/tictactoe.html",
      desc: "A simple tic-tac-toe game.",
    },
    {
      name: "PolyTrack AI",
      icon: "/imgs/ai_icon.png",
      link: "/projects/polytrack.html",
      desc: "I tried to make AI but I ended up just doing a simple inputs thing."
    },
    {
      name: "tilemapGame",
      icon: "/imgs/hashtag.png",
      link: "/projects/tilemapGame.html",
      desc: "I went ahead and tried to make a tilemap game."
    }
  ],
  media: [
    {
      user: "@MatrixShadeYT",
      cat: "YouTube",
      icon: ["fab", "fa-youtube", "text-red-500", "icon"],
      url: "https://www.youtube.com/@MatrixShadeYT"
    },
    {
      user: "@MatrixShadeYT",
      cat: "GitHub",
      icon: ["fab", "fa-github", "text-white", "icon"],
      url: "https://www.github.com/MatrixShadeYT?tab=repositories"
    },
    {
      user: "@Example",
      cat: "Twitch",
      icon: ["fab", "fa-twitch", "text-purple-500", "icon"],
      url: "#"
    },
    {
      user: "@MatrixShadeYT",
      cat: "Discord",
      icon: ["fab", "fa-discord", "text-indigo-500", "icon"],
      url: "https://www.discord.gg/"
    },
  ],
  arts: [
    {
      name: "Shy Gal",
      link: "https://youtube.com/shorts/OhSumx7kX08?si=Fa_ahY1YGePykbFX",
      url: "https://placehold.co/600x400/1e2129/d1d5db?text=Shy%20Gal"
    },
  ],
};

function loadProject(page) {
  for (let i = 0; i < data["projects"].length; i++) {
    const div = document.createElement("div");
    div.classList.add("project-card", "rounded-lg", "p-6", "flex", "flex-col");
    const div2 = document.createElement("div");
    div2.classList.add("flex", "items-center", "mb-4");
    div.appendChild(div2);
    const div3 = document.createElement("div");
    div3.classList.add("icon-container", "p-3", "rounded-lg", "mr-4");
    div2.appendChild(div3);
    const img = document.createElement("img");
    img.style.height = "26px";
    img.style.width = "26px";
    img.src = data["projects"][i].icon;
    img.alt = data["projects"][i].name;
    div3.appendChild(img);
    const h2 = document.createElement("h2");
    h2.classList.add("text-2xl", "font-bold");
    h2.textContent = data["projects"][i].name;
    div2.appendChild(h2);
    const p = document.createElement("p");
    p.classList.add("text-gray-400", "flex-grow");
    p.textContent = data["projects"][i].desc;
    div.appendChild(p);
    const a = document.createElement("a");
    a.classList.add(
      "mt-4",
      "text-cyan-400",
      "hover:text-cyan-300",
      "self-start"
    );
    a.href = data["projects"][i].link;
    a.innerHTML = "View Project &rarr;";
    div.appendChild(a);
    page.appendChild(div);
  }
}

function loadMedia(page) {
  for (let i = 0; i < data["media"].length; i++) {
    const div = document.createElement("div");
    div.classList.add(
      "social-card",
      "rounded-xl",
      "p-6",
      "shadow-lg",
      "border",
      "border-gray-700"
    );
    const a = document.createElement("a");
    a.href = data["media"][i].url;
    div.appendChild(a);
    const icon = document.createElement("i");
    icon.classList.add(...data["media"][i].icon);
    a.appendChild(icon);
    const h2 = document.createElement("h2");
    h2.classList.add("text-xl", "font-semibold");
    h2.textContent = data["media"][i].cat;
    a.appendChild(h2);
    const p = document.createElement("p");
    p.classList.add("text-sm", "text-gray-400");
    p.textContent = data["media"][i].user;
    a.appendChild(p);
    page.appendChild(div);
  }
}

function loadArt(page) {
  for (let i = 0; i < data["arts"].length; i++) {
    const div = document.createElement("div");
    div.classList.add(
      "art-card",
      "rounded-xl",
      "overflow-hidden",
      "shadow-lg",
      "border",
      "border-gray-700"
    );
    const a = document.createElement("a");
    a.href = data["arts"][i].link;
    div.appendChild(a);
    const img = document.createElement("img");
    img.src = data["arts"][i].url;
    img.alt = data["arts"][i].name;
    a.appendChild(img);
    const div2 = document.createElement("div");
    div2.classList.add("p-4", "text-center");
    a.appendChild(div2);
    const h2 = document.createElement("h2");
    h2.classList.add("text-xl", "font-semibold");
    h2.textContent = data["arts"][i].name;
    div2.appendChild(h2);
    page.appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var url = window.location.href.split("/").slice(-1)[0].replace(".html", "");
  const page = document.getElementById("page");
  if (url == "projects") {
    loadProject(page);
  } else if (url == "media") {
    loadMedia(page);
  } else if (url == "art") {
    loadArt(page);
  } else {
    console.log("Error: Invalid.");
  }
});
