<template>
	<view class="content">
		<view class="bottom">
			<view class="tips1">请及时从上图指示位置取走充电宝</view>
			<view class="tips2">若充电宝未弹出，请稍等片刻</view>
			<view class="toHome">返回首页</view>
		</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss">
.content {
	position: relative;

	.bottom {
		width: 100%;
		position: fixed;
		top: 798upx;
		.tips1 {
			height: 29upx;
			font-size: 30upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: rgba(71, 71, 71, 1);
			text-align: center;
		}
		.tips2 {
			font-size: 24upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(135, 135, 135, 1);
			margin-top: 25upx;
			text-align: center;
		}
		.toHome {
			width: 300upx;
			height: 80upx;
			background: rgba(128, 102, 255, 1);
			box-shadow: 0px 17upx 32upx 0px rgba(164, 128, 255, 0.77);
			border-radius: 40upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			line-height: 80upx;
			text-align: center;
			margin: 55upx auto;
		}
	}
}
</style>
