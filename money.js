
Vue.component('money', {
    props: ['balance'],
    template: `
        <div>
            <h1 id="money">The balance is {{balance}} &#162;</h1>
            <button v-on:click="addQuarter" >Add Quarter</button>
            <button v-on:click="changeReturn" :disabled="balance < 1">Return Change</button>
        </div>`,
       
    methods: {
        addQuarter() {
            let newBalance = this.balance + 25;
            this.$emit("inputmoney", newBalance);
        },
        changeReturn() {
            let newBalance = 0;
            this.$emit("inputmoney", newBalance);
        }
    }
})
