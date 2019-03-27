<template>
	<view class="content">
		<view class="img"></view>
		<view class="tips">充电器已经通电请使用</view>
		<view class="toHome">返回首页</view>
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
		width: 249upx;
		height: 602upx;
		background: blue;
		margin-top: 191upx;
	}
	.tips {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		margin-top: 49upx;
	}
	.toHome {
		width: 300upx;
		height: 80upx;
		background: rgba(128, 102, 255, 1);
		box-shadow: 0px 17upx 32upx 0px rgba(164, 128, 255, 0.77);
		border-radius: 40upx;
		margin-top: 60upx;
		font-size:28upx;
font-family:PingFang-SC-Medium;
font-weight:bold;
color:rgba(255,255,255,1);
line-height: 80upx;
text-align: center;
	}
}
</style>
