<template>
	<div class="box">
		<p>
			<slot></slot>
			<test></test>
		</p>
	</div>
</template>

<script>
import Test from "./Test.vue";
	export default {
		components: {Test}
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