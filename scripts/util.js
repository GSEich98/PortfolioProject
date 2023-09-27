
function submitHandler() {
    document.getElementById('thank-you').showModal();
}

function dismiss() {
    document.getElementById('thank-you').style.display = "none";
}

function isInViewport(element) {
    // Check if any part of the element is in the viewport
    return element.getBoundingClientRect().top <= innerHeight;
}