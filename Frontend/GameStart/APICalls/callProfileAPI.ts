const LOGIN_URL =
  "http://localhost:8000/com.gamestart/v1/home/userauthentication/login/";
const REGISTER_URL =
  "http://localhost:8000/com.gamestart/v1/home/userauthentication/register/";

// keep this as-is (you said assume it works)
export async function loginWithEmailPassword(email: string, password: string) {
  const res = await fetch(`${LOGIN_URL}~${email}~${password}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    let message = "Login failed";
    try {
      console.log(res);
      // const data = await res.json();
      // message = data.detail || data.message || message;
    } catch {}
    throw new Error(message);
  }

  console.log(res);
  const data = await res.json();
  return data;
}

// ✅ NEW: make this match how login works
export async function registerNewUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const res = await fetch(
    `${REGISTER_URL}~${firstName}~${lastName}~${email}~${password}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body is optional, backend can ignore this if it only uses the URL
      body: JSON.stringify({ firstName, lastName, email, password }),
    }
  );

  if (!res.ok) {
    let msg = "Registration failed";
    try {
      const data = await res.json();
      msg = (data.detail || data.message || data.error || msg) as string;
    } catch {}
    throw new Error(msg);
  }

  return res.json();
}
