<template>
   <div class="container-fluid">
       <div class="row">
            <div class="col-6">
                <h2 class="headings">Faculty</h2>
            </div>
            <div class="col-6 text-md-right">
                <div style="position: relative">
                    <button class="ca-btn">Add Faculty</button>    
                </div>
            </div>
        </div>

          <div class="row mt-5">
            <div class="col-6">
                <form>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Faculty Name</label>
                    </div>  
                </form>
            </div>
            
        </div>
        <div class="row mt-5">
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
                        <tr v-for="(faculty, i) in faculties" :key="i">
                            <th scope="row"> {{i+1}} </th>
                            <td>{{faculty}}</td>
        
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
                faculties: []
            }
        },

        mounted() {
            this.$http.get('api/get/faculty')
                    .then(response => {
                        return response.json();
                        
                    })
                    .then(data => {
                        data.forEach(fac => {
                            this.faculties.push(fac[1]);
                        });
                    })
                   
                    
        }
    }    
</script>
