<template>
    <div class="container-fluid p-0">
        <div class="row no-gutters">
            <div class="col no-gutters">
                <div class="login ">
                    <div class="login__card">
                        <div class="login__card--logo text-center">
                            <img src="../assets/images/Campus Automation Logo 2 Icon2.png" alt="campus automation">
                        </div>
                        <div class="login__card--form">
                            <div class="group">
                                <input v-model="lgn.name" type="text" required="required"/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>User Email</label>
                            </div>  
                            <div class="group">
                                <input v-model="lgn.psw" type="password" required="required"/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password</label>
                            </div> 
                            <div class="button">
                                <button class="button__submit" type="submit" @click.prevent="login">submit</button> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import encode from '../utilities/encode.js'
export default {
    data() {
        return { 
            lgn: {
                name: '',
                psw: ''
            }
        }
    },
    methods: {  
        login() {
             
        }
    }
}
</script>

