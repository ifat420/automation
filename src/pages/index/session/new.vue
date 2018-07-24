<template>
    <div class="contariner-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Session</h2>
            </div>
        </div>

        <div class="row mt-5">
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
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Session</label>
                    </div>  
                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Academic Year</label>
                    </div>  
                    <div class="button">
                        <button class="button__submit" type="submit">submit</button>
                    </div>
                </form>    
            </div>    
        </div>   


    </div>
</template>

<script>
    
</script>