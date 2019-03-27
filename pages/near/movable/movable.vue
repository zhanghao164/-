<template>
	<view>
		<movable-area class="near-details">
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
		</movable-area>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.near-details {
	display: block;
	position: fixed;
	bottom: 100upx;
	left: 0;
	height: 380upx;
	.Drag {
		transform: translateY(-100upx);
		width: 474upx;
		height: 629upx;
		span {
			display: block;
			position: absolute;
			top: 277upx;
			left: 49upx;
			font-size: 35upx;
			text-align: center;
			color: #474747;
		}
		img {
			display: block;
			width: 100%;
			height: 238upx;
			background-color: #474747;
			position: absolute;
			top: 0upx;
			left: 0upx;
			border-radius: 20upx 20upx 0 0;
		}
		view {
			width: 267upx;
			height: 92upx;
			position: absolute;
			left: 49upx;
			top: 389upx;
			font-size: 20upx;
			p {
				color: #434343;
				left: 0upx;
				top: 50upx;
			}
		}
		text {
			position: absolute;
			bottom: 54upx;
		}
		.borrow {
			left: 51upx;
		}
		.also {
			right: 55upx;
			color: #4680ff;
		}
	}
	.correction {
		transform: translateY(-248upx);
	}
}
.movable-details {
	display: block;
	width: 5600upx;
	height: 380upx;
}
.details {
	display: inline-block;
	width: 230upx;
	height: 380upx;
	margin-left: 35upx;
	background-color: #fff;
	position: relative;
	// transform:translateY(-100upx);
	font-size: 28upx;
	border-radius: 20upx;
	span {
		display: block;
		position: absolute;
		top: 159upx;
		width: 230upx;
		text-align: center;
		color: #474747;
	}
	img {
		display: block;
		width: 94upx;
		height: 94upx;
		background-color: #474747;
		position: absolute;
		top: 38upx;
		left: 68upx;
		border-radius: 50%;
	}
	text {
		position: absolute;
		bottom: 140upx;
		font-size: 24upx;
	}
	.borrow {
		left: 42upx;
	}
	.also {
		right: 41upx;
		color: #4680ff;
	}
}
</style>
