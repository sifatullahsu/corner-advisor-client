import AddServicePage from "../pages/AddServicePage";
import BlogPage from "../pages/BlogPage";
import EditReview from "../pages/EditReview";
import LoginPage from "../pages/LoginPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import RegisterPage from "../pages/RegisterPage";
import ServicesPage from "../pages/ServicesPage";
import SingleServicesPage from "../pages/SingleServicesPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: HomePage } = require("../pages/HomePage");

export const route = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/services',
        element: <ServicesPage></ServicesPage>
      },
      {
        path: '/services/:id',
        element: <SingleServicesPage></SingleServicesPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/blog',
        element: <BlogPage></BlogPage>
      },
      {
        path: '/my-reviews',
        element: <MyReviewsPage></MyReviewsPage>
      },
      {
        path: '/my-reviews/:id',
        element: <EditReview></EditReview>
      },
      {
        path: '/add-service',
        element: <AddServicePage></AddServicePage>
      }
    ]
  }
]);