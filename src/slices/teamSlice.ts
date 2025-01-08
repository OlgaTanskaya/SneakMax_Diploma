import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL: string = "https://91e76ca43b25a69c.mokky.dev";

export interface ITeam {
  id: number; 
  imgUrl: string; 
  name: string; 
  role: string; 
}

export const fetchTeam = createAsyncThunk<ITeam[]>(
  "team/fetchTeam", 
  async () => {
    try {
      
      const { data } = await axios.get(`${BASE_URL}/team`);

      return data;
    } catch (error) {
      
      console.log("Failed to fetch:", error);
    }
  }
);

interface IState {
  data: ITeam[]; 
}

const initialState: IState = {
  data: [],
};

export const teamSlice = createSlice({
  name: "team", 
  initialState, 
  reducers: {}, 
  extraReducers: (builder) => {
    
    builder.addCase(
      fetchTeam.fulfilled,
      (state, action: PayloadAction<ITeam[]>) => {
        
        state.data = action.payload;
      }
    );
  },
});

export const teamReducer = teamSlice.reducer;
