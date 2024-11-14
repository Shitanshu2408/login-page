document.addEventListener('DOMContentLoaded', () => {
    // Initialize Chart.js for the real-time analytics chart
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1s', '2s', '3s', '4s', '5s', '6s'],
            datasets: [{
                label: 'Data Rate (Mbps)',
                data: [10, 20, 15, 25, 30, 35],
                borderColor: '#007bff',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (s)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Data Rate (Mbps)'
                    }
                }
            }
        }
    });
});



function showSafeAlert() {
    alert("Everything is safe, no danger.");
}

function showDangerAlert() {
    alert("Threat alert!");
}
