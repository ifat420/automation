<template>
    <div class="contariner-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Add New Course</h2>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-6">
                <form> 

                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Course Code</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Course Title</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Course credit</label>
                    </div>  
                      

                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Course Type..</option> 
                            <option>Theory</option> 
                            <option>Laboratory</option> 
                            <option>Thesis/Project</option> 
                            <option>Industrial Tour</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Semester..</option> 
                            <option>1.1</option> 
                            <option>1.2</option> 
                            <option>2.1</option> 
                            <option>2.2</option> 
                            <option>3.1</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Faculty..</option> 
                            <option>Engineering</option> 
                            <option>Biology</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
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
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Program..</option> 
                            <option>BSC</option> 
                            <option>MSC</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div>

                    <div class="group"> 
                        <select>
                            <option disabled selected value="1">Select Session..</option> 
                            <option>2013-14</option> 
                            <option>2014-15</option> 
                            <option>2016-17</option> 
                        </select>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <!-- <label>Select Department</label> -->
                    </div> 

                    
                    
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Teacher Name</label>
                    </div>  
                    <div class="button-1">
                        <span class="button-1__mask"></span>
                        <span class="button-1__text">Submit</span>
                        <span class="button-1__text button-1__text--bis">Submit</span>
                    </div>
                </form>    
            </div>    
        </div>   


    </div>
</template>

<script>
    
</script>