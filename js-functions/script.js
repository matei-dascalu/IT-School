const user = {
    username: "daniel",
    subscription: "MEDIUM",
};

const user2 = {
    username: "catalin",
    subscription: "HIGH",
};


const pages = [
    { name: "Homepage", subscription: ["LOW", "MEDIUM", "HIGH"] },
    { name: "Artists", subscription: ["MEDIUM", "HIGH"] },
    { name: "Lounge", subscription: ["HIGH"] },
    { name: "Listen", subscription: ["LOW", "MEDIUM"] },
];

for (let page of pages) {
    if (page.name === "Listen") {
        let userHasAccess = false;

        for (let acceptedSubscription of page.subscription) {
            if (acceptedSubscription === user.subscription) {
                userHasAccess = true;
                break;
            }
        }

        if (userHasAccess) {
            console.log("are acces");
        } else {
            console.log("NU are acces");
        }

        break;
    }
}

for (let page of pages) {
    if (page.name === "Lounge") {
        let userHasAccess = false;

        for (let acceptedSubscription of page.subscription) {
            if (acceptedSubscription === user2.subscription) {
                userHasAccess = true;
                break;
            }
        }

        if (userHasAccess) {
            console.log("are acces");
        } else {
            console.log("NU are acces");
        }

        break;
    }
}
