// FAQ Accordion

const faqContainer = document.querySelector(".faq-content");

faqContainer.addEventListener("click", (evt) => {
    const groupHeader = evt.target.closest(".faq-group-header"); //only works for clicks within the faq-group-header div

    if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Toggle icon

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle body visibility

    groupBody.classList.toggle("open");

    // Close other open faq body divs

    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
        if(otherGroup !== group) { //not the parent element of the click-on div
            const otherGroupBody = otherGroup.querySelector(".faq-group-body");
            const otherGroupIcon = otherGroup.querySelector(".faq-group-header i");

            otherGroupBody.classList.remove("open")
            otherGroupIcon.classList.remove("fa-minus");
            otherGroupIcon.classList.add("fa-plus");
        }
    });
});

// Mobile Menu

const hamburgerBtn = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
})