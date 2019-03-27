<template>
	<view class="theLoan">
		<view class="top-bgc"></view>
		<view class="top-nav">
			<text>该机柜已获得了584%投资回报率</text>
			<navigator url="">了解详情</navigator>
		</view>
		<!-- <img src="../../static/zujie/taikong.png" alt="" /> -->
		<view class="price">1元/时,每24小时封顶10元</view>
		<view @click="Free" class="btn Free">免押租借</view>
		<view @click="deposit" class="btn deposit">支付押金租借</view>
		<view class="agreement">
			点击租借即同意
			<navigator url="">《用户协议》</navigator>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	data() {
		return {
			isNo: true
		};
	},
	computed: { ...mapState(['token', 'id', 'type', 'username', 'theIndex']) },

	onLoad() {
		this.theIndexStorage(1);
		// 隐藏底部tab
		uni.hideTabBar();
		// 修改底部tab样式
		uni.setTabBarItem({
			index: this.theIndex,
			// selectedIconPath: '../../static/tab/saoma.png'
		});
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
@import '../../common/iconfont.css';

.theLoan {
	width: 750upx;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	// background: url(../../static/zujie/taikong.png);
	// background-size: 750upx 789upx;
	background-color: rgba(243, 241, 255, 1);
	img {
		width: 750upx;
		height: 789upx;
		position: fixed;
		top: 163upx;
	}
}
.top-bgc {
	position: fixed;
	top: 78upx;
	left: 112upx;
	width: 526upx;
	height: 50upx;
	background-color: rgba(0, 178, 195, 1);
	opacity: 0.1;
	border-radius: 25upx;
}
.top-nav {
	position: fixed;
	top: 78upx;
	left: 112upx;
	font-size: 24upx;
	width: 526upx;
	height: 50upx;
	line-height: 50upx;
	border-radius: 25upx;
	text {
		opacity: 1;
		color: rgba(4, 187, 204, 1);
		margin-left: 33upx;
		font-weight: 600;
	}
	navigator {
		opacity: 1;
		display: inline-block;
		width: 96upx;
		height: 23upx;
		color: rgba(0, 111, 121, 1);
		margin-left: 18upx;
		font-size: 22upx;
		font-weight: 700;
	}
}
.price {
	height: 30upx;
	font-size: 30upx;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 226upx;
	color: #1ACFE0;
}
.btn {
	width: 300upx;
	height: 94upx;
	line-height: 94upx;
	border-radius: 47upx;
	position: fixed;
	bottom: 98upx;
	text-align: center;
	background-color: rgba(26, 207, 224, 1);
	color: #fff;
	font-size: 30upx;
}
.Free {
	left: 56upx;
}
.deposit {
	right: 56upx;
}
.agreement {
	font-size: 20upx;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	bottom: 54upx;
	color: rgba(153, 153, 153, 1);
	navigator {
		display: inline-block;
		color: rgba(0, 178, 195, 1);
	}
}
</style>
