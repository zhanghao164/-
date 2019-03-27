<template>
	<view class="content">
		<view class="img"></view>
		<view class="tips">支付成功</view>
		<view class="button-btn">下一步</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;

	.img {
		width: 383upx;
		height: 391upx;
		background: blue;
		margin-top: 224upx;
	}
	.tips {
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		margin-top: 79upx;
	}
	.button-btn {
		width: 300upx;
		height: 80upx;
		background: rgba(128, 102, 255, 1);
		box-shadow: 0px 17upx 32upx 0px rgba(164, 128, 255, 0.77);
		border-radius: 40upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 80upx;
		margin-top: 62upx;
	}
}
</style>
