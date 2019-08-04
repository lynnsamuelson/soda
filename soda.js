Vue.component('soda', {
    props: ['balance', 'flavor'],
    template: 
    `<div class="soda">
        <button
            :disabled="curbalance <50 || sodas < 1" 
            v-on:click="purchaseSoda"
        >{{flavor}} ({{sodas}} left)</button>
    </div>`,
    data()  {
        return {
            sodas: 5,
            purchased: []
        }
    },
    methods: {
        purchaseSoda(){
            let newBalance = this.curbalance - 50;
            this.sodas = this.sodas - 1;
            let purchase = {
                time: (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "),
                number: 1,
                flavor: this.flavor
            }
            this.purchased.push(purchase);
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