
# B-Shops

![favicon](https://user-images.githubusercontent.com/38637651/83689605-f2894480-a5b4-11ea-82f5-bfd2ab2d0265.jpg)

### B-Shops is an interactive E-commerce platform for buyers. 

## [Live site here](https://bshops.herokuapp.com/)


## Technologies
 Firebase, Stripe, Hooks, Context API, Express, OAuth, Axios, GraphQL, HTML5, Nodejs and CSS3.
* React / Redux
* Firebase
* Hooks
* Context API
* Express
* JavaScript
* HTML
* CSS
* Heroku
* OAuth
* Axios
* GraphQL
* Nodejs

## Features
* User authentication
* User profile feed with user's information and boards, pins.
* Create and edit boards
* Upload and delete pins
* Home feed with responsive masonry layout
* Modal forms

<img width="1029" alt="edituser" src="https://user-images.githubusercontent.com/38637651/80107397-ddd67d00-852f-11ea-9932-90f3b66d7f11.png">

## Modals
The majority the forms on Binterested are implemented using modals. Furthermore, the rendering of the login and signup modals were modified to prevent closing of the modal in the splash page and to display only one form at all times.
<img width="867" alt="modal" src="https://user-images.githubusercontent.com/38637651/80107375-d616d880-852f-11ea-8e88-ed822c0d2726.png">

```javascript
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal.modal) {
    // switch (modal) {
    case "Log in":
      component = <LoginFormContainer />;
      break;
    case "Sign up":
      component = <SignupFormContainer />;
      break;
    case "Create Board":
      component = <CreateBoardFormContainer />;
      break;
    case "Create Pin":
      component = <CreatePinFormContainer />;
      break;
    case "Edit Board":
      component = <EditBoardFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

```

## Responsive CSS Masonry Layout
CSS grid was used to implement the mosaic-like appearance of a Pinterest feed. Image sizes and columns are adjusted based on the size of the screen, allowing for a more visually appealing user interface.

<img width="1095" alt="reponsivecss" src="https://user-images.githubusercontent.com/38637651/80107101-89330200-852f-11ea-8598-adc8b16ed72b.png">

## Search Function
<img width="1317" alt="Screen Shot 2020-04-23 at 7 00 41 AM" src="https://user-images.githubusercontent.com/38637651/80107628-2d1cad80-8530-11ea-84ff-f93ad5772a2a.png">

## Future Implementations
* Saving pin
* Infinity scrolling







* Utilized Redux unidirectional data flow, memorized selector reselect and redux-thunk with asynchronous
JavaScript to provide a seamless user experience across all React components
* Applied CSS media queries, and flexbox functionality to enhance responsiveness across various devices
* Implemented a secure shopping cart, checkout functionality and credit/debit card payment system with
Stripe technology
* Built register and login system besides Google login service
###### Live [https://bshops.herokuapp.com/](url)



![Screen Shot 2020-05-29 at 12 24 06 PM](https://user-images.githubusercontent.com/38637651/83287595-8f0fa900-a1a7-11ea-97bb-bcbc27630e5f.png)

<img width="1319" alt="Screen Shot 2020-05-22 at 8 38 02 PM" src="https://user-images.githubusercontent.com/38637651/82719002-318dd080-9c6c-11ea-9246-8223b6714570.png">

![Screen Shot 2020-05-23 at 4 29 31 PM](https://user-images.githubusercontent.com/38637651/82740982-538e5e00-9d13-11ea-9caa-65590130e3a3.png)

![Screen Shot 2020-05-25 at 7 49 05 PM](https://user-images.githubusercontent.com/38637651/82850165-d7d21400-9ec0-11ea-9bb1-7ae4153a9c93.png)

![Screen Shot 2020-05-29 at 12 07 12 AM](https://user-images.githubusercontent.com/38637651/83223793-6fde3080-a141-11ea-95fa-9753f3f977d9.png)


