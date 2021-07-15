import { createApp } from 'vue'
import App from './App.vue'

import { ElButton, ElForm, ElFormItem, ElInput, ElRow, ElCol, ElProgress, ElDialog, ElHeader, ElIcon, ElDescriptions, ElDescriptionsItem } from 'element-plus';

const app = createApp(App);

app.component(ElButton.name, ElButton);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElInput.name, ElInput);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElProgress.name, ElProgress);
app.component(ElDialog.name, ElDialog);
app.component(ElHeader.name, ElHeader);
app.component(ElIcon.name, ElIcon);
app.component(ElDescriptions.name, ElDescriptions);
app.component(ElDescriptionsItem.name, ElDescriptionsItem);

app.mount('#app')
