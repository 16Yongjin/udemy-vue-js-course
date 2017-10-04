<template>
    <div>
        <p>name : {{ name }}</p>
        <p>email : {{ email }}</p>
    </div>

</template>

<script>
import firebase from 'firebase'


export default {
    data() {
        return {
            name: '',
            email: '',
            photoUrl: '',
            emailVerified: '',
            uid: ''
        }
    },
    mounted() {
        var user = firebase.auth().currentUser;
        if (user != null) {
            this.name = user.displayName;
            this.email = user.email;
            this.photoUrl = user.photoURL;
            this.emailVerified = user.emailVerified;
            this.uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
        }
    }
}
</script>

<style scoped>

</style>