function toggleText() {
    var expandableText = document.getElementById("expandable-text");
    expandableText.classList.toggle("expanded");
    var toggleBtn = document.querySelector(".toggle-btn");
    if (expandableText.classList.contains("expanded")) {
        toggleBtn.textContent = "Скрыть текст";
    } else {
        toggleBtn.textContent = "Показать текст";
    }
}
