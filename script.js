var graphOne = document.getElementById("graphOne").getContext('2d');
var chartOne = new Chart (graphOne, {
    
    type: 'pie', 

    data: {
        labels: ["Good"],
        datasets: [{
            label: "Number of Responses",
            data: [13],
            backgroundColor: [
                "#f89b4e"
            ],
            borderColor: [
                "black",
            ],
            borderWidth: 2,
            hoverBorderWidth: 4
        }]
    },
    options: {
        title:{
            display: true,
            text: "What can you say about the workshop?",
            fontSize: 20,
            fontColor: "#f7f7f7"
        },
        legend: {
            display: true
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#f7f7f7",
                    fontSize: 18,
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#f7f7f7",
                    fontSize: 14,
                    display: false
                }
            }]
        }
    }
})

var graphTwo = document.getElementById("graphTwo").getContext('2d');
var chartTwo = new Chart (graphTwo, {
    
    type: 'doughnut', 

    data: {
        labels: ["One", "Two", "Three", "Four", "Five"],
        datasets: [{
            label: "Number of Responses",
            data: [7, 1, 1, 4, 0],
            backgroundColor: [
                "#f89b4e",
                "#f84f58",
                "#3346d3", 
                "#00d1fe",
                "#f760e5"
            ],
            borderColor: [
                "black",
                "black",
                "black",
                "black",
                "black"
            ],
            borderWidth: 2,
            hoverBorderWidth: 4
        }]
    },
    options: {
        title:{
            display: true,
            text: "Out of 5, how difficult was it to follow the lesson?",
            fontSize: 20,
            fontColor: "#f7f7f7"
        },
        legend: {
            display: true
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#f7f7f7",
                    fontSize: 18,
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#f7f7f7",
                    fontSize: 14,
                    display: false
                }
            }]
        }
    }
})

var graphThree = document.getElementById("graphThree").getContext('2d');
var chartThree = new Chart (graphThree, {
    
    type: 'doughnut', 

    data: {
        labels: ["Cyberbullying Workshop Segment", "Activities", "Discussion"],
        datasets: [{
            label: "Number of Responses",
            data: [3, 6, 4],
            backgroundColor: [
                "#f89b4e",
                "#f84f58",
                "#3346d3" 
            ],
            borderColor: [
                "black",
                "black",
                "black"
            ],
            borderWidth: 2,
            hoverBorderWidth: 4
        }]
    },
    options: {
        title:{
            display: true,
            text: "What did you like most about the workshop? If none, please type none.",
            fontSize: 20,
            fontColor: "#f7f7f7"
        },
        legend: {
            display: true
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#f7f7f7",
                    fontSize: 18,
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#f7f7f7",
                    fontSize: 14,
                    display: false
                }
            }]
        }
    }
})

var graphFour = document.getElementById("graphFour").getContext('2d');
var chartFour = new Chart (graphFour, {
    
    type: 'pie', 

    data: {
        labels: ["None", "The voices of the boys were too low and not energetic", "Participants are called repetitively"],
        datasets: [{
            label: "Number of Responses",
            data: [10, 2, 1],
            backgroundColor: [
                "#f89b4e",
                "#f84f58",
                "#3346d3" 
            ],
            borderColor: [
                "black",
                "black",
                "black"
            ],
            borderWidth: 2,
            hoverBorderWidth: 4
        }]
    },
    options: {
        title:{
            display: true,
            text: "What did you dislike most about the workshop? If none, please type none.",
            fontSize: 20,
            fontColor: "#f7f7f7"
        },
        legend: {
            display: true
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#f7f7f7",
                    fontSize: 18,
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#f7f7f7",
                    fontSize: 14,
                    display: false
                }
            }]
        }
    }
})

var graphFive = document.getElementById("graphFive").getContext('2d');
var chartFive = new Chart (graphFive, {
    
    type: 'pie', 

    data: {
        labels: ["One", "Two", "Three", "Four", "Five"],
        datasets: [{
            label: "Number of Responses",
            data: [0, 0, 0, 2, 11],
            backgroundColor: [
                "#f89b4e",
                "#f84f58",
                "#3346d3", 
                "#00d1fe",
                "#f760e5"
            ],
            borderColor: [
                "black",
                "black",
                "black",
                "black",
                "black"
            ],
            borderWidth: 2,
            hoverBorderWidth: 4
        }]
    },
    options: {
        title:{
            display: true,
            text: "Out of 5, how informational was this workshop?",
            fontSize: 20,
            fontColor: "#f7f7f7"
        },
        legend: {
            display: true
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#f7f7f7",
                    fontSize: 18,
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#f7f7f7",
                    fontSize: 14,
                    display: false
                }
            }]
        }
    }
})

var graphSix = document.getElementById("graphSix").getContext('2d');
var chartSix = new Chart (graphSix, {
    
    type: 'doughnut', 

    data: {
        labels: ["None", "Presentation", "Livelier way of speaking", "Have more participants to be involved in the discussion"],
        datasets: [{
            label: "Number of Responses",
            data: [10, 1, 1, 1, 0],
            backgroundColor: [
                "#00d1fe",
                "#f84f58",
                "#3346d3", 
                "#f760e5",
                "#f89b4e"
            ],
            borderColor: [
                "black",
                "black",
                "black",
                "black",
                "black",
                "black"
            ],
            borderWidth: 2,
            hoverBorderWidth: 4
        }]
    },
    options: {
        title:{
            display: true,
            text: "In what part of the workshop should we improve on if there is any? If none, please type none.",
            fontSize: 20,
            fontColor: "#f7f7f7"
        },
        legend: {
            display: true
        },
        scales: {
            yAxes:[{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#f7f7f7",
                    fontSize: 18,
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#f7f7f7",
                    fontSize: 14,
                    display: false
                }
            }]
        },
    }
})