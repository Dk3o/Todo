import { ref } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', () => {

    const inputText = ref('');
    const list = ref([
        {
            name: "Item 1",
            status: true
        },
        {
            name: "Item 2",
            status: false
        },
        {
            name: "Item 3",
            status: true
        },
        {
            name: "Item 4",
            status: false
        }
    ]);


    const handleInput = () => {
        if (inputText.value !== '') {
            list.value.push({name: inputText.value});
        }

        inputText.value = ''
    }

    const handleAddButton = () => {
        handleInput();
      }

    const handleEditItem = () => {

    }

    const handleDeleteItem = () => {

    }

    return { inputText, list, handleInput, handleAddButton, handleEditItem, handleDeleteItem, scrollTo }
})
