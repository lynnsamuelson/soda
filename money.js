
Vue.component('money', {
    props: ['balance'],
    template: `
        <div>
            <h1 id="money">Balance: {{balance}} &#162;</h1>
            <button v-on:click="addQuarter" >Add Quarter</button>
            <button v-on:click="addDime" >Add Dime</button>
            <button v-on:click="addNickel" >Add Nickel</button>
            <button v-on:click="changeReturn" :disabled="balance < 1">Return Change</button>
        </div>`,
        data()  {
            return {
                historyList: []
            }
        },
       
    methods: {
        addQuarter() {
            let newBalance = this.balance + 25;
            this.$emit("inputmoney", newBalance);
            this.updateHistory(`Added Quarter.  Balance = ${newBalance}\u00A2`);
        },
        addDime() {
            let newBalance = this.balance + 10;
            this.$emit("inputmoney", newBalance);
            this.updateHistory(`Added Dime.  Balance = ${newBalance}\u00A2`)
        },
        addNickel() {
            let newBalance = this.balance + 5;
            this.$emit("inputmoney", newBalance);
            this.updateHistory(`Added Nickel.  Balance = ${newBalance}\u00A2`)
        },
        changeReturn() {
            this.updateHistory(`Returned ${this.balance}.  Balance = 0\u00A2`)
            let newBalance = 0;
            this.$emit("inputmoney", newBalance);
        },
        updateHistory(item){
            let history = {
                time: moment().format("MM-DD-YY @ LT"),
                number: 1,
                item: item
            }
            this.historyList.push(history);
            this.$emit("inputpurchase", history);
        }
    }
})
