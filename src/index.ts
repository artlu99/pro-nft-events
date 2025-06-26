import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("TierRegistry:PurchasedTier", async ({ event, context }) => {
  await context.db.insert(schema.purchaseTierEvent).values({
    id: event.id,
    fid: event.args.fid,
    tier: Number(event.args.tier),
    forDays: Number(event.args.forDays),
    payer: event.args.payer,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
  });
});
