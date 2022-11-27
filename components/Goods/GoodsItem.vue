<template>
	<view class="">
		<view>
			<!-- <u-row justify="space-between" gutter="10"  v-for="(item,index) in goodsList" :key="item.id">
				<u-col span="6">
					
				</u-col>
			</u-row> -->

			<view class="goods-view">
				<view class="goods-card" v-for="(item,index) in goodsList" :key="item.id">
					<!-- 图片 -->
					<u-image width="100%" height="170" :src="item.img" :lazy-load="true"></u-image>
					<!-- 商品信息 -->
					<view class="">
						<u--text :lines="2" :text="item.name"></u--text>
					</view>
					<!-- 价格 -->
					<!-- 现价 -->
					<!-- 划线价格 -->
					<view class="goods-bottom">
						<view class="goods-price">
							<u--text mode="price" :text="item.price" color="#ff0000"></u--text>
							<u--text mode="price" :text="item.showOriginalPrice" color="#909399" size="10" decoration="line-through"></u--text>
						</view>
						<!-- 立即购买-加入购物车 -->
						<view class="">
							<u--text mode="text" text="加入购物车" size="14" color="#ff0000"></u--text>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称',
						img: 'https://cdn.uviewui.com/uview/album/1.jpg',
						price: 9.09,
						showOriginalPrice: 10.00,
						id: 1
					},
					{
						name: '商品名称商品名称商品名称商品名称',
						img: 'https://cdn.uviewui.com/uview/album/1.jpg',
						price: 9.99,
						showOriginalPrice: 100.00,
						id: 2
					},
					{
						name: '商品名称商品名称商品名称商品名称',
						img: 'https://cdn.uviewui.com/uview/album/1.jpg',
						price: 4.00,
						showOriginalPrice: 5.00,
						id: 3
					},
					// {
					// 	name: '商品名称',
					// 	img: 'https://cdn.uviewui.com/uview/album/1.jpg',
					// 	price: 4.00,
					// 	showOriginalPrice: 6.00,
					// 	id: 4
					// }
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.goods-view {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods-card {
			margin:10rpx;
			width: 350rpx;	
			// flex-grow: 1;
			border: 1rpx solid #c8c9cc;
			box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.1), 0 6rpx 20rpx 0 rgba(0, 0, 0, 0.09);
			
			.goods-price{
				// display: flex;
			}
			
			.goods-bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
</style>
