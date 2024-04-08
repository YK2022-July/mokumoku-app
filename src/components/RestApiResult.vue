<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import getRepositories from '../repositories/RepositoryFactory'
import type { Events } from '@/models/Events';

const results = ref<Events | null>()

onBeforeMount(() => {
    const EventsRepository = getRepositories().events;
    EventsRepository.getTopFive().then(res => results.value = res.data)
})

</script>

<template>
    <table>
        <thead>
            <tr>
                <th>タイトル</th>
                <th>場所</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in results?.result.records">
                <td>{{ item.title }}</td>
                <td>{{ item.place.slice(0,20) }}</td>
            </tr>
        </tbody>
    </table>
</template>