# Grohance Admin Orders Page

This project is a solution to the technical challenge for the Software Engineer position at Grohance. The goal was to design and develop an orders page for the admin panel of Grohance's e-commerce platform, utilizing the WooCommerce REST API to fetch and update orders.

## Live Demo

You can view the live demo of the project [here](https://grohance.vercel.app/).

## Features

- **API Integration**: Utilizes the WooCommerce REST API to fetch and display order details.
- **Order Item Quantity Editing**: Allows admins to edit the quantity of individual order items directly on the page.
- **Automatic Order Total Update**: Updates the order total dynamically based on the changes in item quantities.
- **Pagination**: Displays 10 orders per page, with functionality to navigate through pages.
- **Search and Filter**: Includes search functionality and filtering by order status to enhance usability.
- **User-Friendly Design**: Designed with a focus on clear information hierarchy and an intuitive interface.
- **Error Handling**: Implements proper error handling for API calls and updates.

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making API calls to the WooCommerce REST API.
- **CSS**: For styling the components.
- **WooCommerce REST API**: For fetching and updating order data.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/grohance-admin-orders-page.git
    ```
2. Navigate to the project directory:
    ```bash
    cd grohance-admin-orders-page
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your WooCommerce API credentials:
    ```env
    REACT_APP_API_KEY=your_api_key
    REACT_APP_API_SECRET=your_api_secret
    ```
5. Start the development server:
    ```bash
    npm start
    ```

## Usage

- The orders page fetches and displays a list of orders from the WooCommerce API.
- Admins can edit the quantity of individual order items. The order total updates automatically.
- Pagination controls allow navigation through the list of orders.
- The search bar allows filtering orders by customer name.
- A dropdown menu provides filtering by order status.

## Code Overview

### Components

- **Orders**: The main component that fetches orders and handles pagination.
- **OrderItems**: A component to display and edit individual order items.
- **Pagination**: A component to handle pagination controls.
- **Loader**: A component to show a loading spinner while fetching data.

### API Integration

- **Fetching Orders**: Uses Axios to fetch orders from the WooCommerce REST API.
- **Updating Orders**: Sends updated order details back to the API when quantities are edited.

### State Management

- Uses React's state management to handle the list of orders, current page, and updates effectively.

## Security Considerations

- **Authentication**: Uses secure authentication when interacting with the WooCommerce API.
- **Error Handling**: Manages potential issues gracefully, such as network errors or invalid data inputs.

## Screenshots

![Orders Page](https://res.cloudinary.com/djc5wnfyy/image/upload/v1716545188/m89dvyn6nd35ohqatgap.png)


## Future Enhancements

- Implement additional filters for date range and order amount.
- Enhance the search functionality to include more fields.
- Improve the UI/UX based on user feedback.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please reach out to [salahashraf3@gmail.com].
