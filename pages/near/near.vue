<template>
	<!-- 附近主页面页面组件 -->
	<view class="near">
		<!-- uni-app map地图组件 -->
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map
					style="width: 100%;height: 100%;"
					:latitude="latitude"
					:longitude="longitude"
					:markers="covers"
					id="mymap"
					show-location="true"
					@click="regionchange"
					@updated="regionchange"
					@markertap="markertap"
					@regionchange="regionchanges"
				>
					<cover-image
						class="controls-play"
						@click="play"
						src="../../static/dingdian.png"
					></cover-image>
					<cover-image
						class="controls-search"
						@click="search"
						src="../../static/sousuo.png"
						:style="{ top: halfWidth }"
					></cover-image>
					<cover-image
						class="controls-list"
						@click="search"
						src="../../static/list.png"
					></cover-image>
				</map>
				<!-- 标记点弹出框 -->
				<!-- <movable-area class="near-details">
					<movable-view
						class="movable-details"
						friction="16"
						direction="horizontal"
						@change="Drag"
					>
						<view
							class="details"
							@click="expand(key)"
							:class="{ Drag: counts == key, correction: counts != -1 }"
							v-for="(item, key) in covers"
							:key="item.name"
						>
							<img src="" alt="" />
							<span>{{ item.name }}</span>
							<view v-if="counts == key">
								详细地址
								<p>{{ covers[key].address }}</p>
							</view>
							<text class="borrow">可借</text>
							<text class="also">可还</text>
						</view>
					</movable-view>
				</movable-area> -->
			</view>
		</view>
	</view>
</template>

<script>
import amap from '../../common/amap-wx.js';
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			counts: -1,
			amapPlugin: null,
			key: '65bbf9c5a0ba3a024378876049a0fcc9',
			addressName: '',
			onDistance: 52,
			weather: {
				hasData: false,
				data: []
			},
			title: 'map',
			latitude: 22.604519815689297,
			longitude: 114.05640721816943,
			scale: 15, //地图层级
			covers: [
				{
					latitude: 22.604519815689296, //纬度
					longitude: 114.05640721816944, //经度
					iconPath: '', //显示的图标
					title: '阿打算',
					label: {
						content: '文本1',
						color: '#F76350',
						bgColor: '#fff',
						padding: 5,
						borderRadius: 4
					},
					callout: {
						//自定义标记点上方的气泡窗口 点击有效
						content: '测试地点1',
						color: '#F76350',
						fontSize: 12,
						borderRadius: 5
					}
				},
				{
					latitude: 22.60719815689275, //纬度
					longitude: 114.05671721816975, //经度
					iconPath: '',
					title: '阿迪达斯',
					x: 1,
					y: 2,
					label: {
						content: '文本1',
						color: '#F76350',
						bgColor: '#fff',
						padding: 5,
						borderRadius: 4
					},
					callout: {
						content: '测试地点2',
						color: '#F76350',
						fontSize: 12
					}
				},
				{
					latitude: 22.60419815689275, //纬度
					longitude: 114.05601721816975, //经度
					iconPath: '',
					title: '阿迪达斯',
					x: 1,
					y: 2,
					label: {
						content: '文本1',
						color: '#F76350',
						bgColor: '#fff',
						padding: 5,
						borderRadius: 4
					},
					callout: {
						content: '测试地点3',
						color: '#F76350',
						fontSize: 12
					}
				}
			],
			controls: [
				{
					//在地图上显示控件，控件不随着地图移动
					id: 1, //控件id
					iconPath: '../../static/login_slices/zhifubao 33.png', //显示的图标
					position: {
						//控件在地图的位置
						left: 15,
						top: 15,
						width: 50,
						height: 50
					}
				}
			],
			circles: [
				{
					//在地图上显示圆
					latitude: 39.9,
					longitude: 116.39,
					fillColor: '#FFC41F', //填充颜色
					color: '#12A1DD', //描边的颜色
					radius: 500, //半径
					strokeWidth: 2 //描边的宽度
				}
			],
			polyline: [
				{
					//指定一系列坐标点，从数组第一项连线至最后一项
					points: [
						{ latitude: 39.909, longitude: 116.39742 },
						{ latitude: 39.9, longitude: 116.39 }
					],
					color: '#f00', //线的颜色
					width: 4, //线的宽度
					dottedLine: true, //是否虚线
					arrowLine: true //带箭头的线 开发者工具暂不支持该属性
				}
			]
		};
	},
	onLoad() {
		this.onDistance = wx.getMenuButtonBoundingClientRect().top * 2;
		uni.getLocation({
			//获取当前的位置坐标
			type: 'gcj02',
			success: res => {
				console.log('当前位置的经度：' + res.longitude);
				console.log('当前位置的纬度：' + res.latitude);
				this.longitude = res.longitude;
				this.latitude = res.latitude;
			}
		});
		uni.createMapContext('mymap').getCenterLocation({
			success: res => {
				this.latitude = res.latitude;
				this.longitude = res.longitude;
				this.getRegeo();
			}
		});
		// 		uni.chooseLocation({
		// 			success: res => {
		// 				console.log('位置名称：' + res.name);
		// 				console.log('详细地址：' + res.address);
		// 				console.log('纬度：' + res.latitude);
		// 				console.log('经度：' + res.longitude);
		// 			}
		// 		});
		this.amapPlugin = new amap.AMapWX({
			key: this.key
		});
	},
	computed: {
		...mapState(['token', 'id', 'type', 'username', 'theIndex', 'markers']),
		halfWidth() {
			return uni.upx2px(this.onDistance-5) + 'px';
		}
	},
	mounted() {},
	methods: {
		...mapMutations(['markersStorage']),
		Drag() {},
		play() {
			uni.createMapContext('mymap').moveToLocation({});
			setTimeout(() => {
				this.regionchange();
			}, 200);
		},
		search() {
			this.markersStorage(this.covers);
			uni.navigateTo({
				url: 'list/list'
			});
		},
		expand(key) {
			// 点击标记点详情弹窗
			if (this.counts == key) {
				this.counts = -1;
			} else {
				this.counts = key;
			}
		},
		markertap(EventHandle) {
			// 点击标记点，切换
			// this.counts = EventHandle.mp.markerId;
			this.markersStorage(this.covers);
			uni.navigateTo({
				url: '/pages/near/list/list?counts=' + EventHandle.mp.markerId
			});
		},
		regionchanges(EventHandle) {
			console.log(EventHandle);
		},
		regionchange() {
			// 拖动地图切换中心点的坐标
			console.log('切换了');
			uni.createMapContext('mymap').getCenterLocation({
				success: res => {
					// console.log(res);
					if (this.latitude != res.latitude && this.longitude != res.longitude) {
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						this.getRegeo();
					}
				}
			});
		},
		getRegeo() {
			// 获取当前位置的地理信息的周边店铺
			let that = this;
			uni.showLoading({
				title: '获取信息中'
			});
			this.amapPlugin.getRegeo({
				success: data => {
					console.log(data);
					this.addressName = data[0].name;
					uni.hideLoading();
				}
			});
			this.amapPlugin.getPoiAround({
				location: this.latitude + ',' + this.longitude,
				success: data => {
					//成功回调
					console.log(data);
					this.covers = data.markers;
				},
				fail: info => {
					//失败回调
					console.log(info);
				}
			});
		}
	}
};
</script>

<style lang="scss">
map {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.near {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.controls-play {
	display: block;
	position: absolute;
	bottom: 100upx;
	right: 35upx;
	width: 93upx;
	height: 93upx;
}
.controls-list {
	display: block;
	position: absolute;
	bottom: 223upx;
	right: 35upx;
	width: 93upx;
	height: 93upx;
}
.controls-search {
	display: block;
	position: absolute;
	top: 52upx;
	left: 10upx;
	width: 511upx;
	height: 89upx;
}
.page-body {
	width: 100%;
	height: 100%;
	padding-top: constant(safe-area-inset-top); //88px
}
.active-pos {
	width: 200upx;
	height: 280upx;
}
.poi-list {
	ul {
		li {
			width: 200upx;
			height: 280upx;
		}
	}
}
.page-section {
	width: 100%;
	height: 100%;
	position: relative;
}
// 	.page-section-gap{
// 		width: 100%;
// 		height: 100%;
// 	}

// .near-details {
// 	display: block;
// 	position: fixed;
// 	bottom: 100upx;
// 	left: 0;
// 	height: 380upx;
// 	.Drag {
// 		transform: translateY(-100upx);
// 		width: 474upx;
// 		height: 629upx;
// 		span {
// 			display: block;
// 			position: absolute;
// 			top: 277upx;
// 			left: 49upx;
// 			font-size: 35upx;
// 			text-align: center;
// 			color: #474747;
// 		}
// 		img {
// 			display: block;
// 			width: 100%;
// 			height: 238upx;
// 			background-color: #474747;
// 			position: absolute;
// 			top: 0upx;
// 			left: 0upx;
// 			border-radius: 20upx 20upx 0 0;
// 		}
// 		view {
// 			width: 267upx;
// 			height: 92upx;
// 			position: absolute;
// 			left: 49upx;
// 			top: 389upx;
// 			font-size: 20upx;
// 			p {
// 				color: #434343;
// 				left: 0upx;
// 				top: 50upx;
// 			}
// 		}
// 		text {
// 			position: absolute;
// 			bottom: 54upx;
// 		}
// 		.borrow {
// 			left: 51upx;
// 		}
// 		.also {
// 			right: 55upx;
// 			color: #4680ff;
// 		}
// 	}
// 	.correction {
// 		transform: translateY(-248upx);
// 	}
// }
// .movable-details {
// 	display: block;
// 	width: 5600upx;
// 	height: 380upx;
// }
// .details {
// 	display: inline-block;
// 	width: 230upx;
// 	height: 380upx;
// 	margin-left: 35upx;
// 	background-color: #fff;
// 	position: relative;
// 	// transform:translateY(-100upx);
// 	font-size: 28upx;
// 	border-radius: 20upx;
// 	span {
// 		display: block;
// 		position: absolute;
// 		top: 159upx;
// 		width: 230upx;
// 		text-align: center;
// 		color: #474747;
// 	}
// 	img {
// 		display: block;
// 		width: 94upx;
// 		height: 94upx;
// 		background-color: #474747;
// 		position: absolute;
// 		top: 38upx;
// 		left: 68upx;
// 		border-radius: 50%;
// 	}
// 	text {
// 		position: absolute;
// 		bottom: 140upx;
// 		font-size: 24upx;
// 	}
// 	.borrow {
// 		left: 42upx;
// 	}
// 	.also {
// 		right: 41upx;
// 		color: #4680ff;
// 	}
// }
</style>
