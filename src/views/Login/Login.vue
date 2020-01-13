<template>
	<transition name="slide">
		<div class="login">
			<h1>登录</h1>
			<van-cell-group class="login-from">
				<van-field v-model="userName" clearable border label="邮箱" placeholder="请输入邮箱" :error-message="userNameErr" />
				<van-field v-model="password" clearable border type="password" label="密码" placeholder="请输入密码" :error-message="passwordErr" />
				<van-cell>
					<van-row>
						<van-col span="12" class="btn">
							<van-button type="primary" size="small" @click="login" :loading="loading">登陆</van-button>
						</van-col>
						<van-col span="12" class="btn">
							<van-button type="default" size="small" @click="reg">注册</van-button>
						</van-col>
					</van-row>
				</van-cell>
			</van-cell-group>
		</div>
	</transition>
</template>

<script>
	export default {
		methods: {
			login() {
				this.userNameErr = '';
				this.passwordErr = '';
				
				
			},
			reg() {
				this.$router.push('/reg');
			}
		}
	}
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100%;
		text-align: center;
		/* background: url('./../../images/bgc/bgc.jpg') */
		background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
	}

	h1 {
		margin-top: 40%;
	}

	.login-from {
		width: 80%;
		text-align: center;
		padding: 10px;
		margin: 0 auto;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);
	}

	.btn {
		text-align: center;
		margin-top: 10px;
	}
</style>
