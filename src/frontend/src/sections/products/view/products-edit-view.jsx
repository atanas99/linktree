"use client";

import {useEffect, useState} from "react";
import {Box, Button, Card, Typography} from "@mui/material";
import {DashboardContent} from "src/layouts/dashboard";
import {ProductItem} from "../productItem";
import {paths} from "../../../routes/paths";

import {Iconify} from "../../../components/iconify";
import {useAuthContext} from "../../../auth/hooks";

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import {useTabs} from 'src/hooks/use-tabs';

import axios, {endpoints} from "../../../utils/axios";
import {toast} from "src/components/snackbar";
import Stack from "@mui/material/Stack";
import {ProductTable} from "../../../components/productTable/productTable";

export function ProductsEditView() {
  const [products, setProducts] = useState([]);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const {user} = useAuthContext();
  const tabs = useTabs('edit');

  const TABS = [
    {label: 'Edit Products', value: 'edit'},
    {label: 'View in Table', value: 'table'},
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(endpoints.products.getProductsById(user.id));
        setProducts(response.data);
      } catch (error) {
        toast.error("Failed to fetch products");
      }
    };
    if (user?.id) {
      fetchProducts();
    }
  }, [user?.id]);

  useEffect(() => {
    const hasInvalidData = products.some((product) => !product.name?.trim() || !isValidUrl(product.url));
    setIsSaveDisabled(hasInvalidData);
  }, [products]);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const addProduct = () => {
    setProducts([...products, {id: Date.now(), name: "", url: "", content: "", category: ""}]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
  };

  const handleSave = async () => {
    try {
      await axios.post(
        endpoints.products.createProduct(user.id),
        products.map(({ name, url, content, category }) => ({
          name,
          url,
          content: content.replace(/^data:image\/\w+;base64,/, ''), // Base64-Präfix entfernen
          category,
        }))
      );
      toast.success("Products saved successfully");
    } catch (error) {
      toast.error("An error occurred while saving products");
    }
  };

  const handleTabChange = (event, newValue) => {
    tabs.onChange(event, newValue);
  };

  const renderTabs = (
    <Tabs value={tabs.value} onChange={handleTabChange}>
      {TABS.map((tab) => (
        <Tab key={tab.value} iconPosition="end" value={tab.value} label={tab.label}/>
      ))}
    </Tabs>
  );

  const renderEdit = () => {
    return (
      <>
        <Card sx={{p: 3, gap: 2, mt: 3}}>
          <Typography variant="h3" gutterBottom>
            Customize your Products
          </Typography>
          <Typography variant="body1" gutterBottom>
            Add a name, image, and more.
          </Typography>
          {products.map((product, index) => (
            <ProductItem key={product.id} id={product.id} product={product} index={index} onRemove={removeProduct}
                         onChange={updateProduct}/>
          ))}
          <Button sx={{mt: 3}} variant="outlined" color="primary" fullWidth onClick={addProduct}>
            + Add new Product
          </Button>
        </Card>
        <Box sx={{justifyContent: "flex-end", display: "flex", mt: 1}}>
          <Button
            variant="outlined"
            onClick={handleSave}
            startIcon={<Iconify icon="material-symbols-light:save-outline"/>}
            disabled={isSaveDisabled}
          >
            Save
          </Button>
        </Box>
      </>
    )
  }

  return (
    <DashboardContent>
      <Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h4" gutterBottom>
          Manage Your Products
        </Typography>
        <Button
          variant="contained"
          endIcon={<Iconify icon="cuida:open-in-new-tab-outline"/>}
          onClick={() => window.open(paths.products.view(user.id, "_blank", "noopener,noreferrer"))}
        >
          Preview
        </Button>

      </Stack>

      {renderTabs}

      {tabs.value === 'edit' && renderEdit()}
      {tabs.value === 'table' && <ProductTable products={products} />}
    </DashboardContent>
  );
}
