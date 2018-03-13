var coin = {
    state: 0,
    flip: function () {
        // randomly set this.state to be either 0 or 1
        this.state = Math.floor(Math.random() * 2);
        return this.state;
    },
    toString: function () {
        // return “H” or “T” depending on whether this.state is 0 or 1
        switch (this.state) {
            case 0:
                return "H";
                break;
            case 1:
                return "T";
        }
    },
    toHTML: function () {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        switch (coin.toString()) {
            case "H":
                img.setAttribute("id", "heads");
                img.setAttribute("src", "photos/pepsi_logo.png");
                // document.body.appendChild(img);
                break;
            case "T":
                img.setAttribute("id", "tails");
                img.setAttribute("src", "photos/coca-cola-logo.png");
                // document.body.appendChild(img);
        };
        return img;
    }
};

for (i = 1; i < 21; i++) {
    console.log(i + ": State - " + coin.state);
    console.log(i + ": Flip - " + coin.flip());
    console.log(i + ": String - " + coin.toString());
    console.log(i + ": html " + coin.toHTML());
    document.body.appendChild(coin.toHTML());
};



