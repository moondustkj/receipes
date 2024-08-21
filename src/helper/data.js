const filters = [
    {
        id: 1,
        value: 'breakfast',
        label: 'Breakfast'
    }, 
    {
        id: 2,
        value: 'lunch',
        label: 'Lunch'
    }, {
        id: 3,
        value: 'snack',
        label: 'Snack'
    }, {
        id: 4,
        value: 'dinner',
        label: 'Dinner'
    }
];

const recipesList = [
    {
        id: 1,
        img: '/receipes/assets/img1.png',
        title: 'Toast with egg and avocado',
        time: 900,
        ingredients: ['1 egg', '1 avocado', '1 toast', 'seasonings to taste', '1 sunflower oil'],
        isBookmarked: false,
        type: 'breakfast',
        steps: [
            'Take an avocado, cut it in half, remove the pit and scoop out the flesh with a spoon. Mash it with a fork in a bowl and drizzle with lemon juice.',
            'Toast whole grain bread in a toaster or skillet.',
            'Heat pan and put 1tbsp oil. Once the oil is hot break an egg into it and let it cook for 5-10 mins',
            'Spread the avocado on the toasted bread and then place the egg over it, season it with salt and pepper.'
        ]
    },{
        id: 2,
        img: '/receipes/assets/img2.png',
        title: 'Oatmeal with fruits',
        time: 1500,
        ingredients: ['milk', 'oatmeal', 'fruits'],
        isBookmarked: true,
        type: 'breakfast',
        steps: [
            'Step 1 for this recipe',
            'Step 2 for this recipe',
            'Step 3 for this recipe',
            'Step 4 for this recipe',
        ]
    },{
        id: 3,
        img: '/receipes/assets/img3.png',
        title: 'Pancakes',
        time: 2700,
        ingredients: ['1 egg', 'All purpose flour', 'Maple syrup'],
        isBookmarked: false,
        type: 'breakfast',
        steps: [
            'Step 1 for this recipe',
            'Step 2 for this recipe',
            'Step 3 for this recipe',
            'Step 4 for this recipe',
        ]
    },{
        id: 4,
        img: '/receipes/assets/img3.png',
        title: 'Dal Chaawal',
        time: 2700,
        ingredients: ['1 cup Dal', 'Onions', 'Tomatoes'],
        isBookmarked: false,
        type: 'lunch',
        steps: [
            'Step 1 for this recipe',
            'Step 2 for this recipe',
            'Step 3 for this recipe',
            'Step 4 for this recipe',
        ]
    },{
        id: 5,
        img: '/receipes/assets/img3.png',
        title: 'Chicken Curry',
        time: 3000,
        ingredients: ['Curry cut Chicken', 'Onions', 'Spices'],
        isBookmarked: false,
        type: 'lunch',
        steps: [
            'Step 1 for this recipe',
            'Step 2 for this recipe',
            'Step 3 for this recipe',
            'Step 4 for this recipe',
        ]
    },
];

module.exports = {
    filters,
    recipesList
}