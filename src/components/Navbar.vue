<template>
  <div class="header">
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <div class="container">
		  <router-link class="navbar-brand" to="/">Product Manager</router-link>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
		    <ul class="navbar-nav">
		      <li class="nav-item active">
		        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/login">login</router-link>
		      </li>
		      <li class="nav-item">
		        <router-link class="nav-link" to="/register">Register</router-link>
		      </li>
			  <li class="nav-item">
		        <router-link class="nav-link" to="/forgetpassward">Forget Password</router-link>
		      </li>
			  
		    </ul>
		  </div>
		</div>
	</nav>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
