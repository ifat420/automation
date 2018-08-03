<template>
    <div class="container-fluid">
        <div class="row" v-if="!showTable">
            <div class="col-6">
                <h2 class="headings">Marks Input Third Examiner</h2>
            </div>
        </div>

        <div class="row" v-if="!showTable">
            <div class="col-6">
                <form> 
                    <div class="group"> 
                        <select v-model="courseInputSearch.departmentName">
                            <option disabled selected value="1">SELECT DEPARTMENT</option> 
                            <option v-for="(dept, k) in allDept" :key="k" :value="dept[1]"> {{dept[1]}}</option>  
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div> 

                    <div class="group"> 
                        <select v-model="courseInputSearch.program">
                            <option disabled selected value="1">SELECT PROGRAM</option> 
                            <option value="BSC">BSC</option> 
                            <option value="MSC">MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div>

                    <div class="group"> 
                        <select v-model="courseInputSearch.session">
                            <option disabled selected value="1">SELECT SESSION</option> 
                            <option v-for="(sec, k) in distinctSession" :key="k" :value="sec[0]">{{sec[0]}}</option>
                            
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div> 
                                    

                    <div class="group"> 
                        <select v-model="courseInputSearch.semisterId">
                            <option disabled selected value="1">SELECT SEMESTER</option> 
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
                    </div> 
 
                    <div class="button">
                        <button @click.prevent="submitForTable" class="button__submit" type="submit">submit</button>
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
                        <th scope="col">Third Examiner Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, k) in blankThirdExaminerArray" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{row[0]}}</td>
                            <td>{{row[1]}}</td>
                            <td>
                                <div class="form-group">
                                    <input v-model="row[2]" class="form-control" type="number" placeholder="marks">
                                </div>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>


        

        <div class="row" v-if="showThesisSection">
            <div class="col-6">
                <h2 class="headings">Input Thesis/Project Third Examiner Marks</h2>
            </div>
        </div>

        <div class="row" v-if="showThesisSection">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Roll</th>
                        <th scope="col">Course title</th>
                        <th scope="col">Third Examiner Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, k) in blankThirdExaminerArrayThesisProject" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{row[0]}}</td>
                            <td>{{row[1]}}</td>
                            <td>
                                <div class="form-group">
                                    <input v-model="row[2]" class="form-control" type="number" placeholder="marks">
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
                    <button @click.prevent="submitThirdExaminerMarks" class="button__submit" type="submit">submit</button>
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
                    departmentName: '1',
                    program: '1',
                    session: '1',
                    semisterId: '1'

                },
                showTable: false,
                showThesisSection: false,
                blankThirdExaminerArray: [],
                blankThirdExaminerArrayThesisProject: []
               
            }
        },
        methods: {

                showTableDetailsTheory(){
                    this.$http.post('insert/marksThirdExaminerTheory', this.courseInputSearch)
                        .then(response => {
                            this.blankThirdExaminerArray =  response.body.rows;
                            this.showTable = true;
                            // console.log(response.body.rows);
                        }, err => {
                            console.log(err);
                        })   
                },
                showTableDetailsThesisProject(){
                    this.$http.post('insert/marksThirdExaminerThesisProject', this.courseInputSearch)
                        .then(response => {
                            this.blankThirdExaminerArrayThesisProject =  response.body.rows;
                            if(this.blankThirdExaminerArrayThesisProject.length > 0)this.showThesisSection = true;
                            // console.log(response.body.rows);
                        }, err => {
                            console.log(err);
                        })   
                },

                submitThirdTheoryMarks(){
                    this.blankThirdExaminerArray.forEach(mark => {

                    if(mark[2]==='' || mark[2] < 0 || mark[2] === null)mark[2] = -9;
                                     
                    })
                    // console.log(this.blankThirdExaminerArray);               
                    this.$http.post('insert/marksTableThirdExaminerTheory', this.blankThirdExaminerArray)
                        .then(response => {
                            // console.log(response.body);
                        }, err => {
                            console.log(err);
                    })   
                },
                submitThirdThesisProjectMarks(){
                    this.blankThirdExaminerArrayThesisProject.forEach(mark => {

                    if(mark[2]==='' || mark[2] < 0 || mark[2] === null)mark[2] = -9;
                                     
                    })
                    // console.log(this.blankThirdExaminerArray);               
                    this.$http.post('insert/marksTableThirdExaminerThesisProject', this.blankThirdExaminerArrayThesisProject)
                        .then(response => {
                            // console.log(response.body);
                        }, err => {
                            console.log(err);
                    })   
                },

                submitThirdExaminerMarks(){
                    if(this.blankThirdExaminerArray.length > 0) this.submitThirdTheoryMarks();
                    if(this.blankThirdExaminerArrayThesisProject.length > 0) this.submitThirdThesisProjectMarks();
                },
                
                submitForTable(){
                    this.showTableDetailsTheory();
                    this.showTableDetailsThesisProject();
                }


        
    }
}
</script>