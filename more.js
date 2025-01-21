document.getElementById("showMoreBtn").addEventListener("click", function() {
    let content = document.getElementById("moreContent");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        this.innerText = "Show Less";
    } else {
        content.style.display = "none";
        this.innerText = "Show More";
    }
});
