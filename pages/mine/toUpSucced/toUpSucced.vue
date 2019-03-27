<template>
	<view class="toUp-content">
		<view class="icon"></view>
		<view class="title">充值成功</view>
		<view class="addMoneyInfo">
			<view class="">
				<text>订单号</text>
				<text>152525121122</text>
			</view>
			
			<view class="">
				<text>支付时间</text>
				<text>2017-3-17 23:21:12</text>
			</view>
			
			<view class="">
				<text>商品</text>
				<text>押金</text>
			</view>
			<view class="">
				<text>订单余额</text>
				<text>99.00元</text>
			</view>
		</view>
		<view class="toHome-btn">返回首页</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.toUp-content {
	padding: 0 49upx;
	.icon {
		width: 207upx;
		height: 212upx;
		margin: 240upx auto 0;
		background: blue;
	}
	.title {
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: #474747;
		text-align: center;
		margin: 41upx 0 70upx ;
	}
	.addMoneyInfo {
		view {
			height: 58upx;
			line-height: 48upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: rgba(71, 71, 71, 1);
			display: flex;
			justify-content: space-between;
			text:nth-child(2) {
				font-family: PingFang-SC-Light;
			}
		}
	}
	.toHome-btn {
		width: 300upx;
		height: 80upx;
		background:#7185EA;
		box-shadow:0px 17px 32px 0px rgba(113,133,234,0.77);
		border-radius: 40upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		margin: 140upx auto 0;
		line-height: 80upx;
		text-align: center;
	}
}
</style>
