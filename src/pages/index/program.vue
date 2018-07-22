<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Program</h2>    
            </div>    
            <div class="col-6 text-md-right">
                <div style="position: relative">
                    <button class="ca-btn">Add New</button>    
                </div>
            </div>    
        </div>
        <div class="row mt-5">
            <div class="col-6">
                <form> 
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
                        <!-- <label>Select Department</label> -->
                    </div> 
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Program Name</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Program Abbrebeation</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Degree</label>
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
                        <th scope="col">Abbrebeation</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, k) in 6" :key="k">
                            <th scope="row"> {{i}} </th>
                            <td>Bachelor of Science</td>
                            <td>BSc</td>
                            <td>Anonymous</td>
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
    
}
</script>

<style lang="scss" scoped>

</style>
