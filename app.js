const app = new Vue({
    el: "#app",
    data: {
        test: "hello world",
        games: [],
        title: "",
        imagelink: "",
        developer: "",
        publisher: "",
        platform: "",
        release: "",
        summary: "",
        URL: "https://rb-penguin-project5-backend.herokuapp.com/games/"
    },
    methods: {
        getGames: function() {
            fetch(this.URL)
            .then(response => response.json())
            .then(data => {
                this.games = data
            })
        },
        createGames: function() {
            fetch(this.URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.title,
                    imagelink: this.imagelink,
                    developer: this.developer,
                    publisher: this.publisher,
                    platform: this.platform,
                    release: this.release,
                    summary: this.summary,
                })
            })
            .then(response => response.json())
            .then(data => {
                this.games.push(data) // can also make another API call here
            })
        }
    }
})