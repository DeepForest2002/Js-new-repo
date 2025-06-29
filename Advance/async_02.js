async function safeFetch() {
  try {
    const response = await fetch("https://invalid.url");
    if (!response.ok) {
      throw new Error(`Failed to import ${response.status}`);
    }
  } catch (error) {
    console.log("Error during fetch", error.message);
  }
}

safeFetch();
