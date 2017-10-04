<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <br>
                <br>
                <input type="text" class="form-control" v-model="node">
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users" :key="u.uid">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                email: ''
            },
            users: [],
            node: 'data'
        }
    },
    methods: {
        submit() {
            // this.$http.post('data.json', this.user)
            //     .then(response => {
            //         console.log(response);
            //     }, error => {
            //         console.log(error);
            //     });
            // this.resource.save({}, this.user);
            this.resource.saveAlt(this.user);
        },
        fetchData() {
            // this.$http.get('data.json')
            //     .then(response => {
            //             return response.json();
            //     })
            //     .then(data => {
            //         const resultArray = [];
            //         for (let key in data) {
            //             resultArray.push( Object.assign({ uid: key, }, data[key]) );
            //         }
            //         this.users = resultArray;
            //     })
            this.resource.getData({ node: this.node })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(Object.assign({ uid: key, }, data[key]));
                    }
                    this.users = resultArray;
                })

        }
    },
    created() {
        const customActions = {
            saveAlt: { method: 'POST', url: 'alternatve.json' },
            getData: { method: 'GET' }
        };
        this.resource = this.$resource('{node}.json', {}, customActions);
    }
}
</script>

<style>

/* Small phones to Small tablets: from 481 to 767px */
@media only screen and (max-width: 767px) {

    	/* Force table to not be like tables anymore */
	#no-more-tables table, 
	#no-more-tables thead, 
	#no-more-tables tbody, 
	#no-more-tables th, 
	#no-more-tables td, 
	#no-more-tables tr { 
		display: block; 
	}
 
	/* Hide table headers (but not display: none;, for accessibility) */
	#no-more-tables thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
 
	#no-more-tables tr { 
		border: 1px solid #ccc;
		margin-bottom: 10px;
	}
 
	#no-more-tables td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 25%; 
		white-space: normal;
		text-align:left;
	}
 
	#no-more-tables td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 20%;
		left: 9px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
		text-align:left;
		font-weight: bold;
	}
 
	/*
	Label the data
	*/
	#no-more-tables td:before { content: attr(data-title); }
}

.imageSize {
    width: 200px;
}

</style>
