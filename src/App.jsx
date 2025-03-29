import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import StudentForm from "./pages/StudentForm";
import StudentSignUp from "./pages/StudentSignUp";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* navbar&footer */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route>
          <Route path="/studentform" element={<StudentForm />} />
          <Route path="/studentsignup" element={<StudentSignUp />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={myRoute} />;
};

export default App;
