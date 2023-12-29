 
<template>
    <div>
  
      <p>Date: {{ dates }}</p>
      <div>
        Add Date:
        <input type="text" @change="handleInputChange" />
        <br />
        Add Month:
        <input type="text" @change="handleInputChange" />
        <br />
        <button @click="handleClick">Calculate Date</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue';
  import useDate from "./composables/useDate";
  const { date, getDay, getMonth, addDay, addMonth } = useDate();
  
  const daysToAdd = ref("");
  const monthsToAdd = ref("");
  // const heading = ref("Current Date");
  
   const dates = ref(date.toString());

  // const dates = ref(JSON.stringify(date));
  
  const handleInputChange = (event) => {
    let { name, value } = event.target
    if (name === "day") {
      if (!value) value = "0";
      daysToAdd.value = parseInt(value);
    } else if (name === "month") {
      if (!value) value = "0";
      monthsToAdd.value = parseInt(value);
    }
  };
  
  const handleAddDaysAndMonths = () => {
    const newDate = addMonth(monthsToAdd.value, addDay(daysToAdd.value, date));
    return newDate;
  };
  
  const handleClick = () => {
  const result = handleAddDaysAndMonths();

  if (result instanceof Date) {
    dates.value = result.toLocaleDateString();
  } else {
    console.error("handleAddDaysAndMonths() did not return a valid date");
  }
};

  
  // const handleClick = () => {
  //   dates.value = handleAddDaysAndMonths();
  // };
  </script>
  
  <style scoped></style>
   


    

    