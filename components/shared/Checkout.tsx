import { IEvent } from "@/lib/database/models/event.model";
import { Button } from "../ui/button";

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  const onCheckout = async (e: any) => {
    e.preventDefault;
    console.log("CHECKOUT");
  };
  return (
    <form action={onCheckout}>
      <Button className="button sm:w-fit" type="submit" role="link" size="lg">
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
