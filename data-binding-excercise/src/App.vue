<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Give Me Your All Personel Information</h4>
                        </div>
                        <div class="panel-body">
                            <form  class="form-group">
                                
                            <p>
                                Fisrt Name :  <input type="text" class="form-control" v-model="firstName">
                            </p>
                            <p>
                                Last Name : <input type="text" class="form-control" v-model="lastName">
                            </p>
                            <p>
                                Mail: <input type="email" class="form-control" v-model="email">
                            </p>

                            <p>
                                Password: <input type="password" class="form-control" v-model="password">
                                </p>
                            <p>
                                Store in Database?: <input type="checkbox" v-model="isToStore"> 
                            </p>
                            <button type="submit" @click.prevent="submitted" class="btn btn-lg btn-primary center-block">Submit</button>
                            </form>
                        </div>
                    </div>
                    

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{firstName}} {{lastName}} </p>
                        <p>Mail: {{ email }} </p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{ isToStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            isToStore: false,
            email: '',
            password: '',
            isSubmitted: false
        }
    },
    methods: {
        submitted() {
            this.isSubmitted = true
        }
    }
}
</script>

<style>

</style>
