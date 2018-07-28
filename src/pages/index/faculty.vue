<template>
   <div class="container-fluid">
       <div class="row">
            <div class="col-6">
                <h2 class="headings">Faculty</h2>
            </div>
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" @click.prevent="showForm = true">Add Faculty</button>    
                </div>
            </div>
        </div>

          <div class="row" v-if="showForm">
            <div class="col-6">
                <form>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Faculty Name</label>
                    </div>  
                    <div class="button">
                        <button class="button__submit" type="submit">submit</button>
                        <button class="button__submit" type="button" @click.prevent="showForm = false">cancel</button>
                    </div>
                </form>
            </div>
            
        </div>

        <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, k) in 2" :key="k">
                            <th scope="row"> {{i}} </th>
                            <td>Engineering</td> 
                            <td>
                                <a href="">Edit</a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
   </div>
</template>

<script>
    export default{
        data() {
            return {
                showForm: false
            }
        }
    }    
</script>
