import Vue from 'vue'
import axios from 'axios';

// Vue.component('tabs', {
// 	props: ['title', 'body'],
// 	template: `
// 	<div>
// 	  <div class="tabs">
// 		  <ul>
// 		  	pants
// 		  </ul>
// 		</div>
// 	</div>
// 	`,
// 	data() {
// 		return { 
// 			tabs:[] 
// 		};
// 	}
// });
// import App from './App.vue'

new Vue({
  el: '#root',
  data:{
		skills: [],
		value: ''
	},
	mounted(){
  	// when mounted
  	axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
	  .then(response => this.skills = response.data[0])
  },
})
