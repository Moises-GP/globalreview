const navTexts = {
    globalreview: "GlobalReview.Net",
    smartphones: "Smartphones",
    socRanking: "SoC Ranking",
    socCompare: "SoC Compare",
    laptops: "Laptops",
    cpu: "CPU",
    gpu: "GPU"
};

function updateNavTexts() {
    const navMap = {
    globalreview: document.getElementById("nav-globalreview"),
    smartphones: document.getElementById("nav-smartphones"),
    socRanking: document.getElementById("nav-soc-ranking"),
    socCompare: document.getElementById("nav-soc-compare"),
    laptops: document.getElementById("nav-laptops"),
    cpu: document.getElementById("nav-cpu"),
    gpu: document.getElementById("nav-gpu")
    };
    
    for (const key in navTexts) {
    if (navMap[key]) navMap[key].textContent = navTexts[key];
    }
}

document.addEventListener("DOMContentLoaded", updateNavTexts);

const buttonGroupTexts = {
    sectionComparisons: "Comparisons",
    smartphones: "Smartphones",
    laptops: "Laptops",
    soc: "SoC",
    cpu: "CPU",
    gpu: "Graphics Cards",
    sectionRankings: "Rankings",
    socRanking: "Mobile SoC",
    desktopCpu: "Desktop Processors",
    laptopCpu: "Laptop Processors",
    desktopGpu: "Desktop GPU",
    laptopGpu: "Laptop GPU",
    dxomark: "DxOMark"
};

function updateButtonGroupTexts() {
    const sectionComparisons = document.getElementById("section-comparisons");
    const sectionRankings = document.getElementById("section-rankings");
    if (sectionComparisons) sectionComparisons.textContent = buttonGroupTexts.sectionComparisons;
    if (sectionRankings) sectionRankings.textContent = buttonGroupTexts.sectionRankings;

    const btnMap = {
    smartphones: document.querySelector("#btn-smartphones span"),
    laptops: document.querySelector("#btn-laptops span"),
    soc: document.querySelector("#btn-soc span"),
    cpu: document.querySelector("#btn-cpu span"),
    gpu: document.querySelector("#btn-gpu span"),
    socRanking: document.querySelector("#btn-soc-ranking span"),
    desktopCpu: document.querySelector("#btn-desktop-cpu span"),
    laptopCpu: document.querySelector("#btn-laptop-cpu span"),
    desktopGpu: document.querySelector("#btn-desktop-gpu span"),
    laptopGpu: document.querySelector("#btn-laptop-gpu span"),
    dxomark: document.querySelector("#btn-dxomark span")
    };
    for (const key in btnMap) {
    if (btnMap[key]) btnMap[key].textContent = buttonGroupTexts[key];
    }
}

document.addEventListener("DOMContentLoaded", updateButtonGroupTexts);
