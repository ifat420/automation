export const commonData = {
    data(){
        return {
            allFaculty: [],
            allDept: [],
            distinctSession: [],
            allHall: []
        }
    },
    methods: {
        getAllFaculty(){
            this.$http.get('get/faculty')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.allFaculty = data; 
            })
        },
        getAllDepartment(){
            this.$http.get('get/department')
                .then(response => {
                    return response.json();
                    
                })
                .then(data => {
                    this.allDept = data;
                    
                })
        },
        getAlldistinctSession(){
            this.$http.get('get/session/distinct')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.distinctSession = data; 
            })
        },
        getAllHall(){
            this.$http.get('get/hall')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.allHall = data; 
            })
        }
    },
    mounted() {
        this.getAllFaculty();
        this.getAllDepartment();
        this.getAlldistinctSession();
        this.getAllHall();

    }
}