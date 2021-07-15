<template>
	<div>
		<label 
			:for="label" 
			class=""
		>
			{{ label }}
			<!-- <CheckCircleIcon 
				v-if="valid" 
				class="" 
			/> -->
		</label>
		
		<input 
			:id="label" 
			:name="label"
			:value="value" 
			type="text" 
			class="" 
			:class="valid && 'border-green-500'"
			@input="handleInput"
		/>
	</div>
</template>
<script>

export default {
	components: {
		
	},
	props: {
		id: String,
		value: String,
		label: String,
		activated: Boolean,
		valid: Boolean
	},
	methods: {
		handleInput(e) {
			this.$emit('got-input', e.target.value)
		}
	}

}
</script>