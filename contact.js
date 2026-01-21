
const supabaseUrl = "https://poygqchfoesboysfuace.supabase.co";
const supabaseKey = "sb_publishable_BbTSYzP__7qs0Q_daHFEMQ_twjAZmrH";

// 1. Rename this variable to 'supabaseClient'
const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  // 2. Change 'supabase.from' to 'supabaseClient.from'
  const { error } = await supabaseClient
    .from("messages")
    .insert([
      {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }
    ]);

  if (error) {
    alert("Something went wrong. Try again.");
    console.error(error);
  } else {
    form.reset();
  }
});