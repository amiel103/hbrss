<template>
  <!-- sign up -->
  <v-card
  shaped
  class="mt-15"
  >
    <v-card-title>
      Create Account
    </v-card-title>
    <v-card-text class="pa-15">
       <form>
        <v-text-field
          filled
          rounded
          v-model="name"
          label="Name"
        ></v-text-field>

        <v-text-field
          filled
          rounded
          v-model="email"
          label="E-mail"
        ></v-text-field>

        <v-text-field
          filled
          rounded
          v-model="password"
          label="Password"
        ></v-text-field>

        <v-text-field
          filled
          rounded
          v-model="re_password"
          label="Confirm Password"
        ></v-text-field>

        <v-btn
          x-large
          block
          color="warning"
          rounded
          depressed
          @click="signup()">
          sign up
        </v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import Moralis from 'moralis';
export default {

  layout: 'plain',
  
  methods:{

    data(){
        return {
            name:'',
            email:'',
            password:'',
            re_password:''
        }

    },

    async signup(){
      // const user = new Moralis.User();
      // user.set("username", "my name");

      if(this.password != this.re_password){
          alert(" PASSWORD NOT THE SAME ");
          return
      }

      const user = new Moralis.User();
      user.set("username", this.name);
      user.set("password", this.password);
      user.set("email", this.email);
      user.set("role", 'user');

      // other fields can be set just like with Moralis.Object
      
      try {
        await user.signUp();
        // Hooray! Let them use the app now.
        alert("user created")
        this.$router.push('/');
      } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }

      // console.log(this.name)
      // console.log(this.email)
      // console.log(this.password)
      // console.log(this.re_password)

    }


  }
}
</script>
