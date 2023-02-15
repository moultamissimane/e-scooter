import { createSlice } from "@reduxjs/toolkit";

interface IFood {
        food: string;
        name: string;
        image: string;
        quantity: string;
        price: string;
      
}
export interface ICommand {
  livreur: any;
  CommandOwner: string;
  time: string;
  location: string;
  status: string;
  expoToken: string;
  coupon: string;
  foods: IFood[];
  TotalPrice: string;
}

const initialState: any = {
  command: {
    livreur: null,
    CommandOwner: "",
    time: "",
    location: "",
    status: "reception de la commande",
    expoToken: "",
    coupon: "",
    foods: [],
    TotalPrice: "",
  },
};

export const CommandSlice: any = createSlice({
  name: "Command",
  initialState,
  reducers: {
    command: (state: any, action: any) => {
      if (state.command.CommandOwner == "") {
        state.command = {
          ...action.payload.data,
          foods: [action?.payload.data.foods],
        };
      } else {
        let arr: any = [];
        let newFood = state?.command?.foods.map((item: any) => {
          arr.push(item.food);
          if (item.food == action?.payload?.data.foods?.food) {
            if (action.payload.sign == "+") {
              item.quantity = item.quantity + 1;
            } else {
              item.quantity = item.quantity - 1;
            }
            return item;
          } else {
            return item;
          }
        });
        let check = arr.includes(action?.payload?.data.foods?.food);
        if (!check) {
          newFood.push(action?.payload?.data.foods);
        }
        state.command = { ...state.command, foods: newFood };
      }
    },
    addFoodToCommande: (state: any, action: any) => {
      const NewArr = state.command.foods?.map((food : IFood) => {
        if (food?.food === action.payload.id) {
          return { ...food, quantity: +food.quantity + 1 };
        } else {
          return food;
        }
      });
      state.command.foods = NewArr;
    },
    minusFoodToCommande: (state: any, action: any) => {
      const NewArr = state.command.foods?.map((food : IFood) => {
        if (food?.food === action.payload.id) {
          return { ...food, quantity: +food.quantity - 1 };
        } else {
          return food;
        }
      });
      state.command.foods = NewArr;
    },
  },
});

export const { command, addFoodToCommande , minusFoodToCommande }: any = CommandSlice.actions;

export const Command = CommandSlice.reducer;
