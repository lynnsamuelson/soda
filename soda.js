Vue.component('soda', {
    props: ['balance', 'flavor'],
    template: 
    `<div class="soda">
        <button
            :disabled="curbalance < 50 || sodas < 1" 
            v-on:click="purchaseSoda"
        >{{flavor}} ({{sodas}} left)</button>
    </div>`,
    data()  {
        return {
            sodas: 5,
            historyList: []
        }
    },
    methods: {
        purchaseSoda(){
            let newBalance = this.curbalance - 50;
            this.sodas = this.sodas - 1;
            let purchase = {
                // time: (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "),
                time: moment().format("MM-DD-YY @ LT"),
                number: 1,
                item:`Purchased ${this.flavor}`
            }
            this.historyList.push(purchase);
            this.$emit("inputmoney", newBalance);
            this.$emit("inputpurchase", purchase);
            // this.$emit("inputmoney", purchase);
        }
    },
    computed: {
       curbalance() {
           return this.balance;
       } 
    }
})