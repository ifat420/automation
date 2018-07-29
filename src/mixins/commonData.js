export const commonData = {
    data(){
        return {
            allFaculty: []
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
        }
    },
    mounted() {
        this.getAllFaculty();
    }
}