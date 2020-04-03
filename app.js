Vue.component('story', {
    props: ['headline', 'subtitle', 'postTime', 'index','number'],
    template: `<div>
        <v-card class="vcard-inner">
            <v-card-title class="headline">{{headline }} {{ number }}</v-card-title>

        <v-card-subtitle class="vcard-subtitle">{{ subtitle }}</v-card-subtitle>
	<v-card-footer class="footer">
	<span class="footer-left">{{ postTime }}</span>
	<span class="footer-right">story {{ number }}</span>
	</v-card-footer>
            <v-card-actions>
            </v-card-actions>
        </v-card>
    </div>`
});

new Vue({
    el: '#app',
    methods: {
        handleGetPrevious: function(event) {
            alert("Fetch previous 10 from the DB and update stories here");
        },
        handleGetNext: function(event) {
            alert("Fetch next 10 from the DB and update stories here");
        }
    },
    data: {
        stories: [1,2,3,4,5,6,7,8,9,10].map(function (number, index) {
            return {
                headline: 'My story',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                postTime: 'March 20, 2020  18:59',
                index: index,
		number:number
            }
        })
    }
});
