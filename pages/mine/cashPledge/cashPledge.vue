<template>
	<view class="content">
		<view class="title">
			<text>押金支付</text>
			<text>99元</text>
		</view>
		<view class="pay-way">
			<view class="subtitle">选择支付方式</view>

			<view class="select-pay" @tap="optionOfPayment(0)">
				<view class="icon">
					<text class="iconfont download-icon weChat-img">&#xe661;</text>
					<text>微信支付</text>
				</view>
				<view class="icon-right">
					<text
						class="iconfont download-icon"
						:class="{ iconRightBlock: selecdPayment[0].type }"
					>
						&#xe625;
					</text>
				</view>
			</view>
			<view class="select-pay" @tap="optionOfPayment(1)">
				<view class="icon">
					<text class="iconfont download-icon Alipay-img">&#xe702;</text>
					<text>支付宝支付</text>
				</view>
				<view class="icon-right">
					<text
						class="iconfont download-icon"
						:class="{ iconRightBlock: selecdPayment[1].type }"
					>
						&#xe625;
					</text>
				</view>
			</view>
			<view class="select-pay" @tap="optionOfPayment(2)">
				<view class="icon">
					<text class="iconfont download-icon bankCard-img">&#xe683;</text>
					<text>中国农业银行储蓄卡(4170)</text>
				</view>
				<view class="icon-right">
					<text
						class="iconfont download-icon"
						:class="{ iconRightBlock: selecdPayment[2].type }"
					>
						&#xe625;
					</text>
				</view>
			</view>
			<view class="hint">
				押金可在个人中心中提现；
				<br />
				租借时间过长，将自动扣除押金。
			</view>
		</view>
		<view class="pay-btn">立即支付</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			selecdPayment: [
				{
					type: true
				},
				{
					type: false
				},
				{
					type: false
				}
			]
		};
	},
	methods: {
		optionOfPayment(idx) {
			this.selecdPayment.forEach((v, i) => {
				v.type = false;

				if (i == idx) {
					v.type = true;
				}
			});
		}
	}
};
</script>
<style lang="scss">
@import '../../../common/iconfont.css';
body {
	background: #f4f6fb;
}
.content {
	padding: 0 48upx;
	box-sizing: border-box;

	.title {
		font-size: 36upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		display: flex;
		margin-top: 60upx;

		text:nth-child(2) {
			color: #7681d3;
			margin: 4upx 0 0 29upx;
			display: block;
		}
	}
	.pay-way {
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		margin-top: 59upx;
		.subtitle {
		}
		.select-pay {
			width: 654upx;
			height: 168upx;
			background: #9297b7;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 8upx 32upx 0px rgba(146, 151, 183, 0.77);
			border-radius: 20upx;
			margin-top: 30upx;
			box-sizing: border-box;
			padding: 0 50upx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.icon {
				display: flex;
				height: 50upx;
				line-height: 50upx;
				.weChat-img {
					margin-right: 27upx;
					color: #3da853;
					font-size: 50upx;
				}
				.Alipay-img {
					margin-right: 27upx;
					color: #1ca4ee;
					font-size: 50upx;
				}
				.bankCard-img {
					margin-right: 27upx;
					color: #6a80da;
					font-size: 50upx;
				}
			}
			.icon-right {
				width: 30upx;
				height: 30upx;
				background: rgba(224, 231, 248, 0.3);
				border-radius: 50%;

				.download-icon {
					color: #6a80da;
					display: none;
				}
				.iconRightBlock {
					display: block;
				}
			}
		}
		.hint {
			margin-top: 30upx;
			text-align: center;
		}
	}
	.pay-btn {
		width: 300upx;
		height: 80upx;
		background: #7681D3;
		box-shadow: 0px 17upx 32upx 0px rgba(155, 162, 214, 0.77);
		border-radius: 40upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		line-height: 80upx;
		margin: 114upx auto 0;
	}
}
</style>
