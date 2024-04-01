import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', () => {

    const inputText = ref('');
    const list = ref([
        {
            name: "Item 1"
        },
        {
            name: "Item 2"
        },
        {
            name: "Item 3"
        },
        {
            name: "Item 4"
        }
    ]);

    const handleInput = (e) => {
        if (e.target.value !== '') {
            list.value.push({name: e.target.value});
        }
        // else {
        //     alert('Please enter a non-empty value for the todo item.');
        // }
        e.target.value = ''
    }

    const handleAddButton = (e) => {
        handleInput(e)
    }

    const handleEditItem = () => {
        
    }

    const handleDeleteItem = () => {
        
    }

    return { list, handleInput, handleAddButton, handleEditItem, handleDeleteItem }
})
