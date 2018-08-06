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
                            <option disabled selected value="">SELECT DEPARTMENT NAME</option> 
                            <option v-for="(program, i) in programObjArray" :key="i" :value="program.departmentName" >{{program.departmentName}} </option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
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
            <div class="col-2" v-for="(i, j) in filter" :key="j">
                <div class="form-group filter">
                    <label for="facultyFilter">{{ i.title }}</label>
                    <select v-model="select[j]" class="form-control filter__select" id="facultyFilter">
                        <option v-for="(n, p) in i.values" :key="p" :value="n.value" >{{ n.name }}</option>
                    </select>
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
                        <tr v-for="(p, k) in programTable" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{p.programName}}</td>
                            <td>{{p.programAbbr}}</td>
                            <td>{{p.programDegree}}</td>
                            <td>{{p.departmentName}}</td>
                            <td>{{p.facultyName}}</td>
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

            select: ['all', 'all'],
            inputProgram: {
                deptName: '',
                progName: '',
                pAbr: '',
                deg: '',
                id: ''

            },
            showForm: false,
            programObjArray: [],
            update: false,
            faculty: []
        }
    },
    computed: {
        filter(){ 
            return [
                {
                    title: 'Faculty',
                    values: this.$store.state.faculty
                },
                {
                    title: 'Department',
                    values: this.$store.state.department
                }, 
            ]
        },

       programTable(){
            var fcl = this.select[0]
            var dep = this.select[1]
                var nArray = []
                if(fcl === 'all'){
                    nArray = this.programObjArray;
                }else{
                    nArray = this.programObjArray.filter(el => {
                        return el.facultyName === fcl;
                    })
                }

                if(dep !== 'all'){
                    nArray = nArray.filter(el => {
                        return el.departmentName === dep;
                    })
                }
                
                return nArray;
       }

    },
    methods: { 
        goEdit(p){
            let prog = this.programObjArray[p];
            console.log('this.programObjArray[p];: ', this.programObjArray[p]);
    
            this.inputProgram.deptName = prog.departmentName;
            this.inputProgram.progName = prog.progName;
            this.inputProgram.pAbr = prog.programAbbr;
            this.inputProgram.deg = prog.programDegree;
            this.inputProgram.id = prog.programId;


            this.showForm = true;
            this.update = true;


        },
        updateProg(){
            this.$http.put(`update/program/${this.inputProgram.id}`, this.inputProgram)
                    .then(response => {
                        this.getDataFromDb();
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
                        data.forEach(p => {
                            this.programObjArray.push({
                                departmentAbbr: p[0],
                                programName: p[1],
                                facultyName: p[2],
                                programAbbr: p[3],
                                programDegree: p[4],
                                departmentName: p[5],
                                programId: p[6]

                            });
                        })
                    }).catch(this.$errorHandler)
        },
        insertProgram() {
            this.$http.post('insert/program', this.inputProgram )
                        .then(response => {
                            this.getDataFromDb();
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
       let FacultyLen = this.$store.state.faculty.length;
       if(!FacultyLen) {
           this.$store.dispatch('getFaculties');
       }

       let departmentLen = this.$store.state.department.length;
       if(!departmentLen) {
           this.$store.dispatch('getDepartments');
       } 
       let programLen = this.$store.state.program.length;
       if(!programLen) {
           this.$store.dispatch('getPrograms');
       }
       let sessionLen = this.$store.state.session.length;
       if(!sessionLen) {
           this.$store.dispatch('getSessions');
       } 
   }
}
</script>

<style lang="scss" scoped>

</style>
