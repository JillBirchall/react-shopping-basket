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

## Photograph Attributions

All photographs used in this project are taken from [Pixabay](https://pixabay.com/). These photos were taken by the following Pixabay users:

- Strawberry Cake, Tiramisu, Churros: [Daria-Yakovleva](https://pixabay.com/users/daria-yakovleva-3938704/)
- Cupcakes: [LAWJR](https://pixabay.com/users/lawjr-4448871/)
- Macaroons, Blueberry Cake, Raspberry Tart: [Pexels](https://pixabay.com/users/pexels-2286921/)
- Wild Berry Cupcake: [RitaE](https://pixabay.com/users/ritae-19628/)
- Cream Puff: [la-fontaine](http://pixabay.com/users/la-fontaine-22289/)
- Ring Doughnuts: [dinesh220185](https://pixabay.com/users/dinesh220185-5663100/)
- Oreo Doughnut, Strawberry Doughnut: [dinar-aulia](https://pixabay.com/users/dinar_aulia-17727446/)
- Background Image: [JillWellington](https://pixabay.com/users/jillwellington-334088/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
