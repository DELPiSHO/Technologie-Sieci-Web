const app = Vue.createApp({
    data() {
        return {
            //zadanie1
            message:'Eugene Denisov',
            //zadanie5
            image:'nadal.jpg',
            wiek:"",
            rok:"",
            min:1,
            max:99,
            randomN:""
        }
    },
    watch:{
        wiek(value) {
            if(value == 1){
                this.wiek = value
                return "Mam " + value + " rok"
            }
            else if(value > 1 && value < 5){
                this.wiek = value
                return "Mam " + value + " lata"
            }
            else if(value >= 5 && value < 22){
                this.wiek = value
                return "Mam " + value + " lat"
            }
            else if(value >= 22 && value < 25){
                this.wiek = value
                return this.wiek = "Mam " + value + " lata"
            }
            else if(value >= 25 && value < 32){
                this.wiek = value
                return "Mam " + value + " lat"
            }
            else if(value >= 32 && value < 36){
                this.wiek = value
                return "Mam " + value + " lata"
            }
            else if(value >= 36 && value < 42){
                this.wiek = value
                return "Mam " + value + " lat"
            }
            else if(value >= 42 && value < 45){
                this.wiek = value
                return "Mam " + value + " lata"
            }
        },
        rok(value){
            var yearOfBirth = 2021 - this.wiek
            var predictAge = value - yearOfBirth
            if(value < 2022) {
                this.rok = "Nie poprawnie podany rok, on musi być większy niż 2021!"
            }
            else if(value >= 2022){
                this.rok = value
                return "W roku " + value + " będę mieć " + predictAge + " lat"
            }
        },
        methods:{
            generateRandomN: function(min,max) {
                this.randomN = Math.random() * (max-min) + min;
                return randomN;
            }
        }
    }
});
app.mount("#zadanie01")