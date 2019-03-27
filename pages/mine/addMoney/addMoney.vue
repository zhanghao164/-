<template>
	<view class="content">
		<view class="title">选择充值面值</view>

		<view class="add-money-num">
			<text
				@tap="moneyNum(index)"
				:class="{ bgColor: item.bgColor }"
				v-for="(item, index) in addMoneyNum"
				:key="item.id"
			>
				￥{{ item.id }}
			</text>
			<view class="inputMoney" @tap="inputMoenyNum" :class="{ bgInputMoney: inputMoeny }">
				<input type="number" value="" placeholder="请输入金额" />
			</view>
		</view>
		<view class="tips">温馨提示：充值金额只能用于租借消费，暂不可提现。</view>
		<view class="pay-btn">立即支付</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			addMoneyNum: [
				{
					id: 5,
					bgColor: true
				},
				{
					id: 10,
					bgColor: false
				},
				{
					id: 20,
					bgColor: false
				},
				{
					id: 50,
					bgColor: false
				},
				{
					id: 100,
					bgColor: false
				}
			],
			inputMoeny: false
		};
	},
	methods: {
		moneyNum(index) {
			//选择充值金额
			this.addMoneyNum.forEach((v, i) => {
				// console.log(v,i)
				v.bgColor = false;
			});
			this.addMoneyNum[index].bgColor = true;
			this.inputMoeny = false;
		},
		inputMoenyNum() {
			// 输入 充值金额
			this.addMoneyNum.forEach((v, i) => {
				// console.log(v,i)
				v.bgColor = false;
			});
			this.inputMoeny = true;
		}
	}
};
</script>
<style lang="scss" scoped="">
.content {
	// 	padding-left: 47upx;
	// 	margin-top: 189upx;
	box-shadow: box-shadow;
	padding: 189upx 48upx 0;

	.title {
		font-size: 36upx;
		font-family: SourceHanSansCN-Normal;
		font-weight: bold;
		color: #474747;
		text-align: center;
		line-height: 36upx;
		margin-bottom: 104upx;
	}

	.add-money-num {
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		text {
			width: 206upx;
			height: 150upx;
			border-radius: 10upx;
			line-height: 150upx;
			text-align: center;
			margin-bottom: 18upx;
			box-sizing: border-box;
			background: #fff;
			border: 2upx solid rgba(244, 246, 251, 1);
			border-radius: 10upx;
		}
		.bgColor {
			background: #7185ea;
			color: #fff;
		}
		.inputMoney {
			width: 206upx;
			height: 150upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10upx;
			background: #fff;
			border: 2upx solid rgba(244, 246, 251, 1);
			border-radius: 10upx;
			line-height: 150upx;
			text-align: center;
			margin-bottom: 18upx;
			display: flex;
			align-items: center;

			input {
				font-size: 30upx;
				font-family: PingFang-SC-Light;
				font-weight: bold;
				color: #474747;
				text-align: center;
			}
		}
		.bgInputMoney {
			background: #7185ea;
			color: #fff;
			input {
				color: #fff;
			}
		}
	}
	.pay-btn {
		width: 300upx;
		height: 80upx;
		background: rgba(113, 133, 234, 1);
		box-shadow: 0px 17upx 32upx 0px rgba(113, 133, 234, 0.77);
		border-radius: 40upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		margin: 95upx auto 0;
		text-align: center;
		line-height: 80upx;
	}
	.tips {
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		text-align: center;
		line-height: 24upx;
		margin-top: 40upx;
	}
}
</style>
