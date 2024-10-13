<script setup lang="ts">
import { ref } from 'vue';
import Person from './modules/Person'; 

const entries = ref<Person[]>([new Person('', '', '')]);


function addEntry() {
  const lastEntry = entries.value[entries.value.length - 1];
  
  if(!lastEntry.firstname.trim() || !lastEntry.lastname.trim() || !lastEntry.birthday.trim()){
  alert("Please fill out all of the fields");
  return;
  }

  entries.value.push(new Person('', '', ''));

}

function removeEntry(index: number){
  entries.value.splice(index, 1);
}
</script>

<template>
  <div>
    <h1>Person Entries</h1>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in entries" :key="index">
          <td><input type="text" v-model="entry.firstname"></td>
          <td><input type="text" v-model="entry.lastname"></td>
          <td><input type="text" v-model="entry.birthday"></td>
          
          <button @click="removeEntry(index)">Remove Entry</button>
        </tr>
      </tbody>
    </table>
    <button @click="addEntry">Add Entry</button>
  </div>
</template>

<style scoped>

</style>
