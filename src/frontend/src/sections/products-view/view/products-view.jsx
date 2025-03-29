"use client";

import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {paths} from "../../../routes/paths";
import {ProductTable} from "../../../components/productTable/productTable";
import {DashboardContent} from "../../../layouts/dashboard";
import {useEffect, useState} from "react";
import axios, {endpoints} from "../../../utils/axios";
import {toast} from "../../../components/snackbar";


export function ProductsView({userId}) {
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => { //fetch user products
      try {
        const response = await axios.get(endpoints.products.getProductsById(userId));
        const updatedProducts = response.data.map(product => ({
          ...product,
          content: product.content ? `data:image/png;base64,${product.content}` : product.content
        }));
        setProducts(updatedProducts);

      } catch (error) {
        toast.error("Failed to fetch links");
      }
    };
    const fetchProfileDetails = async () => {
      try {
        const response = await axios.get(endpoints.users.getUserById(userId));
        setProfile(response.data);
      } catch (error) {
        toast.error("Failed to fetch profile details");
      }
    }
    if (userId) {
      fetchProducts();
      fetchProfileDetails();
    }
  }, [userId]);

  return (
    <DashboardContent>
      <ProductTable products={products} profile={profile}/>
      <Stack sx={{mt: 3, textAlign: "center"}}>
        <Typography variant="body2" sx={{color: "text.secondary", fontSize: 14}}>
          Want to create your own Product Page?
        </Typography>
        <Link href={paths.dashboard.root} sx={{
          fontSize: 14,
          fontWeight: 600,
          color: "primary.main",
          textDecoration: "none",
          '&:hover': {textDecoration: "underline"}
        }}>
          Click here
        </Link>
      </Stack>
    </DashboardContent>
  );
}
