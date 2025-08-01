// For dashboard.html
fetch("http://localhost:5000/api/intern")
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").innerText = data.name;
    document.getElementById("referralCode").innerText = data.referralCode;
    document.getElementById("donations").innerText = data.totalDonations;

    const rewardsList = document.getElementById("rewards");
    data.rewards.forEach(reward => {
      const li = document.createElement("li");
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  });