import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Admin from "./pages/admin/Admin";
import Home from "./pages/user/Home";
import Main from "./pages/user/Main";
import Categories from "./pages/admin/categories/Categories";
import CreateCategory from "./pages/admin/categories/CreateCategory";
import Category from "./pages/admin/categories/Category";
import CreateSubCategory from "./pages/admin/subCategories/CreateSubCategory";
import OutletForAll from "./components/admin/OutletForAll";
import Products from "./pages/admin/products/Products";
import Product from "./pages/admin/products/Product";
import CreateProduct from "./pages/admin/products/CreateProduct";
import EditCategory from "./pages/admin/categories/EditCategory";
import EditSubCategory from "./pages/admin/subCategories/EditSubCategory";
import EditProduct from "./pages/admin/products/EditProduct";
import SubCategoryUser from "./pages/user/subCategory/SubCategoryUser";
import SubCategory from "./pages/admin/subCategories/SubCategory";
import ProductsUser from "./pages/user/Products/ProductsUser";
import ProductDetailsUser from "./pages/user/Products/ProductDetailsUser";
import About from "./pages/user/About";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import Login from "./pages/Login";
import Testimonials from "./pages/admin/testimonial/Testimonials";
import CreateTestimonial from "./pages/admin/testimonial/CreateTestimonial";
import TestimonialDetails from "./pages/admin/testimonial/TestimonialDetails";
import EditTestimonial from "./pages/admin/testimonial/EditTestimonial";
import AwardsByUser from "./pages/user/Awards";
import Awards from "./pages/admin/awards/Awards";
import CreateAward from "./pages/admin/awards/CreateAward";
import EditAward from "./pages/admin/awards/EditAward";
import Award from "./pages/admin/awards/Award";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "awards",
        element: <AwardsByUser />,
      },
      {
        path: "category",
        children: [
          {
            index: true,
            element: <Categories />,
          },
        ],
      },

      {
        path: "subcategory/:id",
        children: [
          {
            index: true,
            element: <SubCategoryUser />,
          },
        ],
      },

      {
        path: "products/:id",
        children: [
          {
            index: true,
            element: <ProductsUser />,
          },
          {
            path: "details",
            element: <ProductDetailsUser />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,

    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "testimonial",
        element: <OutletForAll />,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Testimonials />
              </ProtectedRoute>
            ),
          },
          {
            path: "create",
            element: (
              <ProtectedRoute>
                <CreateTestimonial />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id",
            element: (
              <ProtectedRoute>
                <TestimonialDetails />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/edit",
            element: (
              <ProtectedRoute>
                <EditTestimonial />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "award",
        element: <OutletForAll />,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Awards />
              </ProtectedRoute>
            ),
          },
          {
            path: "create",
            element: (
              <ProtectedRoute>
                <CreateAward />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id",
            element: (
              <ProtectedRoute>
                <Award />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/edit",
            element: (
              <ProtectedRoute>
                <EditAward />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "categories",
        element: <OutletForAll />,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            ),
          },
          {
            path: "create",
            element: (
              <ProtectedRoute>
                <CreateCategory />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id",
            element: (
              <ProtectedRoute>
                <Category />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/add",
            element: (
              <ProtectedRoute>
                <CreateSubCategory />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/edit",
            element: (
              <ProtectedRoute>
                <EditCategory />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/sub",
            element: (
              <ProtectedRoute>
                <SubCategory />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/sub/add",
            element: (
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            ),
          },
          {
            path: ":id/sub/edit",
            element: (
              <ProtectedRoute>
                <EditSubCategory />
              </ProtectedRoute>
            ),
          },
        ],
      },
      // {
      //   path: "subcategories",
      //   element: <OutletForAll />,
      //   children: [
      //     {
      //       index: true,
      //       element: <SubCategories />,
      //     },
      //     {
      //       path: "create",
      //       element: <CreateSubCategory />,
      //     },
      //     {
      //       path: ":id",
      //       element: <SubCategory />,
      //     },
      //   ],
      // },

      {
        path: "product",
        element: <OutletForAll />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          // {
          //   path: "create",
          //   element: <CreateProduct />,
          // },
          {
            path: ":id",
            element: <Product />,
          },
          {
            path: ":id/edit",
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
]);
 
function App() {
  return (
      <>
        <RouterProvider router={routes} />
      </>
  );
}

export default App;
