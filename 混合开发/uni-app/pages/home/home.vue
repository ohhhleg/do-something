<template>
	<view>
		<text v-text="title"></text>
		<input v-model="title"/>
		<button type="primary" @click="chooseImage">选取照片</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"ohhhleg"
			}
		},
		methods: {
			chooseImage(){
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				});
			}
		}
	}
</script>

<style>

</style>
