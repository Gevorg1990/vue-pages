const documentJs = {
    install(app) {
        // Array of background image URLs
        const imageUrls = [
            '/images/home-bg/bg1.png',
            '/images/home-bg/bg2.png',
            '/images/home-bg/bg3.png',
        ];

        // Function to update the background image
        function updateBackgroundImage() {
            // Select a random image from the array
            const newImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

            // Apply the transition class to trigger the transition effect
            $('.home').addClass('transitioning');

            // Set a timeout to remove the class after the transition ends
            setTimeout(() => {
                $('.home').css({
                    'background-image': `url(${newImageUrl})`,
                }).removeClass('transitioning');
            }, 0);
        }

        // Set an interval to change the background image every 3 seconds
        setInterval(updateBackgroundImage, 10000);

        // Call the function immediately to set the first background image
        updateBackgroundImage();
    },
    // Other properties or methods if needed
};

export default documentJs;
