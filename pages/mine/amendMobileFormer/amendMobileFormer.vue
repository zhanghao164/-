<template>
	<view class="content">
		<view class="mobile">
			<text>当前手机号码</text>
			<text>121****6584</text>
		</view>
		<view class="input-mobile"><input  maxlength = "11" type="number" value=""  /></view>
		<navigator url="/pages/mine/amendMobileNew/amendMobileNew" class="bottom-btn">
			获取验证码
		</navigator>
		<navigator url="/pages/mine/amendMobileNew/amendMobileNew" class="bottom-btn">
			下一步
		</navigator>
		<navigator url="/pages/mine/amendMobileNew/amendMobileNew" class="bottom-btn">
			下一步
		</navigator>
		<navigator url="/pages/mine/amendMobileNew/amendMobileNew" class="bottom-btn">
			52
		</navigator>
		<view class="tips">验证码输入错误</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.content {
	box-sizing: border-box;
	padding-top: 171upx;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	// justify-content: center;
	// align-items: center;
	flex-direction: column;
	padding-left: 0;

	.mobile {
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
	.input-mobile {
		margin: 110upx auto 76upx;
		input {
			width: 514upx;
			height: 90upx;
			background: rgba(255, 255, 255, 1);
			border: 2upx solid rgba(238, 240, 244, 1);
			border-radius: 45upx;
			box-sizing: border-box;
			padding-left: 50upx;
		}
	}
	.bottom-btn {
		width: 514upx;
		height: 90upx;
		background: #7681D3;
		box-shadow: 0px 17upx 32upx 0px rgba(155, 162, 214, 0.77);
		border-radius: 45upx;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 90upx;
		text-align: center;
		margin: 0 auto 40upx;
	}
	.tips {
		font-size: 24upx;
		font-family: PingFang-SC-ExtraLight;
		font-weight: bold;
		color: rgba(255, 145, 127, 1);
		text-align: center;
	}
}
</style>
