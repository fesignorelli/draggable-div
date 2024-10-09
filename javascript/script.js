const wrapper = document.querySelector(".wrapper"),
    header = wrapper.querySelector("header");

let isDragging = false;
let initialX, initialY;

function onDrag(event) {
    if (isDragging) {
        const movementX = event.clientX - initialX;
        const movementY = event.clientY - initialY;

        let getStyle = window.getComputedStyle(wrapper);
        let left = parseInt(getStyle.left) || 0;
        let top = parseInt(getStyle.top) || 0;

        wrapper.style.left = `${left + movementX}px`;
        wrapper.style.top = `${top + movementY}px`;

        initialX = event.clientX;
        initialY = event.clientY;
    }
}

header.addEventListener("mousedown", (event) => {
    isDragging = true;
    initialX = event.clientX;
    initialY = event.clientY;
    header.classList.add("active");
    document.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    header.classList.remove("active");
    document.removeEventListener("mousemove", onDrag);
});
