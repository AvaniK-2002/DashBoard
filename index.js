// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
	// Get all the "Profile" buttons
	const profileButtons = document.querySelectorAll(".card button");
  
	// Add a click event listener to each "Profile" button
	profileButtons.forEach(function(button) {
	  button.addEventListener("click", function(event) {
		// Get the parent card element
		const card = event.target.closest(".card");
  
		// Get the name of the user
		const userName = card.querySelector("h4").textContent;
  
		// Display the user's name in an alert
		alert("Profile clicked for " + userName);
	  });
	});
  });
  var progressData = {
	labels: ["Web Development", "Wordpress", "Graphic Design", "IOS Dev"],
	datasets: [{
	  label: "Progress",
	  data: [90, 75, 80, 60],
	  backgroundColor: "rgba(75, 192, 192, 0.6)"
	}]
  };

  // Chart configuration
  var chartConfig = {
	type: 'bar',
	data: progressData,
	options: {
	  responsive: true,
	  scales: {
		y: {
		  beginAtZero: true,
		  max: 100,
		  ticks: {
			stepSize: 10
		  }
		}
	  }
	}
  };

  // Create the progress chart
                    const xValues = ["IHTML", "CSS", "JAVASCRIPT", "PHP"];
                    const yValues = [60, 40, 35, 30,0,100];
                    const barColors = ["Red", "green","blue","orange"];
                    
                    new Chart("myChart", {
                      type: "bar",
                      data: {
                        labels: xValues,
                        datasets: [{
                          backgroundColor: barColors,
                          data: yValues
                        }]
                      },
                      options: {
                        legend: {display: false},
                        title: {
                          display: true,
                          text: "MY Course Completion Perecentage"
                        }
                      }
                    });