document.addEventListener("DOMContentLoaded", function() {
    function showContent(tab) {
        var content = document.getElementById("content");
        content.innerHTML = "<h1>" + tab.charAt(0).toUpperCase() + tab.slice(1) + "</h1>";
    }

    var links = document.querySelectorAll('.sidebar a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var tab = this.getAttribute('data-tab');
            showContent(tab);
        });
    });

    // Show the 'home' tab by default
    showContent('home');
});
