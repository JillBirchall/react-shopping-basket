# React Shopping Basket

A fictional cake themed shopping website with a shopping basket. Each item features an 'Add To Basket' button which converts into quantity adjustment buttons once the item has been added to the basket.

The shopping basket icon displays the number of items in the basket, and can be toggled by clicking it. The shopping basket displays the subtotal for each item, as well as the total. The quantity can be increased and decreased, and the item removed from the basket.

This is not intended to be a full shopping website, it is simply a single page of items to demonstrate the shopping basket functionality.

I created this project to further practice using the useContext and useReducer hooks in React.

## Issues I encountered

- Rounding the currency amounts to 2 decimal places. I had alot of trouble rounding the subtotals and totals to 2 decimal places, and after some research decided to use the JavaScript Internationalization API to solve this problem.
- Creating a sliding menu in CSS. I tried a few different methods to achieve this (including animations), and in the end decided on using translate and transitions.

## Future Improvements

- Add a fade-out animation when the shopping basket is closed.

## Photograph and Icon Attributions

All photographs used in this project are taken from [Pixabay](https://pixabay.com/). These photos were taken by the following Pixabay users:

- Strawberry Cake, Tiramisu, Churros: [Daria-Yakovleva](https://pixabay.com/users/daria-yakovleva-3938704/)
- Cupcakes: [LAWJR](https://pixabay.com/users/lawjr-4448871/)
- Macaroons, Blueberry Cake, Raspberry Tart: [Pexels](https://pixabay.com/users/pexels-2286921/)
- Wild Berry Cupcake: [RitaE](https://pixabay.com/users/ritae-19628/)
- Cream Puff: [la-fontaine](http://pixabay.com/users/la-fontaine-22289/)
- Ring Doughnuts: [dinesh220185](https://pixabay.com/users/dinesh220185-5663100/)
- Oreo Doughnut, Strawberry Doughnut: [dinar-aulia](https://pixabay.com/users/dinar_aulia-17727446/)
- Background Image: [JillWellington](https://pixabay.com/users/jillwellington-334088/)

The cake icon used for the shopping basket is taken from Google Material Design Icons.
