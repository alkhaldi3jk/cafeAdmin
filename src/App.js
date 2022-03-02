import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import AdminLogin from "./pages/login/AdminLogin";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode? "dark" : "light"
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "250vh" }}>
          <Topbar check={darkMode} change={() => setDarkMode(!darkMode)}/>
          <div className="container">
            <Sidebar />
            <UserList />

            <Routes>
              <Route exact path="/home" element={<Home />} />

              <Route path="/users" element={<UserList />} />

              <Route exact path="/AdminLogin" element={<AdminLogin />} />


              <Route path="/user/:userId" element={<User />} />

              <Route path="/newUser" element={<NewUser />} />

              <Route path="/products" element={<ProductList />} />

              <Route path="/product/:productId" element={<Product />} />

              <Route path="/newproduct" element={<NewProduct />} />
            </Routes>
          </div>
          <div></div>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
