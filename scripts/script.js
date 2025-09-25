document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButtons = document.querySelectorAll(".see-more");

    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const contentText = this.parentNode.querySelector(".content-description");
            contentText.classList.toggle("visible");
            this.textContent = contentText.classList.contains("visible") ? "See Less" : "See More";
        });
    });
});

        function showContent(id) {
            const content = document.getElementById(id);
            const isActive = content.classList.contains('active');

            const contents = document.querySelectorAll('.content');
            contents.forEach(content => content.classList.remove('active'));

            if (!isActive) {
                content.classList.add('active');
            }
        }

  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.testimonial-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling; // Select the sibling element
            content.classList.toggle('active'); // Toggle the 'active' class
        });
    });
});
