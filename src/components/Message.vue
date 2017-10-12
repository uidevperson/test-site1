<template>
	<div class="box">
		<p>
			<slot></slot>
		</p>
	</div>
</template>

<script>
	export default {

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