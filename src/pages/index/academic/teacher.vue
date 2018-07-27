<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Teachers</h2>    
            </div>    
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add Teacher</button>    
                </div>
            </div>    
        </div>
        <div class="row" v-if="showForm">
            <div class="col-6">
                <form>  
                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Faculty..</option> 
                            <option>Engineering</option> 
                            <option>Biology</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div>  
                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Department..</option> 
                            <option>Computer Science and Technology</option> 
                            <option>Department</option> 
                            <option>Computer Science and Technology</option> 
                            <option>Department</option> 
                            <option>Computer Science and Technology</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span> 
                    </div> 
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Teacher Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Teacher Designation</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Phone Number</label>
                    </div>
                    <div class="button">
                        <button class="button__submit" type="submit">submit</button>
                        <button @click="showForm = false" class="button__submit" type="button">cancel</button>
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
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Faculty</th>
                        <th scope="col">Department</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, k) in 6" :key="k">
                            <th scope="row"> {{i}} </th>
                            <td>John Doe</td>
                            <td>Null</td>
                            <td>jhondoe@gmail.com</td>
                            <td>+880171896245</td>
                            <td>Engineering</td>
                            <td>CSE</td>
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
export default {
    data() {
        return {
            showForm: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
