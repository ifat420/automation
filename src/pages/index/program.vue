<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Program</h2>    
            </div>    
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add Program</button>    
                </div>
            </div>    
        </div>
        <div class="row" v-if="showForm">
            <div class="col-6">
                <form> 

                    <div class="group"> 
                        <select v-model="inputProgram.deptName">
                            <option disabled selected value="">Select Department..</option> 
                            <option v-for="(program, i) in programs" :key="i" :value="program[5]" >{{program[5]}} </option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 
                    <div class="group">
                        <input type="text" v-model="inputProgram.progName" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Program Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" v-model="inputProgram.pAbr" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Program Abbrebeation</label>
                    </div>  
                    <div class="group">
                        <input type="text" v-model="inputProgram.deg" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Degree</label>
                    </div>
                    <div class="button">
                        <button v-if="!update" class="button__submit" @click.prevent="insertProgram" type="submit">Save</button>
                        <button v-if="update" class="button__submit" @click.prevent="updateProg" type="submit">Update</button>
                        <button @click="showForm = false; update = false" class="button__submit" type="button">cancel</button>
                    </div>
                </form>    
            </div>    
        </div>   

        <div class="row">
            <div class="col">
                <div class="filter">
                    <span class="filter__head">Faculty </span>
                    <span class="filter__item">Engineering</span>
                    <span class="filter__item">Biology</span>
                </div>
                <div class="filter">
                    <span class="filter__head">Department </span>
                    <span class="filter__item">CSE</span>
                    <span class="filter__item">EST</span>
                </div> 
            </div> 
        </div> 
        <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Program Name</th>
                        <th scope="col">Abbrebeation</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Department</th>
                        <th scope="col">Faculty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(program, k) in programs" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{program[1]}}</td>
                            <td>{{program[3]}}</td>
                            <td>{{program[4]}}</td>
                            <td>{{program[0]}}</td>
                            <td>{{program[2]}}</td>
                            <td>
                                <a href="" @click.prevent="goEdit(k)">Edit</a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            inputProgram: {
                deptName: '',
                progName: '',
                pAbr: '',
                deg: ''

            },
            progrmId: '',
            showForm: false,
            programs: [],
            update: false
        }
    },

    methods: { 
        goEdit(p){
            let prog = this.programs[p]
            this.inputProgram.deptName = prog[5];
            this.inputProgram.progName = prog[1];
            this.inputProgram.pAbr = prog[3];
            this.inputProgram.deg = prog[4];

            this.progrmId = prog[6]
            this.showForm = true;
            this.update = true;


        },
        updateProg(){
            this.$http.put(`update/program/${this.progrmId}`, this.inputProgram)
                    .then(response => {
                        console.log(response.body)
                    }, error => {
                        console.log(error)
                    })
            this.showForm = false;
            this.update = false;        

        },
        getDataFromDb(){
            this.$http.get('get/program')
                    .then(response => {
                        return response.json();
                        
                    })
                    .then(data => {
                        this.programs = data;
                    }).catch(this.$errorHandler)
        },
        insertProgram() {
            this.$http.post('insert/program', this.inputProgram )
                        .then(response => {
                            console.log(response.body)
                        }, error => {
                            console.log(error);
                        })
            this.inputProgram.deptName = '';
            this.inputProgram.progName = '';
            this.inputProgram.pAbr = '';
            this.inputProgram.deg = '';
            
        }

    },
   mounted(){
       this.getDataFromDb();
   }
}
</script>

<style lang="scss" scoped>

</style>
