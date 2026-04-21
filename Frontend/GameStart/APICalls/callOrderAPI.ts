const ORDER_URL = "http://192.168.113.181:8000/com.gamestart/v1/order/send";

export async function submitOrder(email: string, order: any) {
  const res = await fetch(ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, order }),
  });

  const data = await res.json();

  if (!res.ok || data.error) {
    throw new Error(data.error || `Order Submision Failed! `);
  }

  return data;
}
