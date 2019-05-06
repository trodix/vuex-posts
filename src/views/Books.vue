<template>
    <v-container>
        <v-layout>
            <h1>Books</h1>
        </v-layout>
        <v-layout>
            <BookAdd/>
        </v-layout>
        <v-layout>
            <BookList/>
        </v-layout>
    </v-container>
</template>

<script>
import BookAdd from '@/components/books/BookAdd.vue';
import BookList from '@/components/books/BookList.vue';

export default {
    components: {
        BookAdd,
        BookList
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
