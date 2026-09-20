// //The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// function nasa (){
//     let textNeeded = userInput.value
//     console.log(textNeeded)
//     fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/140918date=${textNeeded}`)
//     // fetch(`https://api.nasa.gov/planetary/apod?api_key=uO3KZy4MfBSXrr8kfhqlxpPUZsH1RAk8iTcel5yW&date=${textNeeded}`) Learn to try and make this link work
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         console.log('data from NASA', data)
//         display(data.url)
//     })


document.querySelector('button').addEventListener('click', nasa);
function nasa(){
    let userInput = document.querySelector('input').value
    let textNeeded = userInput.split('-').join('').slice(2)
    let videoSource = document.querySelector('video').src
    console.log(textNeeded)
    console.log(userInput)

    fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${textNeeded}`)
    .then(res => res.json())
    .then(data => { 
        console.log(data)
        console.log(data.media_type)
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerHTML =  data.explanation
        if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
            document.querySelector('video').style.display = 'none'
        } else{
        // document.querySelector('img').src = data.hdurl
        let basic_html = data.basic_html
        let virDom = new DOMParser()
        let dommy = virDom.parseFromString(basic_html, 'text/html')
        console.log(dommy)
        console.log(dommy.querySelector('source').src)
        document.querySelector('video').src = dommy.querySelector('source').src
        }
    }
        // videoSource =  dommy.querySelector('source').src
        

    //         document.querySelector('video').src = data
    // }
    )
}

    