<template>
	<view class="login">
		<view class="logo"><image src="" mode=""></image></view>
		<view class="main">
			<view class="title">Welcome</view>
			<view class="input">
				<view class="input-mobile">
					<input
						type="number"
						placeholder-style="color:#CABFFF"
						value=""
						placeholder="请输入手机号码"
					/>
				</view>
				<view class="input-code">
					<input
						type="number"
						placeholder-style="color:#CABFFF"
						value=""
						placeholder="请输入验证码"
					/>
				</view>
			</view>
			<view class="login-btn">登陆</view>

			<view class="tips">验证码输入错误</view>

			<view class="icon">
				<text class="wechat"></text>
				<text class="alipay"></text>
			</view>
		</view>
		<view class="footer-protocol">
			开始使用人人充电宝即表示您同意协议
			<br />
			<navigator url="#">《服务协议》</navigator>
			&
			<navigator url="">《隐私政策》</navigator>
		</view>
	</view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login {
	.logo {
		width: 97upx;
		height: 74upx;
		margin: 132upx auto 114upx;
		background: blue;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.main {
		width: 593upx;
		height: 795upx;
		background: rgba(255, 255, 255, 1);
		border: 1upx solid rgba(255, 255, 255, 1);
		box-shadow: 8upx 9upx 35upx 0px rgba(164, 78, 153, 0.25);
		border-radius: 0px 50upx 0px 50upx;
		margin: 0 auto;
		padding: 0 86upx;
		box-sizing: border-box;

		.title {
			font-size: 35upx;
			font-family: FZZHJW--GB1-0;
			font-weight: bold;
			color: rgba(128, 102, 255, 1);
			text-align: center;
			margin-top: 53upx;
		}
		.input {
			font-size: 30upx;
			font-family: PingFang-SC-Light;
			font-weight: bold;
			color: #cabfff;

			view {
				margin-top: 88upx;
			}

			input {
				border-bottom: 1upx solid #cabfff;
				padding: 0 0 23upx 52upx;
				width: 420upx;
				box-sizing: border-box;
			}
		}
		.login-btn {
			width: 420upx;
			height: 63upx;
			background: rgba(128, 102, 255, 1);
			border-radius: 32upx;
			font-size: 30upx;
			font-family: FZZHJW--GB1-0;
			font-weight: bold;
			color: rgba(254, 254, 255, 1);
			line-height: 74upx;
			margin: 76upx auto 0;
			text-align: center;
			line-height: 63upx;
		}
		.tips {
			font-size: 24upx;
			font-family: PingFang-SC-Light;
			font-weight: bold;
			color: rgba(255, 173, 185, 1);
			margin-top: 41upx;
			text-align: center;
		}
		.icon {
			display: flex;
			margin-top: 70upx;
			justify-content: space-between;
			padding: 0 110upx;
			box-sizing: border-box;
			text {
				width: 60upx;
				height: 60upx;
				background: blue;
				border-radius: 50%;
			}
		}
	}
	.footer-protocol {
		font-size: 20upx;
		font-family: FZZHJW--GB1-0;
		font-weight: bold;
		color: rgba(202, 191, 255, 1);
		text-align: center;
		margin-top: 94upx;
		
		navigator {
			display: inline-block;
			color:#2600E1;
		}
	}
}
</style>
