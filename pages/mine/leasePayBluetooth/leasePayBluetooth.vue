<template>
	<view class="content">
		<view class="img"></view>
		<view class="tips">蓝牙连接中请勿操作手机</view>
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
		width: 270upx;
		height: 270upx;
		background: blue;
		margin-top: 340upx;
	}
	.tips {
		font-size: 30upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		margin-top: 88upx;
	}
}
</style>
