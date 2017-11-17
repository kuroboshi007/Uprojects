<template>
	<div class="admin-bg" id="login" v-show="showLogin">
		<div class="admin-logo">FlowerGirls Admin</div>
		<div class="admin-login">
	    	<Input v-model="username" placeholder="用户名"  ></Input>
			<Input v-model="password" placeholder="密码"  type="password"></Input> 
	 		<i-button  @click="login" style:"background:#222222;">Login</i-button>
		</div>
	</div>
</template>
<style>
	html{
		height: 100%;
		width: 100%;
	}
	body{
		padding: 0;
		margin: 0;
		background: url(src/img/admin.png);
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
		width: 100%;
	}
	.admin-bg{
		height: 100%;
		width: 100%;
		background: rgba(255,255,255,0.6); 
		z-index: 1000;
	}
	.admin-bg .admin-login{
		border-left:1px solid #EE1779 ;
		/*border: 1px solid #EE1779;*/
		opacity: 0.5;
		padding: 10px;
		width: 230px;
		text-align: center;
		position: absolute;
		top: 35%;
		left: 18%;
	}
	.admin-bg .admin-logo{
		z-index: 10000;
		position: absolute;
		top: 5%;
		left:5%;
		font-size: 25px;
		opacity: 0.8;
	}
	.admin-bg .admin-login input{
		margin-bottom: 10px;
		width: 200px;
	}
	 
</style>
<script>
 export default {
        data () {
            return {
                showLogin: true,
                username:'',
                psaaword:''
            }
        }
    }   
</script>

