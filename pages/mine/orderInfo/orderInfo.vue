<template>
	<view class="order-content">
		<view class="orderNumber">
			<text>订单号 245678987</text>
			<text>已完成</text>
		</view>
		<!-- 使用情况 -->
		<view class="use-info">
			<view class="title">
				<text></text>
				<text>使用情况</text>
				<text></text>
			</view>
			<view class="tips">
				<text>租借地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
			<view class="tips">
				<text>租借时间</text>
				<text>2019-01-31 16:37:13</text>
			</view>
			<view class="tips">
				<text>归还时间</text>
				<text>2019-01-31 17:58:32</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
		</view>
		<!-- 价格明细 -->
		<view class="use-info">
			<view class="title">
				<text></text>
				<text>价格明细</text>
				<text></text>
			</view>
			<view class="tips">
				<text>租借地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
			<view class="tips">
				<text>租借时间</text>
				<text>2019-01-31 16:37:13</text>
			</view>
			<view class="tips">
				<text>归还时间</text>
				<text>2019-01-31 17:58:32</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
		</view>
		<!-- 计费规则 -->
		<view class="use-info">
			<view class="title">
				<text></text>
				<text>计费规则</text>
				<text></text>
			</view>
			<view class="tips2">
				<text>(1)</text>
				<text>
					尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)尚艺时光(坂田电)
				</text>
			</view>
			<view class="tips2">
				<text>(2)</text>
				<text>2019-01-31 16:37:13</text>
			</view>
			<view class="tips2">
				<text>(3)</text>
				<text>2019-01-31 17:58:32</text>
			</view>
		</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '../../../common/iconfont.css';
body {
	background: #F4F6FB;
}
.order-content {
	width: 100%;
	padding: 10upx 48upx 0;
	box-sizing: border-box;

	.orderNumber {
		font-size: 30upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
		color: #474747;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 44upx 0 38upx 0;

		text:nth-child(2) {
			font-size: 24upx;
			color: #7185EA;
		}
	}
	.use-info {
		width: 654upx;
		border-radius: 20upx;
		padding: 30upx 38upx 53upx;
		box-sizing: border-box;
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		margin-bottom: 32upx;

		background: #FFFFFF;
		box-shadow: 0px 10upx 20upx 0px rgba(146, 151, 183, 0.77);

		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10upx;

			text:nth-child(1),
			text:nth-child(3) {
				width: 28upx;
				height: 2upx;
				background: rgba(102, 102, 102, 1);
				margin: 0 15upx;
			}
		}
		.tips {
			display: flex;
			justify-content: space-between;
			line-height: 46upx;
		}
		.tips2 {
			line-height: 36upx;
			display: flex;
		}
	}
}
</style>
