// import { createSlice } from '@reduxjs/toolkit';

// const bankSlice = createSlice({
//     name: 'bank',
//     initialState: {
//         selectedBank: null,
//         banks: {
//         'BCA Transfer': {
//             accountNumber: '123-456-789',
//         },
//         'BNI Transfer': {
//             accountNumber: '987-654-321',
//         },
//         'Mandiri Transfer': {
//             accountNumber: '456-789-012',
//         },
//         },
//     },
//     reducers: {
//         setBank: (state, action) => {
//         state.selectedBank = action.payload;
//         },
//         clearBank: (state) => {
//         state.selectedBank = null;
//         },
//     },
// });

// export const { setBank, clearBank } = bankSlice.actions;

// export const selectBank = (state) => state.bank.selectedBank;
// export const selectBankInfo = (state) => state.bank.banks[state.bank.selectedBank];

// export default bankSlice.reducer;
