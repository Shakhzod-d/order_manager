// OrdersFilter.tsx
import React, { useState } from "react";
import { TextField, Button, MenuItem, Stack } from "@mui/material";

interface OrdersFilterProps {
  onFilter: (
    status: string,
    startDate: string,
    endDate: string,
    search: string
  ) => void;
}

const OrdersFilter: React.FC<OrdersFilterProps> = ({ onFilter }) => {
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");

  const handleFilter = () => onFilter(status, startDate, endDate, search);
  const handleReset = () => {
    setStatus("");
    setStartDate("");
    setEndDate("");
    setSearch("");
    onFilter("", "", "", "");
  };

  return (
    <Stack spacing={2} direction="row">
      <TextField
        select
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        variant="outlined"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Pending">O‘tkazilmagan</MenuItem>
        <MenuItem value="Shipped">Jo‘natildi</MenuItem>
        <MenuItem value="Delivered">Yetkazildi</MenuItem>
      </TextField>

      <TextField
        type="date"
        label="Boshlanish sanasi"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        type="date"
        label="Tugash sanasi"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Qidirish"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button variant="contained" onClick={handleFilter}>
        Filtrlash
      </Button>
      <Button onClick={handleReset}>Tiklash</Button>
    </Stack>
  );
};

export default OrdersFilter;
