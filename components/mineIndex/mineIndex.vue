<template>
	<view>
		<view class="content">
			<!-- <view class="user-icon"></view> -->

			<!-- <view class="user-mobile">12312312252</view> -->
			<view class="user-mobile">
				<navigator class="user-name" url="/pages/mine/amendMobileNew/amendMobileNew">
					{{ userName }}
				</navigator>
				<navigator
					class="change-mobile"
					url="/pages/mine/amendMobileFormer/amendMobileFormer"
				>
					更换手机号
				</navigator>
			</view>
			<view class="uni-list">
				<view class="tips2">
					<text>余额</text>
					<text>￥4.00</text>
					<navigator class="bg-grey" url="/pages/mine/dealInfo/dealInfo">
						交易明细
					</navigator>
				</view>
				<view class="tips2">
					<text>押金</text>
					<text>￥99.00</text>
					<text @tap="getDrawingsBox" class="bg-grey">点击提现</text>
				</view>
				<view class="tips1">
					<text>微信</text>
					<navigator url="">
						<text>已绑定</text>
						<text class="iconfont download-icon">&#xe63d;</text>
					</navigator>
				</view>
				<view class="tips1">
					<text>支付宝</text>
					<navigator url="">
						<text>点击绑定</text>
						<text class="iconfont download-icon">&#xe63d;</text>
					</navigator>
				</view>
			</view>
			<view class="add-money-btn">充值</view>
		</view>

		<!-- 提现弹框 -->
		<view class="drawingsMask" :class="{ showMask: showMask }">
			<!-- 提现提示  是否提现 -->
			<view class="drawings-hint drawings">
				<view class="drawings-text">
					确认提现押金与余额？提现后可能
					<br />
					分多笔退款到账，请耐心等候···
				</view>
				<view class="drawings-btn">
					<text @tap="cancelDrawings">取消</text>
					<text @tap="confirmDrawings" class="right-btn">确认提现</text>
				</view>
			</view>

			<!-- 提现成功  -->
			<view class="drawings extract-succeed" >
				<text class="iconfont download-icon">&#xe607;</text>
				<view class="title">提交成功</view>
				<view class="text">
					可在个人-交易明细中查看详情
					<br />
					预计在1-2个工作日内到账请耐心等候
				</view>
				<view class="confirm-btn" @tap="confirmExtractSucceed">确认</view>
			</view>
			
			<!-- 提现失败  -->
			<view class="drawings extract-succeed extract-fali" :class="{showDrawingsPoP: extractSucceed}">
				<text class="iconfont download-icon">&#xe66e;</text>
				<view class="title">提交失败</view>
				<view class="text">
					账户暂无可提现金额
				</view>
				<view class="confirm-btn" @tap="confirmExtractSucceed">确认</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showMask: false,
			userName: '输入手机',
			extractSucceed: false, //  判断用户是否  用户是否需要提现
		};
	},
	methods: {
		getDrawingsBox() {
			//  点击弹出提现提 遮罩层
			// 			uni.hideTabBar({
			// 				animation: true
			// 			});

			this.showMask = !this.showMask;

			this.extractSucceed = false;
		},
		confirmDrawings() {
			// 点击确认提现 弹出 提交成功  提示
			this.extractSucceed = true;
		},
		cancelDrawings() {
			// 点击  取消  隐藏  遮罩层
			this.showMask = !this.showMask;
			// 			uni.showTabBar({
			// 				animation: true
			// 			})
		},
		confirmExtractSucceed() {
			//确定提现成功  隐藏遮罩层
			this.showMask = false;
		},
		makingACall() {
			//点击客服  拨打电话
			uni.makePhoneCall({
				phoneNumber: '114' //仅为示例
			});
		}
	},
	onShow() {
		if (uni.getStorageSync('userMobile')) {
			//到本地  取出用户昵称
			this.userName = uni.getStorageSync('userMobile');
		}

		// 隐藏遮罩层
		this.showMask = false;
	},
	onLoad() {
		// 		uni.showLoading({
		// 			title: '加载中'
		// 		});
		//
		// 		setTimeout(function() {
		// 			uni.hideLoading();
		// 		}, 500);
	}
};
</script>

<style lang="scss" scoped>
@import '../../common/iconfont.css';
body {
	background: #fff;

	height: 1334upx;
}
.content {
	position: relative;
	width: 582upx;
	box-sizing: border-box;
	padding: 78upx 0 0 48upx;
}
.drawingsMask {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 999;

	.drawings {
		width: 654upx;
		height: 400upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 26upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
	}
	.drawings-hint {
		// display: none;
		.drawings-text {
			color: rgba(102, 102, 102, 1);
			line-height: 48upx;
			margin-top: 124upx;
			text-align: center;
		}
		.drawings-btn {
			display: flex;
			justify-content: space-between;
			padding: 0 139upx;
			box-sizing: border-box;
			line-height: 26upx;
			margin-top: 100upx;
			color: #999;

			text:nth-child(2) {
				color: #7185ea;
			}
		}
	}
	.extract-succeed {
		display: none;
		.download-icon {
			display: block;
			text-align: center;
			font-size: 100upx;
			line-height: 100upx;
			background: linear-gradient(to bottom, #b0b8e9 0%, #7681d3 100%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			text-fill-color: transparent;
			margin: 30upx 0 25upx 0;
		}
		.title {
			font-size: 34upx;
			font-family: PingFang-SC-Bold;
			font-weight: bold;
			color: rgba(118, 129, 211, 1);
			line-height: 34upx;
			margin-bottom: 25upx;
			text-align: center;
		}
		.text {
			font-size: 20upx;
			font-family: PingFang-SC-Light;
			font-weight: bold;
			color: rgba(102, 102, 102, 1);
			line-height: 36upx;
			text-align: center;
		}
		.confirm-btn {
			font-size: 30upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: rgba(118, 129, 211, 1);
			text-align: center;
			height: 100px;
			line-height: 100upx;
			width: 120upx;
			margin: 0 auto;
		}
	}
	.showDrawingsPoP {
		display: block;
	}
	.extract-fali {
		.download-icon {
			background: linear-gradient(to bottom, #B0B8E9 0%, #F07D7D 100%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			text-fill-color: transparent;
			margin: 30upx 0 25upx 0;
		}
		.title {
			color: #F07D7D;
			
		}
		.text {
			margin: 20upx 0;
		}
	}
}
.showMask {
	display: block;
}
// .user-icon {
// 	width: 158upx;
// 	height: 158upx;
// 	background: rgba(128, 102, 255, 1);
// 	box-shadow: 0px 7upx 21upx 0px rgba(128, 102, 255, 0.39);
// 	border-radius: 50%;
// 	// margin: 0 auto;
// 	margin-left: 236upx;
// 
// }
.user-mobile {
	width: 100%;
	font-size: 28upx;
	margin-top: 202upx;
	display: flex;
	flex-direction: column;
	font-weight: bold;
	align-items: center;
	box-sizing: border-box;
	padding-left: 95upx;

	text {
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
	}

	.change-mobile {
		margin-top: 15upx;
		text-align: center;
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		color: rgba(102, 102, 102, 1);

		width: 160upx;
		height: 45upx;
		line-height: 45upx;
		background: rgba(255, 255, 255, 1);
		border: 2upx solid rgba(238, 240, 244, 1);
		border-radius: 22upx;
	}
}
.uni-list {
	margin-top: 71upx;
	width: 534upx;
	font-size: 24upx;
	font-family: PingFang-SC-Light;
	font-weight: bold;
	color: rgba(102, 102, 102, 1);

	view {
	}
	.tips2 {
		overflow: hidden;
		margin-bottom: 60upx;
		text:first-child {
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			color: rgba(39, 39, 39, 1);
		}

		text:nth-child(2) {
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: #7185ea;
			margin-left: 23upx;
		}

		text:nth-child(3) {
			float: right;
		}
		.bg-grey {
			width: 140upx;
			height: 45upx;
			background: rgba(255, 255, 255, 1);
			border: 2upx solid rgba(238, 240, 244, 1);
			border-radius: 22upx;
			line-height: 45upx;
			text-align: center;
			float: right;
		}
	}
	.tips1 {
		// 		text:last-child {
		// 			padding-right: 33upx;
		// 			// background: url("")
		// 		}
		overflow: hidden;
		margin-bottom: 60upx;

		display: flex;
		justify-content: space-between;

		navigator {
			display: flex;
			align-items: center;
		}
	}
}
.add-money-btn {
	width: 300upx;
	height: 80upx;
	background: rgba(113, 133, 234, 1);
	box-shadow: 0px 17upx 32upx 0px rgba(113, 133, 234, 0.53);
	border-radius: 40upx;
	font-size: 28upx;
	font-family: PingFang-SC-Medium;
	font-weight: bold;
	color: rgba(255, 255, 255, 1);
	text-align: center;
	line-height: 80upx;
	margin: 100upx auto 0;
}
</style>
