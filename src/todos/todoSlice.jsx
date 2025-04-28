import { createSlice, nanoid } from "@reduxjs/toolkit";

export const beneficiaresSlice = createSlice({
  name: "beneficiaryDetails",
  initialState: {
    beneficiaryDetail: [],
  },

  reducers: {
    addDetails: (state, action) => {
      const details = {
        id: nanoid(),
        firstName: action.payload.firstName,
        Address: action.payload.Address,
        Country: action.payload.Country,
        pinCode: action.payload.pinCode,
      };
      state?.beneficiaryDetail.push(details);
    },
    removeDetails: (state, action) => {
      state.beneficiaryDetail = state.beneficiaryDetail.filter((list) => {
        return list.id !== action.payload;
      });
    },
    UpdateDetails: (state, action) => {

      if (action.payload["0"] && action.payload["0"].id) {
        const idToUpdate = action.payload["0"].id;
        const updates = { ...action.payload };
        delete updates["0"]; // Remove the nested object

        return {
          ...state,
          beneficiaryDetail: state.beneficiaryDetail.map((item) =>
            item.id === idToUpdate
              ? {
                  ...item,
                  ...action.payload["0"], // Apply nested object updates first
                  ...updates, // Then apply top-level updates
                }
              : item
          ),
        };
      }
      // Check if payload has a direct ID property
      else if (action.payload.id) {
        return {
          ...state,
          beneficiaryDetail: state.beneficiaryDetail.map((item) =>
            item.id === action.payload.id
              ? { ...item, ...action.payload }
              : item
          ),
        };
      }
      return state;
    },
  },
});

export const { addDetails, removeDetails, UpdateDetails } =
  beneficiaresSlice.actions;
export default beneficiaresSlice.reducer;
