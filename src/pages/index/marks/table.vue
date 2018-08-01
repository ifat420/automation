<template>
    <div class="contariner-fluid">
        <div class="row" v-if="!showTable">
            <div class="col-6">
                <h2 class="headings">Marks Input Table</h2>
            </div>
        </div>

        <div class="row" v-if="!showTable">
            <div class="col-6">
                <form> 
                    <div class="group"> 
                        <select v-model="courseInputSearch.departmentName">
                            <option disabled selected value="1">Select Department..</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>  
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group"> 
                        <select v-model="courseInputSearch.program">
                            <option disabled selected value="1">Select Program..</option> 
                            <option value="BSC">BSC</option> 
                            <option value="MSC">MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>

                    <div class="group"> 
                        <select v-model="courseInputSearch.session">
                            <option disabled selected value="1">Select Session..</option> 
                            <option v-for="(sec, k) in distinctSession" :key="k" :value="sec[0]">{{sec[0]}}</option>
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 
                                    

                    <div class="group"> 
                        <select v-model="courseInputSearch.semisterId">
                            <option disabled selected value="1">Select Semester..</option> 
                            <option value="1.1">1.1</option> 
                            <option value="1.2">1.2</option> 
                            <option value="2.1">2.1</option> 
                            <option value="2.2">2.2</option> 
                            <option value="3.1">3.1</option> 
                            <option value="3.2">3.2</option> 
                            <option value="4.1">4.1</option> 
                            <option value="4.2">4.2</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

        
                    <div class="button">
                        <button @click.prevent="showBlankTable" class="button__submit" type="submit">submit</button>
                        <button @click.prevent="reset" class="button__submit" type="reset" value="Reset">reset</button>
                    </div>
                </form>    
            </div>    
        </div>


        <div class="row" v-if="showTable">
            <div class="col-6">
                <h2 class="headings">Input Theory Marks</h2>
            </div>
        </div>

        <div class="row" v-if="showTable">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Roll</th>
                        <th scope="col">Course title</th>
                        <th scope="col">Class Test</th>
                        <th scope="col">Attendence</th>
                        <th scope="col">Internal Marks</th>
                        <th scope="col">External Marks</th>        
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(m, k) in blankMarksArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{m[0]}}</td>
                            <td>{{m[1]}}</td>
                            <td>
                                <div class="form-group">
                                    <input v-model="m[2]"  class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[3]"  class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[4]" class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[5]" class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[6]"  class="form-control"  placeholder="marks">
                                </div>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>



        <div class="row" v-if="showLabTable">
            <div class="col-6">
                <h2 class="headings">Input Lab Marks</h2>
            </div>
        </div>


        <div class="row" v-if="showLabTable">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Roll</th>
                        <th scope="col">Course title</th>
                        <th scope="col">CPA</th>
                        <th scope="col">QV</th>
                        <th scope="col">PR</th>    
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr v-for="(m, k) in blankMarksLabArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{m[0]}}</td>
                            <td>{{m[1]}}</td>
                            <td>
                                <div class="form-group">
                                    <input v-model="m[2]"  class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[3]"  class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[4]" class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[5]" class="form-control"  placeholder="marks">
                                </div>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
        

        <div class="row" v-if="showVivaTable">
            <div class="col-6">
                <h2 class="headings">Input Viva Marks</h2>
            </div>
        </div>


        <div class="row" v-if="showVivaTable">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Roll</th>
                        <th scope="col">Course title</th>
                        <th scope="col">Total</th>   
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr v-for="(m, k) in blankMarksVivaArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{m[0]}}</td>
                            <td>{{m[1]}}</td>
                            <td>
                                <div class="form-group">
                                    <input v-model="m[2]"  class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[3]" class="form-control"  placeholder="marks">
                                </div>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row" v-if="showThesisProjectTable">
            <div class="col-6">
                <h2 class="headings">Input Thesis/Project Marks</h2>
            </div>
        </div>

        <div class="row" v-if="showThesisProjectTable">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Roll</th>
                        <th scope="col">Course title</th>
                        <th scope="col">Internal Marks</th>   
                        <th scope="col">External Marks</th>   
                        <th scope="col">PR</th>   
                        <th scope="col">Viva</th>   
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr v-for="(m, k) in blankMarksThesisProjectArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{m[0]}}</td>
                            <td>{{m[1]}}</td>
                            <td>
                                <div class="form-group">
                                    <input v-model="m[2]"  class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[3]" class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[4]" class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[5]" class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                            <td>
                                 <div class="form-group">
                                    <input v-model="m[6]" class="form-control"  placeholder="marks">
                                </div>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>


        <div class="row" v-if="showTable">
            <div class="col-6">
                 <div class="button">
                    <button @click.prevent="submitAllMarks" class="button__submit" type="submit">submit</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {commonData} from '../../../mixins/commonData.js'
    export default {
        mixins: [commonData],
        data(){
            return {
                courseInputSearch: {
                    departmentName: '',
                    program: '',
                    session: '',
                    semisterId: ''

                },
                showTable: false,
                showLabTable: false,
                showVivaTable: false,
                showThesisProjectTable: false,
                blankMarksArray: [],
                blankMarksLabArray: [],
                blankMarksVivaArray: [],
                blankMarksThesisProjectArray: []
                
            }
        },
        methods: {

            // get blank Theory markstable
            showTableDetailsTheory(){
                this.$http.post('insert/markstableblanktheory', this.courseInputSearch)
                    .then(response => {
                        this.blankMarksArray =  response.body.rows;
                        // console.log(response.body.rows);
                    }, err => {
                        console.log(err);
                    })   
                this.showTable = true;
            },

            // submit Theory Marks
            submitMarks(){
                this.blankMarksArray.forEach(mark => {

                    if(mark[2]==='' || mark[2] < 0 || mark[2] === null)mark[2] = -9;
                    if(mark[3]==='' || mark[3] < 0 || mark[3] === null)mark[3] = -9;
                    if(mark[4]==='' || mark[4] < 0 || mark[4] === null)mark[4] = -9;
                    if(mark[5]==='' || mark[5] < 0 || mark[5] === null)mark[5] = -9;
                    if(mark[6]==='' || mark[6] === null)mark[6] = 'not';
                    
                   
                })               
                 this.$http.post('insert/markstable', this.blankMarksArray)
                    .then(response => {
                        // console.log(response.body);
                    }, err => {
                        console.log(err);
                })   
            },
            submitLabMarks(){
                this.blankMarksLabArray.forEach(mark => {            
                    if(mark[2]==='' || mark[2] < 0 || mark[2] === null)mark[2] = -9;
                    if(mark[3]==='' || mark[3] < 0 || mark[3] === null)mark[3] = -9;
                    if(mark[4]==='' || mark[4] < 0 || mark[4] === null)mark[4] = -9;
                    if(mark[5]==='' || mark[5] ===null)mark[5] = 'not';
                })               
                
                // console.log(this.blankMarksLabArray);
                 this.$http.post('insert/markstableFilledLab', this.blankMarksLabArray)
                    .then(response => {
                        // console.log(response.body);
                    }, err => {
                        console.log(err);
                })   
            },

            submitVivaMarks(){
                this.blankMarksVivaArray.forEach(mark => {            
                    if(mark[2]==='' || mark[2] < 0 || mark[2] === null)mark[2] = -9;
                    if(mark[3]==='' || mark[3] === null)mark[3] = 'not';
                })               
                // console.log(this.blankMarksVivaArray);
                // console.log(this.blankMarksLabArray);
                 this.$http.post('insert/markstableFilledViva', this.blankMarksVivaArray)
                    .then(response => {
                        console.log(response.body);
                    }, err => {
                        console.log(err);
                })   
            },
             submitThesisProjectMarks(){
                this.blankMarksThesisProjectArray.forEach(mark => {

                    if(mark[2]==='' || mark[2] < 0 || mark[2] === null)mark[2] = -9;
                    if(mark[3]==='' || mark[3] < 0 || mark[3] === null)mark[3] = -9;
                    if(mark[4]==='' || mark[4] < 0 || mark[4] === null)mark[4] = -9;
                    if(mark[5]==='' || mark[5] < 0 || mark[5] === null)mark[5] = -9;
                    if(mark[6]==='' || mark[6] === null)mark[6] = 'not';
                    
                //    console.log(this.blankMarksThesisProjectArray);
                })               
                 this.$http.post('insert/markstableFilledThesisProject', this.blankMarksThesisProjectArray)
                    .then(response => {
                        // console.log(response.body);
                    }, err => {
                        console.log(err);
                })   
            },

            showTableDetailsLab(){
                this.$http.post('insert/markstableblanklab', this.courseInputSearch)
                    .then(response => {
                        this.blankMarksLabArray =  response.body.rows;
                        if(this.blankMarksLabArray.length >= 1) this.showLabTable = true;
                        // console.log(response.body.rows);
                    }, err => {
                        console.log(err);
                    })   

            },

            showTableDetailsViva(){
                this.$http.post('insert/markstableblankviva', this.courseInputSearch)
                    .then(response => {
                        this.blankMarksVivaArray =  response.body.rows;
                        if(this.blankMarksVivaArray.length >= 1) this.showVivaTable = true;
                        // console.log(response.body.rows);
                    }, err => {
                        console.log(err);
                    }) 
            },
            showTableDetailsThesisProject(){
                this.$http.post('insert/markstableblankthesisproject', this.courseInputSearch)
                    .then(response => {
                        this.blankMarksThesisProjectArray =  response.body.rows;
                        if(this.blankMarksThesisProjectArray.length >= 1) this.showThesisProjectTable = true;
                        // console.log(response.body.rows);
                    }, err => {
                        console.log(err);
                    }) 
            },

            showBlankTable(){
                this.showTableDetailsTheory();
                this.showTableDetailsLab();
                this.showTableDetailsViva();
                this.showTableDetailsThesisProject();
            },
            submitAllMarks(){
                this.submitMarks();
               if(this.blankMarksLabArray.length >= 1) this.submitLabMarks();
               if(this.blankMarksVivaArray.length >= 1) this.submitVivaMarks();
               if(this.blankMarksThesisProjectArray.length >= 1) this.submitThesisProjectMarks();
            }
        }

        
    }
</script>