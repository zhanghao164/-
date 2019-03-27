<template>
	<view class="tabBar"> 
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			isSelectTab: 3 //
		};
	},
	methods: {
		clickTab(idx) {
			this.isSelectTab = idx;
		}
	},
	props:["tabBatId"],
	onLoad () {
		this.isSelectTab = this.tabBatId
	
	}
}
</script>

<style lang="scss">
@import '../../common/iconfont.css';
body {
	position: relative;
}
.tabBar {
	width: 750upx;
	height: 146upx;
	background: #ccc;
	position: absolute;
	top: 1188upx;
	box-sizing: border-box;
	padding-left: 104upx;
	display: flex;
	align-items: center;
	left: 0;

	.tab-list {
		width: 128upx;
		height: 80upx;
		// background: blue;

		margin-left: 6upx;
		display: flex;
		align-items: center;

		.mask {
			width: 60upx;
			// transition: all 1s;
			height: 80upx;
			display: flex;
			align-items: center;
			overflow: hidden;
			.iconfont {
				width: 50upx;
				height: 50upx;
				// background: url("../../static/tabIcon/tab-icon-nearby.png") center center / 100% 100%;
			}

			.txt {
				font-size: 24upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(128, 102, 255, 1);
				margin-left: 20upx;
				white-space: nowrap;
				overflow: hidden;
				// text-overflow: ellipsis;
			}
		}
	}
	.tabListW200 {
		width: 200upx;
		margin-left: -20upx;
		.mask {
			transition: all 1s;
			width: 200upx;
			background: rgba(128, 102, 255, 0.1);
			box-sizing: border-box;
			padding-left: 35upx;
			border-radius: 40upx;
			white-space: nowrap;
			overflow: hidden;
			// text-overflow: ellipsis;
		}
	}
}
</style>
