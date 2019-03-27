<template>
	<view class="content">
		<view class="title">选择时长</view>
		<view class="select-time">
			<text>一小时/1元</text>
			<text class="bg-color">五小时/5元</text>
			<text>十二小时/12元</text>
		</view>
		<view class="pay-btn">立即支付</view>
		<view class="tips">
			资费标准：1小时/1元、2小时/2元、3小时/3元，选择
充电时长即扣去相应时长资费，使用完成请立即归还。
		</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss">
.content {
	box-sizing: border-box;
	padding-top: 90upx;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
	}
	.select-time {
		width: 100%;
		margin-top: 208upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		text {
			width: 654upx;
			height: 79upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 40upx;
			font-size: 30upx;
			font-family: PingFang-SC-Light;
			font-weight: bold;
			color: rgba(71, 71, 71, 1);
			margin-bottom: 54upx;
			text-align: center;
			line-height: 79upx;
		}
		.bg-color {
			background: rgba(168, 150, 255, 1);
			color: rgba(254, 254, 254, 1);
		}
	}
	.pay-btn {
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
		margin-top: 56upx;
	}
	.tips {
		width:604upx;
font-size:24upx;
font-family:PingFang-SC-Light;
font-weight:bold;
color:rgba(71,71,71,1);
line-height:50upx;
margin-top: 202upx;
	}
}
</style>
