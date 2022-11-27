<!-- 我的 -->
<template>
	<view>
		<!-- 顶部 -->
		<view class="my-header my-radius">
			<view class="my-header-left">
				<u-avatar src="https://cdn.uviewui.com/uview/album/1.jpg" size="70"></u-avatar>
				<view class="my-nickename">
					<view class="">
						昵称
					</view>
					<view class="">
						<u--text type="info" text="账号：xxxxx"></u--text>
					</view>
				</view>
			</view>
			<view class="my-userInfo">
				<view class="">
					<u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
		</view>
		<!-- 订单列表 -->
		<view class="orderList my-radius">
			<u-grid :border="false" col="6">
				<u-grid-item v-for="(listItem,listIndex) in Orderlist" :key="listIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>

		<!-- 列表 -->
		<view class="my-list my-radius">
			<u-cell-group>
				<u-cell :icon="item.icon" :title="item.title" v-for="(item,index) in list" :key="index"></u-cell>
			</u-cell-group>
		</view>


		<u-tabbar :value="tabbar_value" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item v-for="(item,index) in vuex_tabbar" :key="index" :text="item.text" :icon="item.icon"
				@click="clickTabbar(item,index)">
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: "我的优惠券",
						icon: "coupon",
					},
					{
						title: "用户信息",
						icon: "account-fill",
					},
					{
						title: "地址管理",
						icon: "map",
					},
					{
						title: "退出",
						icon: "backspace",
					},
				],
				Orderlist: [{
						name: 'photo',
						title: '待付款'
					},
					{
						name: 'lock',
						title: '待发货'
					},
					{
						name: 'lock',
						title: '待收货'
					},
					{
						name: 'star',
						title: '待评价'
					},
					{
						name: 'hourglass',
						title: '退换'
					},
					{
						name: 'list',
						title: '我的订单'
					},
				],
			}
		},
		methods: {
			// 点击底部导航栏
			clickTabbar(item, index) {
				if (index === 2) {
					return uni.$u.toast('请您先登录')
				}
				uni.$u.vuex('tabbar_value', index)
				uni.$u.route(item.url);
			},
			clickOrder(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			}
		}
	}
</script>
<style>
	page {
		/* background-color: #ededed; */
	}
</style>

<style lang="scss">
	.my-header {
		height: 200rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rpx;
		// border: 1rpx solid red;
		box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.1), 0 6rpx 10rpx 0 rgba(0, 0, 0, 0.19);

		.my-header-left {
			display: flex;
			align-items: center;

			.my-nickename {
				padding: 10rpx;
			}
		}

		.my-userInfo {
			display: flex;
		}
	}

	.orderList {
		margin: 10rpx;
		box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.1), 0 6rpx 10rpx 0 rgba(0, 0, 0, 0.19);
	}

	.my-list {
		margin: 10rpx;
		box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.1), 0 6rpx 10rpx 0 rgba(0, 0, 0, 0.19);
	}

	.swiper {
		height: 720rpx;
	}

	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
	
	.my-radius{
		border-radius: 10rpx;
	}
</style>
