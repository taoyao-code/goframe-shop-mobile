<!-- 首页 -->
<template>
	<view>
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
				tabbar_value: 0,
			};
		},
		onLoad(e) {

		},
		methods: {
			clickTabbar(item, index) {
				if (index === 2) {
					return uni.$u.toast('请您先登录')
				}
				this.tabbar_value = index
			},
		}
	}
</script>

<style lang="scss">

</style>
