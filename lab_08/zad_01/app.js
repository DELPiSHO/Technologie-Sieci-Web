const app = Vue.createApp({
    data() {
        return {
            message: "Eugene Denisov",
            wiek: "",
            rok: "",
            randomN: Math.floor(Math.random() * 100),
            image:'nadal.jpg',
            imie: "Eugene"
        }
    },
    methods: {
        wiekE(event) {
            this.wiek = event.target.value;
        },
        rokE(event) {
            let rokE = event.target.value;
            let roznica = parseInt(this.wiek) + (rokE-2021);
            if(rokE <= 2021) {
                this.rok = "Proszę podać rok większy niż 2021";
            }
            else {
                this.rok = "W roku " + rokE + " będę miał " + roznica;
            }
        }
    }
});

app.mount('#zadanie01')