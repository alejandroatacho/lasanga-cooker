function lasagnaCooker() {
    const cook_requirements = 2700; // 45 minutes to seconds
    let time_passed = 0;
    let lasagna_cooked = false;
    let reminder = 0;
    let timer = setInterval(function() {
        time_passed += 1;
        reminder += 1;
        if (reminder == 5) {
            console.log(time_passed + " seconds has passed");
            reminder = 0;
        }
        if (time_passed == cook_requirements) {
            clearInterval(timer);
            lasagna_cooked = true;
            console.log("Lasagna is cooked");
        }
    }, 1000);
}
lasagnaCooker(); // Call the function to start cooking the lasagna.
