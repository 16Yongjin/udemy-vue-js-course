<template>
<div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ id }}</p>
    <router-link 
        tag="button" 
        :to="link"
        class="btn btn-primary">
        Edit the User
    </router-link>
</div>
</template>

<script>
    export default {
        props: ['id'],
        data() {
            return {
                link: { name: 'editName', 
                    params: { id: this.id }, 
                    query: { 
                        locale: 'en', q: 100 
                    },
                    hash: '#data'  
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            if (true) {
                next();
            } else {
                next(false);
            }
        }
    }
</script>