<template>
	<div class="box">
		{{pants}}
	</div>
</template>

<script>
	export default {
		data () {
      return {
      	pants: 'pantss'
      }
    }
	}
</script>

<style>
.box {
	background: silver;
	padding: 6em;
	border: 1em solid #666;
	margin-bottom: 1em;
}
</style>