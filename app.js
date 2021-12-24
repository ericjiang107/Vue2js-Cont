var instance1 = new Vue({
    el: '#v-for',
    data: {
        name: 'jack',
        characters: ['Mario', "Luigi", "Yoshi", "Bowser"],
        ninjas: [
             { name: 'Eric', age: 25 },
             { name: 'Tester', age: 25 },
             { name: 'Ken', age: 55 }
        ]
    },
    methods: {

    },
    computed: {

    }
});

// creating a component template that can be injected into each instance
// this is a method taking 2 parameters taking in the name and an object
// Very important that the reusebable component you create has to go above/before the components using that specific reuseable component
Vue.component('greeting', {
    template: '<p> Hey there, this is a reuseable component {{ name }} <button v-on:click="changeName"> changeName method </button> </p>',
    // we can also add data object with properties in here too but data must be a function here
    data: function(){
        // returns an object
        // the reason why we want to return an object is so that all the other instances share the same data objects --> if we update the object, 
        // every other instance using the object gets updated
        return {
            name: 'Reused Eric'
        }
    },
    methods: {
        changeName: function(){
            this.name = 'changedName';
        }
    }
});

// a component is a reuseable piece of code in different vue instances
// the component is basically: 'components1' and 'components2'
var instance2 = new Vue({
    el: '#components1',
    data: {
        
    },
    methods: {

    },
    computed: {

    }
});

var instance3 = new Vue({
    el: '#components2',
    data: {
        
    },
    methods: {

    },
    computed: {

    }
});


var instance4 = new Vue({
    el: '#refs',
    data: {
        // we can also create data variable to store the properties in
        output: 'fav food',
    },
    methods: {
        readRefs: function(){
            // "this.$refs" refers to the entire instance and gets you all the refs within the entire page of the instance
            // input is the name of the ref
            // value is one of the refs we can find within our console.log
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;
        }
    },
    computed: {

    }
})