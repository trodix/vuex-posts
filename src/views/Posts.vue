<template>
    <v-container>
        <v-layout>
            <h1>Posts</h1>
        </v-layout>
        <v-layout>
            <PostAdd/>
        </v-layout>
        <v-layout>
            <PostList/>
        </v-layout>
    </v-container>
</template>

<script>
import PostAdd from '@/components/posts/PostAdd.vue';
import PostList from '@/components/posts/PostList.vue';

export default {
    components: {
        PostAdd,
        PostList
    },
    data() {
        return {
            // ...
        }
    }
}
</script>

<style>

</style>
