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
                        <button v-if="!updateButton" @click.prevent="insertNewFaculty"  class="button__submit" type="submit">Save</button>
                        <button v-if="updateButton" @click.prevent="updateFaculty"  class="button__submit" type="submit">Update</button>
                        <button  class="button__submit" type="button" @click.prevent="clear">cancel</button>
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
                        <tr v-for="(faculty, i) in faculties" :key="i">
                            <th scope="row"> {{i+1}} </th>
                            <td>{{faculty[1]}}</td>
        
                            <td>
                                <a @click.prevent="goEdit(i)" href="">Edit</a>
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
                faculties: [],
                fac: {
                    facultyName: ''
                },
                successMessage: '',
                showForm: false,
                updateButton: false,
                facutlyId: ''
            }
        },
        methods: {
            clear(){
                this.fac.facultyName = '';
                this.showForm = false;
                this.updateButton = false;
            },
            getFaculty() {
                this.$http.get('get/faculty')
                    .then(response => {
                        return response.json();
                        
                    })
                    .then(data => {
                        this.faculties = data;
                    });    
            },
            insertNewFaculty() {
                var link = 'insert/faculty';
                this.$http.post(link, this.fac )
                        .then(response => {
                            this.getFaculty();
                        }, error => {
                            console.log(error);
                        })
                this.facultyName = '';
                this.showForm = false;
            },
            goEdit(p){
                let fac = this.faculties[p]
                this.fac.facultyName = fac[1];
                this.facutlyId = fac[0];
                this.updateButton = true;
                this.showForm = true;
            },
            updateFaculty() {
                this.$http.put(`update/faculty/${this.facutlyId}`, this.fac)
                        .then(response => {
                            this.getFaculty();
                        }, err => {
                            console.log(err)
                        });
                    this.showForm = false;
            }
        },

        mounted() {
            this.getFaculty();           
        }

    }    
</script>
