import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
// import Header from "./src/header/header";
import RestaurantBody from "./src/components/body/body";
import { Footer } from "./src/components/footer/footer";
import Header from "./src/components/header/header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import { Error } from "./src/components/error";
import RestaurantMenuPage from "./src/components/body/RestaurantMenuPage";

const AppContainer = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/about"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <RestaurantBody />
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        )
        // element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuPage />
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  }
  // {
  //   path: "/about",
  //   element: <About />
  // },
  // {
  //   path: "/contact", element: <Contact/>
  // }
]);
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDom.createRoot(rootElement);
  // root.render(<AppContainer />);
  root.render(<RouterProvider router={appRouter} />);
}
