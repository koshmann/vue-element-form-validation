<template>

		<el-header class="header">RegistrationForm</el-header>

		<transition name="slide" mode="out-in">
			<RegistrationForm
				v-if="!formSent"
				:fields="fields" 
				@user-registration="handleRegistration" 
				@field-changed="handleFieldsChanges"
			/>

			<RegistrationSummary
				v-else-if="formSent"
				:data="fields"
			/>
		</transition>

</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue';
import RegistrationSummary from './components/RegistrationSummary.vue';

export default {
	components: {
		RegistrationForm,
		RegistrationSummary
	},
	data() {
		return {
			formSent: false,
			fields: getFields(),
			show:true,
		}
	},
	methods: {
		handleRegistration(){
			this.formSent = true
		},
		handleFieldsChanges(fieldNewData) {
			let changedField = this.fields[fieldNewData.fieldIndex];

			changedField.value = fieldNewData.fieldValue;
			changedField.activated = fieldNewData.fieldActivated;
			changedField.valid = changedField.pattern.test(changedField.value)
			
		},
	},
	created(){
		this.fields.forEach(field => {
			field.valid = false;
			field.activated = false;
		})
	}
}

function getFields(){
	return (
		[
			{
				label: 'Name',
				value: '',
				pattern: /^[a-zA-Z ]{2,30}$/
			},
			{
				label: 'Phone',
				value: '',
				pattern: /^[0-9]{7,14}$/
			},
			{
				label: 'Email',
				value: '',
				pattern: /.+/
			},
			{
				label: 'Some Field 1',
				value: '',
				pattern: /.+/
			},
			{
				label: 'Some Field 2',
				value: '',
				pattern: /.+/
			}
		]
	)
}
</script>

<style scoped>
	.header {
		margin-bottom: 2rem;
		background: lightskyblue;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
	}

	.slide-enter-active{
		animation: slideIn 0.5s;
	}

	.slide-leave-active{
		animation: slideOut 0.5s;
	}

	@keyframes slideIn{
		from{opacity: 0; transform: translateY(100%) scale(0.8)}
		to{opacity: 1; transform: translateY(0) scale(1)}
	}

	@keyframes slideOut{
		from{opacity: 1; transform: translateY(0) scale(1)}
		to{opacity: 0; transform: translateY(100%) scale(0.8)}
	}
</style>

