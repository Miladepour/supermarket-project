import Table from "./ExampleTable.js";
export default function ChallengeDescription() {
  return (
    <div>
      <h1>The Challenge</h1>
      <p>
        Implement the code for a supermarket checkout that calculates the total
        price of a number of items. In a normal supermarket, items are
        identified using Stock Keeping Units (SKUs), but in our store we’ll be
        using individual letters of the alphabet (A, B, C etc). Our goods are
        priced individually, but some items also have multibuy offers. For
        example, item A might cost 60 individually, but if you buy three A’s
        then they’ll cost you 150.{" "}
      </p>
      <Table />
      <p>
        Items can be scanned in any order, so if we scan a B, an A, then another
        B, we’ll recognise the offer for two B’s and price them at 45, giving a
        total price of 105. Because our store changes its pricing frequently, we
        need to be able to pass in a set of pricing rules each time we begin
        handling a checkout transaction.
      </p>
    </div>
  );
}
