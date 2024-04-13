import { ref } from "vue";
import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', () => {

    const inputText = ref('');
    const selectedCategoryList = ref([])
    const isCategoryClicked = ref(false)
    const categoryIndex = ref(null)
    const list = ref([
        {
            category: "Groceries",
            items: [
              { name: "Milk", status: true },
              { name: "Butter", status: false },
              { name: "Sugar", status: true }
            ]
        },
        {
            category: "Snacks",
            items: [
              { name: "Chips", status: false },
              { name: "Marabou", status: true }
            ]
        },
        {
            category: "Household Essentials",
            items: [
                { name: "Toilet Paper", status: true },
                { name: "Dish Soap", status: false },
                { name: "Trash Bags", status: true }
            ]
        },
        {
            category: "Personal Care",
            items: [
                { name: "Shampoo", status: true },
                { name: "Toothpaste", status: true },
                { name: "Body Wash", status: false }
            ]
        },
        {
            category: "Produce",
            items: [
                { name: "Apples", status: true },
                { name: "Bananas", status: true },
                { name: "Lettuce", status: false }
            ]
        },
        {
            category: "Frozen Foods",
            items: [
                { name: "Frozen Pizza", status: true },
                { name: "Ice Cream", status: false },
                { name: "Frozen Vegetables", status: true }
            ]
        },
        {
            category: "Beverages",
            items: [
                { name: "Water Bottles", status: true },
                { name: "Soda", status: false },
                { name: "Tea Bags", status: true }
            ]
        },
        {
            category: "Bakery",
            items: [
                { name: "Bread", status: true },
                { name: "Bagels", status: false },
                { name: "Croissants", status: true }
            ]
        },
        {
            category: "Canned Goods",
            items: [
                { name: "Soup", status: true },
                { name: "Beans", status: false },
                { name: "Tomatoes", status: true }
            ]
        },
        {
            category: "Meat",
            items: [
                { name: "Chicken", status: true },
                { name: "Beef", status: false },
                { name: "Fish", status: true }
            ]
        },
        {
            category: "Condiments",
            items: [
                { name: "Ketchup", status: true },
                { name: "Mustard", status: false },
                { name: "Mayonnaise", status: true }
            ]
        },
        {
            category: "Cleaning Supplies",
            items: [
                { name: "All-Purpose Cleaner", status: true },
                { name: "Laundry Detergent", status: false },
                { name: "Bleach", status: true }
            ]
        },
        {
            category: "Office Supplies",
            items: [
                { name: "Printer Paper", status: true },
                { name: "Pens", status: false },
                { name: "Notebooks", status: true }
            ]
        }
    ]);

    //Todo redo and refactoring list:
    // {
    //     "categories": [
    //       {
    //         "id": 1,
    //         "name": "Work",
    //         "items": [
    //           { "id": 1, "name": "Finish report", "status": false },
    //           { "id": 2, "name": "Prepare presentation", "status": true },
    //           { "id": 3, "name": "Schedule meeting", "status": false },
    //           { "id": 4, "name": "Send emails", "status": true },
    //           { "id": 5, "name": "Review code", "status": false }
    //         ]
    //       },
    //       {
    //         "id": 2,
    //         "name": "Personal",
    //         "items": [
    //           { "id": 6, "name": "Go for a run", "status": true },
    //           { "id": 7, "name": "Read a book", "status": false },
    //           { "id": 8, "name": "Call mom", "status": false },
    //           { "id": 9, "name": "Cook dinner", "status": true },
    //           { "id": 10, "name": "Watch a movie", "status": false }
    //         ]
    //       }
    //     ]
    //   }

    const selectedCategory = (index) => {
        if(list.value != null && list.value.length > 0) {
            selectedCategoryList.value = list.value[index].items;
            isCategoryClicked.value = true
            categoryIndex.value = index
        }
    }

    // cons handleAddCategory = () {

    // }


    const handleInput = () => {
        if (inputText.value !== '') {
            inputText.value = inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1);
            list.value[categoryIndex.value].items.push({name: inputText.value});
            console.log(inputText.value)
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

    return { inputText, list, selectedCategoryList, isCategoryClicked, handleInput, handleAddButton, handleEditItem, handleDeleteItem, scrollTo, selectedCategory }
})
