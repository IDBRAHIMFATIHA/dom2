// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Select elements by their ID
    const colorBox = document.getElementById("color-box");
    const changeBtn = document.getElementById("change-color-btn");

    /**
     * Generates a random hexadecimal color code
     * Example: #A1B2C3
     */
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add event listener for the click event
    changeBtn.addEventListener("click", () => {
        // Generate a new color
        const newColor = getRandomColor();
        
        // Change the background color of the box
        colorBox.style.backgroundColor = newColor;
    });
});