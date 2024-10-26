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
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Shipped">Shipped</MenuItem>
        <MenuItem value="Delivered">Delivered</MenuItem>
      </TextField>

      <TextField
        type="date"
        label="from"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        type="date"
        label="to"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button variant="contained" onClick={handleFilter}>
        Filter
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </Stack>
  );
};

export default OrdersFilter;
