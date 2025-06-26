import { onchainTable } from "ponder";

export const purchaseTierEvent = onchainTable("purchaseTierEvent", (t) => ({
  id: t.text().primaryKey(),
  fid: t.bigint().notNull(),
  tier: t.integer().notNull(),
  forDays: t.integer().notNull(),
  payer: t.text().notNull(),
  blockNumber: t.bigint().notNull(),
  blockTimestamp: t.bigint().notNull(),
  transactionHash: t.text().notNull(),
}));
