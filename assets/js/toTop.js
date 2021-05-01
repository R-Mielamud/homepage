const toTopButton = document.getElementById("toTop");

if (toTopButton) {
    let toTopInterval = null;

    toTopButton.onclick = () => {
        if (!toTopInterval) {
            toTopInterval = setInterval(() => {
                if (scrollY <= 10) {
                    clearInterval(toTopInterval);
                    toTopInterval = null;
                }

                scrollBy(0, -30);
            }, 15);
        }
    };
}
