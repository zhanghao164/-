<template>
	<view class="content">
		<view class="select-time">
			<text class="bg-color">一小时｜1元</text>
			<text>五小时｜5元</text>
			<text>十二小｜12元</text>
		</view>
		<view class="pay-btn">立即支付</view>
		<view class="tips">
			资费标准：1小时/1元、2小时/2元、3小时/3元，选择 <br>
			充电时长即扣去相应时长资费，超过时长将自动 扣费，<br>
			使用完成请立即归还。
		</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss">
body {
	background: #f4f6fb;
}
.content {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;

	.select-time {
		width: 100%;
		margin-top: 104upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		text {
			width: 654upx;
			height: 157upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 20upx;
			font-size: 30upx;
			font-family: PingFang-SC-Light;
			color: rgba(71, 71, 71, 1);
			margin-bottom: 28upx;
			text-align: center;
			line-height: 157upx;
		}
		.bg-color {
			background: #7185ea;
			color: #fff;
		}
	}
	.pay-btn {
		width: 300upx;
		height: 80upx;
		background: #7185ea;
		box-shadow: 0px 17upx 32upx 0px rgba(155, 162, 214, 0.77);
		border-radius: 40upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 80upx;
		margin-top: 48upx;
	}
	.tips {
		width: 604upx;
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		color: rgba(71, 71, 71, 1);
		line-height: 50upx;
		margin-top: 208upx;
		text-align: center;
	}
}
</style>
