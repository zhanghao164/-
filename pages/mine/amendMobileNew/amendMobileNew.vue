<template>
	<view class="content">
		<view class="mobile">
			<text>当前手机号码</text>
			<text>121212121212</text>
		</view>
		<view class="mobile-code">
			<view class="mobileNum">
				<input
					type="number"
					value=""
					maxlength="11"
					placeholder=" 请输入新手机号"
					placeholder-style="font-size:24upx;font-family:PingFang-SC-Light;color:#cdcdcd;"
				/>
			</view>
			<view class="codeNum">
				<input
					type="number"
					maxlength="6"
					value=""
					placeholder=" 请输入验证码"
					placeholder-style="font-size:24upx;font-family:PingFang-SC-Light;color:#cdcdcd;"
				/>
			</view>
		</view>

		<view class="bottom-btn" @tap="amendUserMobile">确定修改手机号码</view>
		<view class="tips">更换手机号不影响当前账户的押金等账户信息</view>

		<view class="mask">
			<view class="hint-box">
				<text class="iconfont download-icon">&#xe607;</text>
				<text>修改成功</text>
				<text>确定</text>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			userNewMobile: '',
			userMobile: ''
		};
	},
	methods: {
		// 		getUserMobile() {},
		// 		amendUserMobile() {
		// 			//获取用户输入的手机号码保存到本地
		// 			this.userMobile = this.userNewMobile;
		// 			uni.setStorageSync('userMobile', this.userMobile);
		// 			this.userNewMobile = '';
		// 		}
		// 	},
		// 	onLoad() {
		// 		this.userMobile = uni.getStorageSync('userMobile');
	}
};
</script>
<style lang="scss">
@import '../../../common/iconfont.css';
.content {
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;

	.mobile {
		margin-top: 97upx;
		font-size: 36upx;
		line-height: 36upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: #272727;
		display: flex;
		flex-direction: column;
		align-items: center;

		text:nth-child(2) {
			color: #343a45;
			margin-top: 30upx;
		}
	}
	.mobile-code {
		margin-top: 154upx;
		.mobileNum {
			margin-bottom: 46upx;
		}
		.mobileNum,
		.codeNum {
			input {
				width: 514upx;
				height: 90upx;
				background: rgba(255, 255, 255, 1);
				border: 2upx solid rgba(238, 240, 244, 1);
				border-radius: 45upx;
				font-size: 24upx;
				font-family: PingFang-SC-Light;
				color: #666;
				margin: 0 auto;
				text-align: center;
			}
		}
	}
	.bottom-btn {
		width: 514upx;
		height: 90upx;
		background: #7681d3;
		box-shadow: 0px 17upx 32upx 0px rgba(155, 162, 214, 0.77);
		border-radius: 45upx;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 90upx;
		text-align: center;
		margin: 46upx auto 0;
		padding-top: 0;
	}
	.tips {
		font-size: 20upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(153, 153, 153, 1);
		margin: 50upx auto 0;
	}
	.mask {
		display: none;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 999;
		.hint-box {
			width: 654upx;
			height: 382upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 30upx;
			position: absolute;
			top: 360upx;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			flex-direction: column;
			font-size: 30upx;
			font-family: PingFang-SC-Light;
			font-weight: bold;
			align-items: center;
			box-sizing: border-box;
			padding: 50upx 0;
			color: #7681D3;

			.download-icon {
				font-size: 100upx;
				background: linear-gradient(to bottom, #B0B8E9 0%,  #7681D3 100%);
				font-weight: bold;
				-webkit-background-clip: text;
				background-clip: text;

				-webkit-text-fill-color: transparent;
				text-fill-color: transparent;
			}
			:nth-child(2) {
				margin: 20upx 0 80upx;
			}
		}
	}
}
</style>
