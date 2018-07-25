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
                        <input type="text" v-model="fac.facultyName" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Faculty Name</label>

                    </div>  
                    <div class="button">
<<<<<<< HEAD
                        <button @click.prevent="insertNewFaculty" class="button__submit" type="submit">submit</button>
=======
                        <button class="button__submit" type="submit">submit</button>
                        <button class="button__submit" type="button" @click.prevent="showForm = false">cancel</button>
>>>>>>> 4d567123aa6a0a492d62d2d84bc5497052cfa35f
                    </div>
                </form>
            </div>
        </div>
<<<<<<< HEAD
        <div class="row mt-5">
=======

        <div class="row">
>>>>>>> 4d567123aa6a0a492d62d2d84bc5497052cfa35f
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
<<<<<<< HEAD
                        <tr v-for="(faculty, i) in faculties" :key="i">
                            <th scope="row"> {{i+1}} </th>
                            <td>{{faculty}}</td>
        
=======
                        <tr v-for="(i, k) in 6" :key="k">
                            <th scope="row"> {{i}} </th>
                            <td>Engineering</td> 
>>>>>>> 4d567123aa6a0a492d62d2d84bc5497052cfa35f
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
<<<<<<< HEAD
                faculties: [],
                fac: {
                    facultyName: ''
                },
                successMessage: ''
=======
                showForm: false
>>>>>>> 4d567123aa6a0a492d62d2d84bc5497052cfa35f
            }
        },
        methods: {
            insertNewFaculty() {
                var link = 'insert/faculty';
                this.$http.post(link, this.fac )
                        .then(response => {
                            console.log(response.body)
                        }, error => {
                            console.log(error);
                        })
                this.facultyName = '';
               
            }
        },

        mounted() {
            this.$http.get('get/faculty')
                    .then(response => {
                        return response.json();
                        
                    })
                    .then(data => {
                        data.forEach(fac => {
                            this.faculties.push(fac[1]);
                        });
                    });                        
        }

    }    
</script>
