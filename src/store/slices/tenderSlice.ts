import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Tender, TenderStatus } from "../../types/tender";

interface TenderState {
  items: Tender[];
}

const initialState: TenderState = {
  items: [
    {
      id: "1",
      title: "Tender Mouse",
      products: 9,
      participants: 3,
      date: "15 / 12 / 2025",
      status: 1,
    },
    {
      id: "2",
      title: "Tender Monitor",
      products: 9,
      participants: 3,
      date: "15 / 12 / 2025",
      status: 1,
    },
    {
      id: "3",
      title: "Tender Laptop",
      products: 9,
      participants: 3,
      date: "15 / 12 / 2025",
      status: 2,
    },
  ],
};

const tenderSlice = createSlice({
  name: "tenders",
  initialState,
  reducers: {
    updateTenderStatus: (
      state,
      action: PayloadAction<{ id: string; newStatus: TenderStatus }>
    ) => {
      const tender = state.items.find((t) => t.id === action.payload.id);
      if (tender) {
        tender.status = action.payload.newStatus;
      }
    },
  },
});

export const { updateTenderStatus } = tenderSlice.actions;
export default tenderSlice.reducer;
