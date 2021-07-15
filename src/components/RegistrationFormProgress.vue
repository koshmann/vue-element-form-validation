<template>
	<div>
		<button 
			type="submit" 
			:disabled="disabled" 
			class=""
			:class="buttonClasses"
		>
			<div 
				class=""
				:style="{'width': formProgress + '%'}"
			></div>
		</button>
	</div>
</template>

<script>


export default {
	components: {
		
	},
	props: {
		disabled: Boolean,
		formProgress: Number,
	},
	computed: {
		buttonClasses() {
			return {
				'': this.disabled,
				'': !this.disabled
			}
		}
	}
}
</script>