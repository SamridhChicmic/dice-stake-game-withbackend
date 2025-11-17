import dotenv from "dotenv";
dotenv.config();

export const isDemoMode = process.env.DEMO_MODE !== "false";

export const demoStore = {
  user: {
    id: "demo-user",
    username: "Demo Player",
  },
  balance: {
    amount: 10000,
    locked: 0,
  },
  onRampTransactions: [],
  gameTransactions: [],
};

export const getDemoOrder = (options) => ({
  id: `demo_order_${Date.now()}`,
  entity: "order",
  amount: options.amount,
  currency: options.currency,
  receipt: options.receipt,
  status: "created",
  attempts: 0,
  notes: options.notes ?? {},
  demo: true,
});

