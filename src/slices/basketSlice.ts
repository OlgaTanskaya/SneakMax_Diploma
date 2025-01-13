import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ISneakers {
  color: string;
  compound: string;
  country: string;
  description: string;
  gender: string;
  id: number;
  imgUrl: string;
  inStock: number;
  oldPrice: number;
  price: number;
  sizes: number[];
  stars: number;
  title: string;
  vendorСode: string;
}

const BASE_URL: string = "https://91e76ca43b25a69c.mokky.dev";

export const fetchBasket = createAsyncThunk<ISneakers[]>(
  "basket/fetchBasket",
  async (): Promise<ISneakers[]> => {
    try {
      const { data } = await axios.get<ISneakers[]>(`${BASE_URL}/basket/`);

      return data;
    } catch (error) {
      console.log("Failed to fetch:");
      return [];
    }
  }
);

export const postBasket = createAsyncThunk<ISneakers, ISneakers>(
  "basket/postBasket",
  async (item) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/basket`, item);
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Failed to post basket");
    }
  }
);

export const delBasket = createAsyncThunk<any, any>(
  "basket/delBasket",
  async (id) => {
    try {
      await axios.delete(`${BASE_URL}/basket/${id}`);

      return id;
    } catch (error) {
      throw new Error("Failed to delete basket");
    }
  }
);

interface IState {
  data: ISneakers[];
  isOpen: boolean;
  isPageOpen: boolean;
  isProductOpen: boolean;
  totalCount: number;
  totalPrice: number;
  selectedProduct: ISneakers | null;
}

const initialState: IState = {
  data: [],
  isOpen: false,
  isPageOpen: true,
  isProductOpen: false,
  totalCount: 0,
  totalPrice: 0,
  selectedProduct: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<ISneakers | null>) {
      state.selectedProduct = action.payload;
    },
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setIsPageOpen(state, action: PayloadAction<boolean>) {
      state.isPageOpen = action.payload;
    },
    setIsProductOpen(state, action: PayloadAction<boolean>) {
      state.isProductOpen = action.payload;
    },
    calculateTotalCount(state) {
      state.totalCount = state.data.length;
    },

    calculateTotalPrice(state) {
      state.totalPrice = state.data.reduce((sum, item) => sum + item.price, 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    builder.addCase(delBasket.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload);
    });
  },
});

export const {
  setSelectedProduct,
  setIsOpen,
  setIsPageOpen,
  calculateTotalCount,
  calculateTotalPrice,
  setIsProductOpen,
} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
