const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // we add the class visible to the element when it is in page
            entry.target.classList.add("visible-1");
        }
        // else {
        //     entry.target.classList.remove("visible");
        // }
    });
});

const hiddenElements = document.querySelectorAll(".hidden-1");
hiddenElements.forEach(element => {
    observer.observe(element);
});

