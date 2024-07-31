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

const receipesList = [
    {
        id: 1,
        img: 'assets/img1.png',
        title: 'Toast with egg and avocado',
        time: 900,
        ingredients: ['1 egg', '1 avocado', '1 toast'],
        isBookmarked: false,
        type: 'breakfast'
    },{
        id: 2,
        img: '/assets/img2.png',
        title: 'Oatmeal with fruits',
        time: 1500,
        ingredients: ['milk', 'oatmeal', 'fruits'],
        isBookmarked: true,
        type: 'breakfast'
    },{
        id: 3,
        img: '/assets/img3.png',
        title: 'Pancakes',
        time: 2700,
        ingredients: ['1 egg', 'All purpose flour', 'Maple syrup'],
        isBookmarked: false,
        type: 'breakfast'
    },{
        id: 4,
        img: '/assets/img3.png',
        title: 'Dal Chaawal',
        time: 2700,
        ingredients: ['1 cup Dal', 'Onions', 'Tomatoes'],
        isBookmarked: false,
        type: 'lunch'
    },{
        id: 5,
        img: '/assets/img3.png',
        title: 'Chicken Curry',
        time: 3000,
        ingredients: ['Curry cut Chicken', 'Onions', 'Spices'],
        isBookmarked: false,
        type: 'lunch'
    },
];

module.exports = {
    filters,
    receipesList
}