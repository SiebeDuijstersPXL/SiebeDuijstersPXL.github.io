<script>
    async function checkRegion() {
        const eastLB = "https://us-east-1-lb.amazonaws.com";
        const westLB = "https://us-west-2-lb.amazonaws.com";

        try {
            // Try Primary Region
            let response = await fetch(eastLB, { method: "HEAD", mode: "no-cors" });
            if (response.ok || response.type === "opaque") {
                window.location.href = eastLB;
                return;
            }
        } catch (e) {}

        try {
            // Try Secondary Region
            let response = await fetch(westLB, { method: "HEAD", mode: "no-cors" });
            if (response.ok || response.type === "opaque") {
                window.location.href = westLB;
                return;
            }
        } catch (e) {}

        // If both regions are down, show an error message
        document.body.innerHTML = "<h1>Service is currently unavailable. Please try again later.</h1>";
    }

    checkRegion();
</script>
