import {Card, IconButton, MenuItem, Select, Stack, TextField, Typography} from "@mui/material";
import {Iconify} from "src/components/iconify";
import {useState} from "react";
//Item for the Products
export function ProductItem({id, product, index, onRemove, onChange}) {
  const [content, setContent] = useState(product.content || "");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setContent(e.target.result);
        onChange(id, {...product, content: e.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card sx={{p: 2, mt: 2, display: "flex", flexDirection: "column", gap: 2}}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1">Product #{index + 1}</Typography>
        <IconButton onClick={() => onRemove(id)} color="error">
          <Iconify icon="bi:trash"/>
        </IconButton>
      </Stack>
      <input type="file" accept="image/*" onChange={handleFileChange}/>
      {content && <img src={content} alt="Product" style={{width: "100px", height: "100px", objectFit: "cover"}}/>}
      <TextField
        fullWidth
        label="Product Name"
        value={product.name}
        onChange={(e) => onChange(id, {...product, name: e.target.value})}
      />
      <TextField
        fullWidth
        label="Product URL"
        placeholder="Enter product URL"
        value={product.url}
        onChange={(e) => onChange(id, {...product, url: e.target.value})}
      />
      <Select
        fullWidth
        value={product.category}
        onChange={(e) => onChange(id, {...product, category: e.target.value})}
        displayEmpty
      >
        <MenuItem value="" disabled>
          Select Category
        </MenuItem>
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Clothing">Clothing</MenuItem>
        <MenuItem value="Home & Garden">Home & Garden</MenuItem>
        <MenuItem value="Beauty">Beauty</MenuItem>
      </Select>
    </Card>
  );
}
