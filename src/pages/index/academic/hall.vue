<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Hall</h2>    
            </div>    
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add Hall</button>    
                </div>
            </div>    
        </div>
        <div class="row" v-if="showForm">
            <div class="col-6">
                <form>    
                    <div class="group">
                        <input v-model="hallObject.name" type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Hall Name</label>
                    </div>  
                    <div class="group"> 
                        <select v-model="hallObject.type">
                            <option disabled selected value="1">Select Program..</option> 
                            <option value="male">MALE</option> 
                            <option value="female">FEMALE</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 
                    <div class="button">
                        <button v-if="!updateButton" @click.prevent="insertHall" class="button__submit" type="submit">Save</button>
                        <button v-if="updateButton"  @click.prevent="updateHall" class="button__submit" type="submit">Update</button>
                        <button @click.prevent="clear" class="button__submit" type="button">cancel</button>
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
                        <th scope="col">Type</th> 
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(hall, k) in allHall" :key="k">
                            <th scope="row"> {{k+1}} </th>
                            <td>{{hall[2]}}</td>
                            <td>{{hall[1].toUpperCase()}}</td> 
                            <td>
                                <a @click.prevent="gotEdit(k)" href="">Edit</a>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    </div>    
</template>

<script>
    import {commonData} from '../../../mixins/commonData.js'
export default {
    mixins: [commonData],
    data() {
        return {
            showForm: false,
            updateButton: false,
            hallObject: {
                name: '',
                type: ''
            },
            hallId: ''
        }
    },
    methods: {
        insertHall(){
            this.$http.post('insert/hall', this.hallObject)
                    .then(response => {
                        this.getAllHall();
                    }, err => {
                        console.log(err);
                    })
            this.hallObject.name = '';
            this.hallObject.type = '';
            this.showForm = false;
            this.updateButton = false
        },
        clear() {
            this.showForm = false;
            this.department.facultyName = '';
            this.department.deptName = '';
            this.department.dAbr = '';
            this.department.dCode = '';

        },
        gotEdit(p){
                let h = this.allHall[p];
                this.hallObject.name = h[2];
                this.hallObject.type = h[1];
                this.hallId = h[0];
               
                this.showForm = true;
                this.updateButton = true;

            },

        updateHall(){
            this.$http.put(`update/hall/${this.hallId}`, this.hallObject)
                    .then(response=> {
                        this.getAllHall();
                    }, err => {
                        console.log(err);
                    })
            this.showForm = false;
            this.updateButton = false;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
