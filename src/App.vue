<script lang="ts" setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';


const updateBtn = async(value: string) => {
  if (value == 'style') {
    console.log(value);
  }
}
const $q = useQuasar();
const mode = ref($q.dark.isActive);

$q.dark.set(false);

const toggleDark = () => {
  $q.dark.toggle();
  mode.value = $q.dark.isActive;
}
</script>

<template>
  <div>$q.dark = {{ mode }}</div>
  <q-btn 
   color="white"
   text-color="pink"
   label="Dark Mode"
   @click="toggleDark()"
   />
</template>

