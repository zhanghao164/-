<template>
	<view class="shops-list">
		<scroll-view scroll-y="true" scroll-with-animation="true" :scroll-top="topDistance">
			<img src='../../../static/bgc.png' :style="{ height: halfHeight }" class="bg_color" />
			<view
				class="iconfont fanhui"
				@click="toSuperior"
				:style="{ top: halfWidth }"
			>&#xe62f;</view>
			<view :style="{ top: halfWidth }" class="search iconfont">
				&#xe937;
				<input type="text" placeholder-style="#7185EA" placeholder="搜索"  v-model="search"/>
			</view>
			<view class="shops-list_view">
				<view
					v-for="(item, key) in markers"
					:key="item"
					@click="details(key)"
					:class="{ Drag: counts == key, correction: counts != -1 }"
					class="list"
				>
					<img class="list-img" src="" alt="" />
					<view class="information">
						<h2>{{ item.name }}</h2>
						<view class="address" v-if="counts == key">
							详细地址
							<p>{{ item.address }}</p>
						</view>
						<span class="also">可借:</span>
						<span class="borrow">可还:</span>
					</view>
					<view @click.stop="todistance(item)" class="distance">
						<view class="iconfont">&#xe649;</view>
						<view class="detailedDistance">{{ distance }}m</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			distance: 405,
			covers: [],
			counts: -1,
			topDistance: 0,
			onDistance: 52,
			search: '',
		};
	},
	methods: {
		details(key) {
			// 点击标记点详情弹窗
			if (this.counts == key) {
				this.counts = -1;
			} else {
				this.counts = key;
			}
		},
		toSuperior() {
			uni.navigateBack({
				delta: 1
			});
		},
		todistance(data) {
			console.log(data)
			uni.navigateTo({
				// url: '../locationInformation/locationInformation?markes=' +data.longitude+','+data.latitude
				url: '../locationInformation/locationInformation?markes=' +data.longitude+'&latitude='+data.latitude
			});
		}
	},
	onLoad(data) {
		this.counts = data.counts;
		this.topDistance = (data.counts-1) * 100;
		this.onDistance = wx.getMenuButtonBoundingClientRect().top * 2;
		console.log(wx.getMenuButtonBoundingClientRect());
	},
	computed: {
		...mapState(['markers']),
		halfWidth() {
			return uni.upx2px(this.onDistance) + 'px';
		},
		halfHeight() {
			return uni.upx2px(wx.getMenuButtonBoundingClientRect().bottom * 2+40) + 'px';
		}
	}
};
</script>

<style lang="scss">
@import '../../../common/iconfont.css';
// 店铺图片动画
@keyframes myfirst {
	0% {
		width: 104upx;
		height: 104upx;
		margin: 26upx 34upx 25upx 48upx;
	}
	100% {
		height: 342upx;
		left: 0upx;
		margin: 0;
		transition: 0.5 linear;
	}
}
// 返回店铺图片动画
@keyframes return-myfirst {
	0% {
		width: 313upx;
		border-radius: 20upx;
		height: 342upx;
		margin: 0;
	}
	100% {
		border-radius: 50%;
		width: 104upx;
		height: 104upx;
		margin: 26upx 34upx 25upx 48upx;
		transition: 0.5 linear;
	}
}
// 距离位置动画
@keyframes distance {
	0% {
		top: 238upx;
		left: -48upx;
		transform: scale(0, 0);
	}
	100% {
		width: 70upx;
		height: 104upx;
		text-align: center;
		background-color: #fff;
		border-radius:0 20upx;
		position: absolute;
		left: 0;
		top: 238upx;
		transform: scale(1, 1);
	}
}

// 返回距离位置动画
@keyframes return-distance {
	0% {
		width: 104upx;
		height: 130upx;
		text-align: center;
		background-color: #fff;
		border-radius: 20upx 20upx 0 0;
		position: absolute;
		right: -104upx;
		top: 34upx;
	}
	100% {
		position: absolute;
		top: 34upx;
		right: 48upx;
	}
}
// 列表文字动画
@keyframes information {
	0% {
		top: 0;
		display: inline-block;
		width: 0;
		height: 342upx;
		margin-left: 152upx;
		opacity: 0;
		// transform: scale(0.2, 0.2);
	}
	100% {
		opacity: 1;
		margin-left: 353upx;
		width: 300upx;
		// transform: scale(1, 1);
		// transition: 0.5 linear;
	}
}
// 返回列表文字动画
@keyframes return-information {
	0% {
		margin-left: 353upx;
		transform: scale(1, 1);
		transition: 0.5 linear;
	}
	100% {
		display: inline-block;
		width: 0;
		height: 342upx;
		margin-left: 152upx;
		opacity: 0;
		transform: scale(0.2, 0.2);
	}
}
// 单个列表项动画
@keyframes Drag {
	0% {
		width: 654upx;
		height: 155upx;
	}
	100% {
		width: 654upx;
		height: 342upx;
		transition: 0.5 linear;
	}
}
// 返回单项列表动画
@keyframes return-Drag {
	0% {
		height: 342upx;
		transition: 0.5 linear;
	}
	100% {
		height: 155upx;
	}
}
// 可归还按钮动画
// @keyframes borrow {
// 	0% {
// 		left: 0upx;
// 	}
// 	100% {
// 		left: 204upx;
// 		transition: 0.8 linear;
// 	}
// }
// 
.shops-list {
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	background-color: #f4f6fb;
	overflow: auto;
	// box-sizing: border-box;
	scroll-view {
		height: 100%;
		.bg_color{
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 99;
		}
		.fanhui {
			display: block;
			width: 64upx;
			height: 64upx;
			line-height: 64upx;
			position: fixed;
			left: 36upx;
			color: #7185EA;
			box-shadow:0px 4px 13px 0px rgba(159,167,215,0.45);
			border-radius: 50%;
			text-align: center;
			background-color: #fff;
			z-index: 999;
		}
		.search {
			width: 375upx;
			height: 64upx;
			line-height: 64upx;
			border-radius: 32upx;
			position: fixed;
			left: 122upx;
			background-color: #fff;
			box-shadow:0px 4px 13px 0px rgba(159,167,215,0.45);
			padding-left: 42upx;
			color: #7185EA;
			z-index: 999;
			box-sizing: border-box;
			input {
				display: inline-block;
				width: 270upx;
				border-radius: 0 32upx 32upx 0;
				color: #7185EA;
				margin-left: 10upx;
				font-size: 24upx;
			}
		}
	}
	::-webkit-scrollbar {
		//隐藏滚动条
		width: 0;
		height: 0;
		color: transparent;
	}
}
.shops-list_view {
	width: 100%;
	padding: 200upx 0 900upx;
	.Drag {
		height: 342upx;
		background-color: #fff;
		animation: Drag 0.55s;
		img {
			position: absolute;
			width: 313upx;
			height: 342upx;
			animation: myfirst 0.55s;
			border-radius: 0%;
			background-color: #000;
			margin: 0;
			left: 0;
			border-radius: 20upx;
		}
		.information {
			display: inline-block;
			width: 300upx;
			height: 342upx;
			position: absolute;
			margin-left: 353upx;
			animation: information 0.55s;
			h2 {
				overflow: hidden;
				width: 300upx;
				height: 80upx;
				font-size: 30upx;
				color: #474747;
				position: absolute;
				top: 26upx;
				line-height: 30upx;
			}
			span {
				font-size: 28upx;
				position: absolute;
				bottom: 36upx;
				transition: 0.5 linear;
			}
			.also {
				color: #a5a5a5;
			}
			.borrow {
				color: #4680ff;
				left: 160upx;
// 				animation: borrow 0.55s;
			}
			.address {
				position: absolute;
				top: 122upx;
				font-size: 20upx;
				color: #474747;
				width: 270upx;
				height: 92upx;
				line-height: 36upx;
				p {
					color: #434343;
					height: 108upx;
					overflow: hidden;
				}
			}
		}
		.distance {
			width: 70upx;
			height: 104upx;
			text-align: center;
			background-color: #fff;
			border-radius:0 20upx;
			position: absolute;
			top: 238upx;
			left: 0;
			animation: distance 0.55s;
			padding-top: 21upx;
			view{
				font-size: 27upx;
			}
			.detailedDistance {
				margin-top: 9upx;
				font-size: 18upx;
				color: #878383;
			}
		}
	}
}
.list {
	margin: 0 auto 32upx;
	position: relative;
	width: 654upx;
	height: 155upx;
	border-radius: 20upx;
	background-color: #fff;
	animation: return-Drag 0.35s;
	overflow: hidden;
	img {
		display: inline-block;
		width: 104upx;
		height: 104upx;
		border-radius: 50%;
		background-color: #000;
		margin: 26upx 34upx 25upx 48upx;
		animation: return-myfirst 0.35s;
	}
	.information {
		display: inline-block;
		// animation: return-information 0.55s;
		h2 {
			font-size: 24upx;
			width: 280upx;
			height: 30upx;
			line-height: 30upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: #474747;
			position: absolute;
			top: 49upx;
			transition: 0.35s all;
		}
		span {
			font-size: 20upx;
			position: absolute;
			bottom: 31upx;
		}
		.also {
			color: #a5a5a5;
		}
		.borrow {
			color: #4680ff;
			left: 274upx;
		}
	}
	.distance {
		position: absolute;
		top: 34upx;
		right: 48upx;
		animation: return-distance 0.35s;
		view {
			font-size: 54upx;
			color: #92b4ff;
		}
		.detailedDistance {
			margin-top: 21upx;
			font-size: 18upx;
			color: #878383;
		}
	}
}
</style>
