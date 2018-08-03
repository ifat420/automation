<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Staff</h2>    
            </div>    
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add Staff</button>    
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
                        <label>Staff Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Position</label>
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
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
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
            filter: [
                {
                    title: 'Faculty',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        }
                    ]
                },
                {
                    title: 'Department',
                    values: [
                        {
                            name: 'All',
                            value: 'all'
                        }
                    ]
                } 
            ],
            select: ['all', 'all']
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
