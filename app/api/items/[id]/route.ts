type Item = {
    id: number;
    title: string;
    description: string;
  };
  
  type ItemProps = {
    a: Item;
    b: Item;
    c: Item;
    d: Item;
  };
  
  export async function GET({ params }: { params: { id: string } }) {
    const { id } = params; // ✅ Corrected destructuring
  
    const items: ItemProps = {
      a: { id: 1, title: "Item A", description: "This is item A" },
      b: { id: 2, title: "Item B", description: "This is item B" },
      c: { id: 3, title: "Item C", description: "This is item C" },
      d: { id: 4, title: "Item D", description: "This is item D" },
    };
  
    const item = items[id as keyof ItemProps]; // ✅ Fixed type error
  
    if (!item) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
      });
    }
  
    return new Response(JSON.stringify(item), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  