<template>
	<!-- 租借 -->
	<view class="theLoan">
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	data() {
		return {
			isNo: true,
			indexs: 0,
		};
	},
	computed: { ...mapState(['token', 'id', 'type', 'username', 'theIndex']) },

	onLoad() {
		
		// this.theIndexStorage(1);
		// 隐藏底部tab
		uni.hideTabBar();
		// 修改底部tab样式
// 		uni.setTabBarItem({
// 			index: this.theIndex,
// 			// selectedIconPath: '../../static/tab/saoma.png'
// 		});
		this.indexs = parseInt(Math.random()*10%3)+1;
		console.log(this.indexs)
		if(this.indexs == 1){
			uni.reLaunch({
				url: '/pages/theLoan/theLoanOne/theLoanOne'
			});
		}else if(this.indexs == 2){
			uni.reLaunch({
				url: '/pages/theLoan/theLoanTwo/theLoanTwo'
			});
		}else if(this.indexs == 3){
			uni.reLaunch({
				url: '/pages/theLoan/theLoanThree/theLoanThree'
			});
		}
		// 只允许通过相机扫码
		if (this.isNo == false) {
			uni.scanCode({
				onlyFromCamera: true,
				success: res => {
					console.log('条码类型：' + res.scanType);
					console.log('条码内容：' + res.result);
				},
				complete: data => {
					console.log('条码内容：' + data);
				}
			});
		}
	},
	methods: {
		...mapMutations(['theIndexStorage']),
		Free() {
			// 面押金点击跳转事件
			uni.navigateTo({
				url: ''
			});
		},
		deposit() {
			// 交付押金点击跳转事件
		}
	}
};
</script>

<style lang="scss">

</style>
