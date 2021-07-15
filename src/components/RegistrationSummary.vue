<template>
	<el-row>
		<el-col :span="12" :offset="6">
			<el-descriptions title="User Info" :column="2">
				<el-descriptions-item 
					v-for="field in data" 
					:key="field.label" 
					:label="field.label"
				>
					{{ field.value }}
				</el-descriptions-item>
			</el-descriptions>
		</el-col>
	</el-row>
</template>

<script>



export default {
	props: {
		data: Array
	}

}
</script>