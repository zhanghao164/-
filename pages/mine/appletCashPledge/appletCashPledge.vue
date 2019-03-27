<template>
	<view class="content">
		<view class="title">
			<text class="subtitle">押金支付</text>
			<text class="money">99元</text>
		</view>
		<view class="pay-btn">立即支付</view>

		<view class="hint">
			押金可在个人中心中提现；
			<br />
			租借时间过长，将自动扣除押金
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
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 230upx;

		.subtitle {
			font-size: 36upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: rgba(71, 71, 71, 1);
			line-height: 36upx;
		}
		.money {
			font-size: 72upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: #7681d3;
			line-height: 72upx;
			margin-top: 45upx;
		}
	}
	.pay-btn {
		width: 300upx;
		height: 80upx;
		background: rgba(128, 102, 255, 1);
		box-shadow: 0px 17upx 32upx 0px rgba(155, 162, 214, 0.77);
		border-radius: 40upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 80upx;
		margin-top: 196upx;
	}
	.hint {
		width: 359upx;
		height: 64upx;
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		line-height: 40upx;
		text-align: center;
		margin-top: 55upx;
	}
}
</style>
