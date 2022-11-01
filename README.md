# FabIndia-Clone

# Welcome :wave:

### About Fab Indiastore:

>Fabindia is an Indian chain store retailing garments, furnishings, fabrics and ethnic products handmade by craftspeople across rural India.

# About this project ⏬


## Tech Stack :- 

- #### React
- #### Redux
- #### MongoDB
- #### ChakraUI


## Pages & Features :point_down:


- `Landing Page`: Navbars, categories and footer section.
- `Sign-Up Page`: User details stored to MongoDb database and OTP email sent for verification.
- `Sign-In Page`: User confirmation to check whether user email and password match with details existing in the database.
- `Product Page`: when user sign in with their respective email id's and  page it will ridirect to products page where user can select or add to cart for further process.
- `Cart Page`: User can add products to this page or remove products added in the cart.

- `Payment Page`: Users can add their payment details and also avail for discount using promo codes and the payment is done through RazorPay gateway.
- `Order Processing Page` : setTimout function is used to emulate original payment flow.
- `Additional Features` : Kept the branding, fonts, colors,styling and favicon and titles consistent throughtout the whole website to tried building atleast mvp of site .Not exact but tried  building same features as in original site.
 
## How To Use ✅

- At First user has to click on login on landing page. User have to signup if he does not have an account. In signup page user has to  fill  all the fields in the form.
- After signup user has to login with same details, otherwise it will show invalid credentials.After login user will be redirected to home page.
- User can see shop by categories and he /she can clik on any category as per his/her requirement and it will be redirected to particular category page.
- User can see the products, and clicking on particular product which will be redirected to order page.
- In order page user can see the details of that particular product and also the add to cart button.After cliking the add to cart button the cart value gets updated which is on top nav bar.
- If he clicks on cart then he will be redirected to cart page where he can see products which he has added to cart.If he wants to remove any product he can click on remove button which will remove the product. 
- Then he will proceed to payment page ,where he has to fill all his personal details for delivering the product.
- After filling all the details including card details then clik on pay button. It will take some time for payment.
- After payment has completed successfully then he will be redirected to home page.
