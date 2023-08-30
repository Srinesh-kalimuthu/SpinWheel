const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("btn");
const finalValue = document.getElementById("final-value");

const rotationValues = [

    { minDegree: 0, maxDegree: 20, value: "shami" },
    { minDegree: 21, maxDegree: 40, value: "rohit" },
    { minDegree: 41, maxDegree: 60, value: "dhawan" },
    { minDegree: 61, maxDegree: 80, value: "rahul" },
    { minDegree: 81, maxDegree: 100, value: "iyer" },
    { minDegree: 101, maxDegree: 120, value: "pant" },
    { minDegree: 121, maxDegree: 140, value: "jadeja" },
    { minDegree: 141, maxDegree: 160, value: "bumrah" },
    { minDegree: 161, maxDegree: 180, value: "Kohli" },
    { minDegree: 181, maxDegree: 200, value: "kulcha" },
    { minDegree: 201, maxDegree: 220, value: "iyer" },
    { minDegree: 221, maxDegree: 240, value: "kulcha" },
    { minDegree: 241, maxDegree: 260, value: "rahul" },
    { minDegree: 261, maxDegree: 280, value: "shami" },
    { minDegree: 281, maxDegree: 300, value: "dhawan" },
    { minDegree: 301, maxDegree: 320, value: "bumrah" },
    { minDegree: 321, maxDegree: 330, value: "rohit" },
    { minDegree: 331, maxDegree: 340, value: "jadeja" },
    { minDegree: 341, maxDegree: 350, value: "virat" },
    { minDegree: 351, maxDegree: 360, value: "pant" },
];
const data = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
const pieColors = [
    "#3F3D56",
    "#AABDFF",
    "#3F3D56",
    "#AABDFF",
    "#3F3D56",
    "#AABDFF",
];

let myChart = new Chart(wheel, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                backgroundColor: pieColors,
                data: data,
            },
        ],
    },
    options: {
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            tooltip: false,
            legend: {
                display: false,
            },
            datalabels: {
                color: "#ffffff",
                formatter: (_, context) =>
                    context.chart.data.labels[context.dataIndex],
                font: { size: 24 },
            },
        },
    },
});

const valueGenerator = (angleValue) => {
    for (let i of rotationValues) {
        if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>Topic: ${i.value}</p>`;
            spinBtn.disabled = false;
            break;
        }
    }
};

let animationInterval;
let currentRotation = 0;
let finalAngle = 0;

spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Cheer up!</p>`;
    currentRotation = 0;
    finalAngle = 2160 + Math.random() * 720;

    const spinWheel = () => {
        currentRotation += 15;
        // if (currentRotation >= 360) {
        //     currentRotation -= 360;
        // }

        myChart.options.rotation = currentRotation;
        myChart.update();

        if (currentRotation >= finalAngle) {
            clearInterval(animationInterval);
            const randomIndex = Math.floor(Math.random() * rotationValues.length);
            const selectedTopic = rotationValues[randomIndex].value;
            setTimeout(() => {
                finalValue.innerHTML = `<p>Topic: ${selectedTopic}</p>`;
            }, 1000);

            spinBtn.disabled = false;
        }
    };

    animationInterval = setInterval(spinWheel, 80);
});















// {
//     minDegree: 0, maxDegree: 20, value: "shami"
// }

//     ,
// {
//     minDegree: 21, maxDegree: 40, value: "rohit"
// }

//     ,
// {
//     minDegree: 41, maxDegree: 60, value: "dhawan"
// }

//     ,
// {
//     minDegree: 61, maxDegree: 80, value: "rahul"
// }

//     ,
// {
//     minDegree: 81, maxDegree: 100, value: "iyer"
// }

//     ,
// {
//     minDegree: 101, maxDegree: 120, value: "pant"
// }

//     ,
// {
//     minDegree: 121, maxDegree: 140, value: "jadeja"
// }

//     ,
// {
//     minDegree: 141, maxDegree: 160, value: "bumrah"
// }

//     ,
// {
//     minDegree: 161, maxDegree: 180, value: "Kohli"
// }

//     ,
// {
//     minDegree: 181, maxDegree: 200, value: "kulcha"
// }

//     ,
// {
//     minDegree: 201, maxDegree: 220, value: "iyer"
// }

//     ,
// {
//     minDegree: 221, maxDegree: 240, value: "kulcha"
// }

//     ,
// {
//     minDegree: 241, maxDegree: 260, value: "rahul"
// }

//     ,
// {
//     minDegree: 261, maxDegree: 280, value: "shami"
// }

//     ,
// {
//     minDegree: 281, maxDegree: 300, value: "dhawan"
// }

//     ,
// {
//     minDegree: 301, maxDegree: 320, value: "bumrah"
// }

//     ,
// {
//     minDegree: 321, maxDegree: 330, value: "rohit"
// }

//     ,
// {
//     minDegree: 331, maxDegree: 340, value: "jadeja"
// }

//     ,
// {
//     minDegree: 341, maxDegree: 350, value: "virat"
// }

//     ,
// {
//     minDegree: 351, maxDegree: 360, value: "pant"
// }

//     ,

























// const wheel = document.getElementById("wheel");
// const spinBtn = document.getElementById("btn");
// const finalValue = document.getElementById("final-value");

// //Object that stores values of minimum and maximum angle for a value
// const rotationValues = [
//     {
//         minDegree: 0, maxDegree: 20, value: "shami"
//     }

//     ,
//     {
//         minDegree: 21, maxDegree: 40, value: "rohit"
//     }

//     ,
//     {
//         minDegree: 41, maxDegree: 60, value: "dhawan"
//     }

//     ,
//     {
//         minDegree: 61, maxDegree: 80, value: "rahul"
//     }

//     ,
//     {
//         minDegree: 81, maxDegree: 100, value: "iyer"
//     }

//     ,
//     {
//         minDegree: 101, maxDegree: 120, value: "pant"
//     }

//     ,
//     {
//         minDegree: 121, maxDegree: 140, value: "jadeja"
//     }

//     ,
//     {
//         minDegree: 141, maxDegree: 160, value: "bumrah"
//     }

//     ,
//     {
//         minDegree: 161, maxDegree: 180, value: "Kohli"
//     }

//     ,
//     {
//         minDegree: 181, maxDegree: 200, value: "kulcha"
//     }

//     ,
//     {
//         minDegree: 201, maxDegree: 220, value: "iyer"
//     }

//     ,
//     {
//         minDegree: 221, maxDegree: 240, value: "kulcha"
//     }

//     ,
//     {
//         minDegree: 241, maxDegree: 260, value: "rahul"
//     }

//     ,
//     {
//         minDegree: 261, maxDegree: 280, value: "shami"
//     }

//     ,
//     {
//         minDegree: 281, maxDegree: 300, value: "dhawan"
//     }

//     ,
//     {
//         minDegree: 301, maxDegree: 320, value: "bumrah"
//     }

//     ,
//     {
//         minDegree: 321, maxDegree: 330, value: "rohit"
//     }

//     ,
//     {
//         minDegree: 331, maxDegree: 340, value: "jadeja"
//     }

//     ,
//     {
//         minDegree: 341, maxDegree: 350, value: "virat"
//     }

//     ,
//     {
//         minDegree: 351, maxDegree: 360, value: "pant"
//     }

//     ,
// ];
// //Size of each piece
// const data = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
// //background color for each piece
// var pieColors = [
//     "#3F3D56",
//     "#AABDFF",
//     "#3F3D56",
//     "#AABDFF",
//     "#3F3D56",
//     "#AABDFF",
// ];
// // var labelcolor = ["#1D186C",];
// //Create chart
// let myChart = new Chart(wheel, {
//     //Plugin for displaying text on pie chart
//     plugins: [ChartDataLabels],
//     //Chart Type Pie
//     type: "pie",
//     data: {
//         //Labels(values which are to be displayed on chart)
//         labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         //Settings for dataset/pie
//         datasets: [
//             {
//                 backgroundColor: pieColors,
//                 data: data,

//             },
//         ],
//     },
//     options: {
//         //Responsive chart
//         responsive: true,
//         animation: { duration: 0 },
//         plugins: {
//             //hide tooltip and legend
//             tooltip: false,
//             legend: {
//                 display: false,
//             },
//             //display labels inside pie chart
//             datalabels: {
//                 color: "#ffffff",
//                 formatter: (_, context) => context.chart.data.labels[context.dataIndex],
//                 font: { size: 24 },
//             },
//         },
//     },
// });
// //display value based on the randomAngle
// const valueGenerator = (angleValue) => {
//     for (let i of rotationValues) {
//         //if the angleValue is between min and max then display it
//         if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
//             finalValue.innerHTML = `<p>Topic: ${i.value}</p>`;
//             spinBtn.disabled = false;
//             break;
//         }
//     }
// };

// //Spinner count
// let count = 0;
// //100 rotations for animation and last rotation for result
// let resultValue = 101;
// //Start spinning
// spinBtn.addEventListener("click", () => {
//     spinBtn.disabled = true;
//     //Empty final value
//     finalValue.innerHTML = `<p>Cheer up!</p>`;
//     //Generate random degrees to stop at
//     let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
//     //Interval for rotation animation
//     let rotationInterval = window.setInterval(() => {
//         //Set rotation for piechart
//         /*
//         Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
//         */
//         myChart.options.rotation = myChart.options.rotation + resultValue;
//         //Update chart with new value;
//         myChart.update();
//         //If rotation>360 reset it back to 0
//         if (myChart.options.rotation >= 360) {
//             count += 1;
//             resultValue -= 5;
//             myChart.options.rotation = 0;
//         } else if (count > 15 && myChart.options.rotation == randomDegree) {
//             valueGenerator(randomDegree);
//             clearInterval(rotationInterval);
//             count = 0;
//             resultValue = 101;
//         }
//     }, 20);
// });