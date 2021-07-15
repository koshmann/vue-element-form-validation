<template>
	<div>
		<el-row>
			<el-col :span="12" :offset="6">

				<el-progress class="progress-bar" :percentage="formProgress" :show-text="false"></el-progress>

				<el-form
					ref="form"
					:model="fields"
					label-position="top"
					size="small"
					@submit.prevent="showModal = true"
				>
					<el-form-item
						:label="field.label"
						v-for="(field, i) in fields"
						:key="field.label"
					>
						<el-input
							v-model="field.value"
							@input="onInput(i, $event)"
						>
							<template #suffix >
								<transition name="fade" >
									<div v-if="field.activated">
										<transition name="rotate" mode="out-in">
											<i  class="el-icon-success el-input__icon text-success"
												v-if="field.valid"></i>
											<i  class="el-icon-warning el-input__icon text-error"
												v-else-if="!field.valid"></i>
										</transition>
									</div>
								</transition>
							</template>
						</el-input>

					</el-form-item>

					<el-form-item>
						<el-button 
							type="primary" 
							native-type="submit"
							:disabled="!everyFieldValid"
						> Send</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>

		<el-dialog
			title="Confirm please"
			v-model="showModal"
			width="50%"
		>
			<span>Are you sure you wanna do this?</span>
			<template #footer>
				<span class="dialog-footer">
				<el-button @click="showModal = false">Cancel</el-button>
				<el-button type="primary" @click="handleRegistration">Confirm</el-button>
				</span>
			</template>
		</el-dialog>
	</div>

</template>

<script>
	import RegistrationFormInput from "./RegistrationFormInput.vue";
	import RegistrationFormProgress from "./RegistrationFormProgress.vue";

	export default {
		components: {
			RegistrationFormInput,
			RegistrationFormProgress,
		},
		props: {
			fields: Array,
		},
		data() {
			return {
				showModal: false,
			};
		},
		computed: {
			everyFieldValid() {
				return this.fields.every((field) => field.valid);
			},
			formProgress() {
				let validFields = 0;
				this.fields.forEach((field) => {
					field.valid && validFields++;
				});
				let percentProgress = (validFields / this.fields.length) * 100;

				return percentProgress;
			},
		},
		emits:{
			'field-changed': null,
			'user-registration': null
		},
		methods: {
			onInput(i, val) {
				let fieldInfo = {
					fieldIndex: i,
					fieldValue: val.trim(),
					fieldActivated: true,
				};
				this.$emit("field-changed", fieldInfo);
			},
			handleRegistration() {
				this.showModal = false;
				this.$emit("user-registration");
			},
		},
	};
</script>

<style scoped>
.progress-bar {
	margin: 2rem 0;
}
.text-success {
	color: #67C23A;
}
.text-error {
	color: #F56C6C;
}
.absolute {
	position: absolute;
	top: 0;
	left: 0;
}
.el-form-item .el-form--label-top .el-form-item__label {
	line-height: 1;
}

.fade-enter-active{
	animation: fadeIn .6s;
}

.fade-leave-active{
	animation: fadeOut 0.3s;
}

@keyframes fadeIn{
	from{opacity: 0}
	to{opacity: 1}
}

@keyframes fadeOut{
	from{opacity: 1}
	to{opacity: 0}
}

.rotate-enter-active{
	animation: roteteIn .3s;
}

.rotate-leave-active{
	animation: rotateOut .3s;
}

@keyframes roteteIn{
	from{transform: scaleX(0)}
	to{transform: scaleX(1)}
}

@keyframes rotateOut{
	from{transform: scaleX(1)}
	to{transform: scaleX(0)}
}

</style>