<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <h2 class="headings">Department</h2>
            </div>
            <div class="col-6 text-md-right" v-if="!showForm">
                <div style="position: relative">
                    <button class="ca-btn" type="button" @click.prevent="showForm = true">Add Department</button>    
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
                        <!-- <label>Select Department</label> -->
                    </div> 

                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Department Name</label>
                    </div>  

                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Department Abbreviation</label>
                    </div>  

                    <div class="group">
                        <input type="text" required="required"/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Department Code</label>
                    </div>  

                    <div class="button">
                        <button class="button__submit" type="submit">submit</button>
                        <button class="button__submit" type="button" @click.prevent="showForm = false">cancel</button>
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
            </div>
        </div>

         <div class="row">
            <div class="col">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Abbrebeation</th>
                        <th scope="col">Code</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, k) in 4" :key="k">
                            <th scope="row"> {{i}} </th>
                            <td>Computer Science and Engineering</td>
                            <td>CSE</td>
                            <td>01</td>
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
