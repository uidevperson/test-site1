import Vue from 'vue'
import axios from 'axios';

Vue.component('tabs', {
	props: ['title', 'body'],
	template: `
	<div>
	  <div class="tabs">
		  <ul>
		  	pants
		  </ul>
		</div>
	</div>
	`,
	data() {
		return { 
			tabs:[] 
		};
	}
});
// import App from './App.vue'

new Vue({
  el: '#root',
  data:{
		couponApplied: false,
		value: ''
	},
	methods: { 	
		onCouponApplied(value){
			this.couponApplied = true;
			this.value = value;
		}
	},
	mounted(){
  	// when mounted
  	axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
	  .then(function (response) {
	    var test = JSON.stringify(response.data[0]);
	    console.log(test);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  },
})
