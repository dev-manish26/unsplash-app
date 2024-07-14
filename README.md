
# Image Search App


The aim of this project is to create a simple web application that allows users to search for images using the Unsplash API. The application displays images along with their author name, likes, and other statistics. This project leverages Next.js for server-side rendering and Material-UI for UI components, ensuring a smooth and modern user experience.

## FEATURES OF THIS PROJECT

- **Image Search**: Users can search for images by entering a query.
- **Image Display**: The application displays a grid of images based on the search query.
- **Image Details**: Each image card shows the author name, number of likes, and a description.
- **Responsive Design**: The layout is responsive and adapts to different screen sizes.
- **Simple UI**: Clean and simple design using Material-UI.

## TECH STACK

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for building responsive, modern web apps.
- **Unsplash API**: A RESTful API for accessing a large collection of high-resolution photos.
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.


## REQUIREMENTS FOR THIS PROJECT

To run this project, you'll need to have the following installed:

- **Node.js** and **npm** - https://nodejs.org/en/download/package-manager
 
- **Unsplash API Access Key**- You can get this by creating an account on https://unsplash.com/developers and registering for an API key 
## HOW TO RUN IT LOCALLY

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dev-manish26/unsplash-app.git
   cd unsplash-app
   ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Set Up The Environment Variables**: 
Create a .env.local file in the root directory and add your Unsplash API access key:
```bash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```
4. **Run the development server**:
```bash
npm run dev
```
5. **Open the application in your browser**:
Go to http://localhost:3000 to see the application running locally.
## Acknowledgements

 - [Unsplash API Documentations](https://unsplash.com/documentation)
 - [Nextjs Documentations](https://nextjs.org/docs)

