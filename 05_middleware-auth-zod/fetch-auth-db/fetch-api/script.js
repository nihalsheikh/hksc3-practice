// Fetch-api code
async function getUserInfo() {
	// by default, fetch sends GET req
	const response = await fetch("https://fakerapi.it/api/v1/persons");

	if (!response) {
		console.error("No response data from api");
		return;
	}

	const finalData = await response.json();

	if (!finalData) {
		console.error("No user data in response");
		return;
	}

	console.log(finalData);
}
